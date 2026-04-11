# Union

An open, modular platform for building modern healthcare systems.

Union provides shared infrastructure for managing patient data, clinical workflows, and inter-system communication — designed to be adopted incrementally alongside existing systems rather than replacing everything at once.

## Architecture

Union is built as a distributed network of **nodes**. Each deployment (a hospital, clinic, or coordination service) runs its own instance while remaining able to communicate with others.

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
- **Node** — Represents a deployment in the network. Carries identity, role, and endpoint for inter-node messaging.
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

## Getting Started

### Prerequisites

- Python 3.11+
- PostgreSQL (or set `USE_SQLITE=true` for local testing)

### Setup

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

### Configuration

| Environment Variable | Default | Description |
|---|---|---|
| `SYSTEM_ROLE` | `local` | Node role: `local` or `backbone` |
| `DATABASE_URL` | — | Full database URL (takes precedence) |
| `USE_SQLITE` | `false` | Use SQLite instead of PostgreSQL |
| `SECRET_KEY` | insecure default | Django secret key |
| `DEBUG` | `true` | Django debug mode |

## Design Principles

- **Data ownership is explicit.** Every patient record has a home node. Mutations happen at the source of truth.
- **Events are immutable.** Once written, they cannot be updated or deleted. This guarantees auditability.
- **Roles are structural.** App loading is determined at boot, not scattered through runtime conditionals.
- **The host project stays thin.** Business logic lives in `union_platform`, not in the Django project shell.
- **Adopt incrementally.** Union is designed to run alongside existing systems, not replace them overnight.

## License

Open source. License TBD.
