# Union

An open, modular platform for building modern healthcare systems.

Union provides shared infrastructure for managing patient data, clinical workflows, and inter-system communication — designed to be adopted incrementally alongside existing systems rather than replacing everything at once.

## Architecture

Union is built as a network of **nodes**. A node is a logical unit — a hospital, a clinic, a backbone routing service — with its own identity, data, and role in the network.

```
┌───────────────────────────────────────────────────┐
│                  Union Network                    │
│                                                   │
│  ┌──────────┐    ┌──────────────┐    ┌─────────┐  │
│  │  Local   │<-->│   Backbone   │<-->│  Local  │  │
│  │  Node    │    │    Node      │    │  Node   │  │
│  │          │    │              │    │         │  │
│  │ Hospital │    │  Routing &   │    │ Clinic  │  │
│  │ A        │    │ Coordination │    │ B       │  │
│  └──────────┘    └──────────────┘    └─────────┘  │
│                                                   │
│  Every node runs the same codebase,               │
│  configured for its role.                         │
└───────────────────────────────────────────────────┘
```

### Deployment Model

A single Union install can manage **one node or many**. The install doesn't assume it _is_ a single node — it manages a set of nodes on behalf of an organisation.

| Scenario | Managed Nodes | Example |
|---|---|---|
| **Single-node** | 1 | A community clinic running its own Union instance. |
| **Multi-node** | Several | An NHS trust operating three hospitals from one install. |
| **Backbone** | 1+ | A coordination service routing messages between regions. |

This means all data — patients, events, encounters — is scoped to the node that owns it. There is no ambient "current node" baked into the system. Code that creates events or mutates data always knows _which node_ it is acting on behalf of.

The design principle: if a single install could theoretically run every node in the country, then data ownership, scoping, and isolation must be correct by construction. We will never do this, but designing for the possibility ensures the architecture holds at any real-world scale — one hospital, one trust, or an entire region.

### Node Roles

The same codebase supports two deployment roles, controlled by a single `SYSTEM_ROLE` setting:

| Role | Purpose | Modules Loaded |
|---|---|---|
| **`local`** | Hospital or clinic node. Manages patients, encounters, tasks, and referrals. | Core + Clinical Modules + Messaging Client |
| **`backbone`** | Coordination and routing node. Handles inter-node discovery and message forwarding. | Core + Routing + Messaging |

This is enforced **structurally** — backbone nodes never load clinical modules, and local nodes never load routing internals.

## Platform Structure

Union is packaged as `union_platform`, a pip-installable Django platform (similar to Wagtail) containing multiple apps grouped by domain:

```
union_platform/
├── core/                    # Shared primitives — loaded in all roles
│   ├── events/              # Append-only, immutable Event log
│   ├── nodes/               # Node identity and network registry
│   └── patients/            # Patient records with home-node ownership
├── modules/                 # Clinical apps — local role only
│   ├── encounters/          # Clinical interactions
│   ├── tasks/               # Work items and follow-ups
│   └── referrals/           # Cross-node care transfers
└── interop/                 # Inter-node communication
    ├── routing/             # Event routing and discovery (backbone only)
    └── messaging/           # Transport layer (both roles)
```

### Core Primitives

- **Event** — Immutable, append-only record of every meaningful action. UUID-identified, JSON payload, traceable to source node and actor. Foundation for auditability and cross-node communication.
- **Node** — Represents any node in the network (local or remote). Nodes marked `is_managed=True` are operated by this install; remote peer nodes are `is_managed=False`. A single install can manage one or many.
- **Patient** — Record with an explicit `home_node` establishing which node owns and is authoritative for the patient's data.

### Event-First Communication

All cross-node actions flow through structured events:

```python
from union_platform.core.events.emit import emit_event

emit_event(
    event_type="referral.sent",
    payload={"patient_id": "...", "destination_node_id": "..."},
    actor=request.user,
)
```

Events are written directly to the database today. Async transport and queue-based delivery will be layered in without changing the emission interface.

## Frontends

Union's frontend strategy is a single **legally safe** NHS design system frontend (`frontend-nhs`) with configurable layout presets that approximate the spatial patterns of any major UK clinical system.

### Why not one layout?

Clinicians have deep muscle memory in whichever system they currently use — EMIS, SystmOne, Epic, Cerner, etc. A single "our way" UI forces retraining. Instead, Union provides **layout presets** that make the interface _feel_ familiar from day one, while using the NHS design system and Union's own branding throughout.

