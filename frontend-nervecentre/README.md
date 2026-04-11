# Union Frontend — Nervecentre Skin

A Union frontend that replicates the look and feel of **Nervecentre**, the mobile-first, cloud-native EPR platform increasingly adopted across NHS acute trusts.

## Why Nervecentre?

Nervecentre has grown from an observations and escalation tool into a full EPR platform. It's used by trusts like Bedfordshire Hospitals, East Sussex Healthcare, and Nottingham. Its mobile-first design is distinctive — clinicians using Nervecentre are accustomed to a very different interaction pattern compared to desktop-heavy systems like EMIS or Epic.

## Target Interface

Nervecentre's UI is characterised by:

- **Mobile-first design** — built for use on tablets and smartphones at the bedside
- **Card-based patient views** — patient information presented in cards rather than dense tables
- **Status boards** — ward-level patient list views with colour-coded acuity and task indicators
- **Task-driven workflow** — clinical tasks (observations, assessments, escalations) as first-class UI elements
- **Real-time updates** — live patient flow and escalation alerts

## Design Sources

Nervecentre's interface is proprietary but the company publishes marketing materials and case studies:

- [Nervecentre product pages — screenshots of status boards and mobile interfaces](https://www.nervecentresoftware.com/)
- [6B — Nervecentre Integration Architecture (technical overview)](https://6b.health/insight/nervecentre-integration-architecture-best-practices-for-secure-scalable-interfaces/)
- [NHS Digital Health case studies — trust implementation reports](https://www.digitalhealth.net/)
- YouTube demonstrations from NHS trusts showcasing ward and bedside use

## Status

🟡 **Stub** — folder structure only. No implementation yet.

## Stack

Same as all Union frontends: Next.js, React, Tailwind CSS, shadcn/ui. See `frontend-emis` for the base template.
