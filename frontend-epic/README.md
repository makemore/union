# Union Frontend — Epic Hyperspace Skin

A Union frontend that replicates the look and feel of **Epic Hyperspace / MyChart**, the EHR used by many of the UK's largest acute trusts including Cambridge, King's College, GOSH, Manchester, and Frimley.

## Why Epic?

Epic is the dominant and fastest-growing EHR in UK secondary care. Its Hyperspace interface is what clinicians in major teaching hospitals use every day. Replicating its layout patterns means clinicians moving from an Epic trust to a Union-powered system experience zero friction.

## Target Interface

Epic Hyperspace's UI is characterised by:

- **Activity tabs** — top-level workflow tabs (Chart Review, Notes, Orders, Results, Medications, etc.)
- **Patient header** — prominent banner with name, MRN, DOB, age, allergies, code status, isolation status, attending physician
- **Sidebar navigation** — context-sensitive sidebar (Summary, Bedside, Brain, etc.)
- **Note-centric workflow** — clinical documentation built around SmartText and structured note templates
- **Storyboard** — quick-glance patient summary strip

## Design Sources

Epic's interface is proprietary and most documentation is behind their UserWeb login. However, useful public references exist:

- [Theator Epic Hyperspace Mock — live interactive mock of the Hyperspace interface](https://epic-mock.theator.io/)
- [open.epic — Design Overview (API/integration design patterns)](https://open.epic.com/DesignOverview)
- [University of Iowa — Hyperspace basics and navigation guides](https://epicsupport.sites.uiowa.edu/epic-resources/hyperspace-epic-basics)
- [MyChart.org — patient-facing portal (public)](https://www.mychart.org/)
- NHS trust training materials and YouTube walkthroughs (search "Epic Hyperspace NHS training")

## Status

🟡 **Stub** — folder structure only. No implementation yet.

## Stack

Same as all Union frontends: Next.js, React, Tailwind CSS, shadcn/ui. See `frontend-emis` for the base template.