### Architecture

```
packages/union-core/         →  @union/core (shared auth, API client, env config, base components)
frontend-nhs/                →  Main frontend — NHS design system with configurable layout presets
frontend-emis/               →  Reference implementation — EMIS-style skin (research/prototyping)
frontend-systmone/           →  Stub — SystmOne patterns
frontend-epic/               →  Stub — Epic Hyperspace patterns
frontend-oracle-health/      →  Stub — Oracle Health / Cerner patterns
frontend-nervecentre/        →  Stub — Nervecentre patterns
frontend-rio/                →  Stub — Rio patterns
frontend-meditech/           →  Stub — MEDITECH Expanse patterns
```

### @union/core — Shared Package

All frontends share common infrastructure via `@union/core`:

- **Auth** — `AuthProvider`, `useAuth()`, `useUser()` hooks, token management
- **API** — Union API client with token auth and error handling
- **Env** — Environment config validation (`NEXT_PUBLIC_UNION_API_URL`, etc.)
- **Components** — `LoginPage`, `RegisterPage` — use directly, customise via props, or replace entirely

### frontend-nhs — Configurable Layout Presets

16 layout flags combine into presets that approximate each major system:

| Preset | Feels Like | Key Characteristics |
|---|---|---|
| `gp-classic` | EMIS Web | Tabs, ribbon toolbar, clinical tree, compact tables |
| `gp-tree` | SystmOne | Tree as primary nav, simple toolbar, comfortable density |
| `acute` | Epic Hyperspace | Tabs, storyboard strip, notes-based records, sidebar |
| `acute-legacy` | Oracle/Cerner | Tabbed organiser, flowsheet results, table records |
| `mobile-ward` | Nervecentre | Bottom tabs, cards, FAB button, spacious mobile-first |
| `community` | Rio | Sidebar nav, structured forms, timeline records |
| `web-acute` | MEDITECH Expanse | Tabs, status board, flowsheet results |

Run the interactive design system to see all presets live:

```bash
cd frontend-nhs && npm install && npm run dev
# Open http://localhost:3000/design-system
```

### Tech Stack

- **Framework:** Next.js 16 (React 19, App Router)
- **Styling:** Tailwind CSS 4, NHS colour tokens
- **Components:** shadcn/ui
- **Monorepo:** npm workspaces

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 20+
- PostgreSQL (or set `USE_SQLITE=true` for local testing)

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
pip install -e .  # Install union_platform as an editable package

# Configure role (defaults to 'local')
export SYSTEM_ROLE=local   # or 'backbone'

# Run
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
# From the repo root — installs all workspace dependencies
npm install

# Run the NHS frontend
cd frontend-nhs && npm run dev

# Or run the EMIS reference frontend
cd frontend-emis && npm run dev
```

### Configuration

#### Backend

| Environment Variable | Default | Description |
|---|---|---|
| `SYSTEM_ROLE` | `local` | Node role: `local` or `backbone` |
| `DATABASE_URL` | — | Full database URL (takes precedence) |
| `USE_SQLITE` | `false` | Use SQLite instead of PostgreSQL |
| `SECRET_KEY` | insecure default | Django secret key |
| `DEBUG` | `true` | Django debug mode |

#### Frontend

| Environment Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_UNION_API_URL` | `http://localhost:8000` | Union backend API URL |
| `NEXT_PUBLIC_UNION_ENV` | `development` | Environment name |
| `NEXT_PUBLIC_UNION_DEBUG` | `true` | Enable debug logging |

## Design Principles

- **Data ownership is explicit.** Every patient record has a home node. Mutations happen at the source of truth.
- **Everything is node-scoped.** There is no ambient "current node." All data and events are attributed to a specific node, whether the install manages one or a hundred.
- **Events are immutable.** Once written, they cannot be updated or deleted. This guarantees auditability.
- **Roles are structural.** App loading is determined at boot, not scattered through runtime conditionals.
- **Design for the ceiling, deploy on the floor.** The architecture assumes a single install could manage every node in the network. It never will, but that constraint keeps data isolation and scoping honest at every real-world scale.
- **The host project stays thin.** Business logic lives in `union_platform`, not in the Django project shell.
- **Adopt incrementally.** Union is designed to run alongside existing systems, not replace them overnight.

## License

Open source. License TBD.
