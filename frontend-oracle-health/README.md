# Union Frontend — Oracle Health (Cerner) Skin

A Union frontend that replicates the look and feel of **Oracle Health** (formerly Cerner Millennium / PowerChart), one of the most widely deployed acute care EHRs across NHS trusts.

## Why Oracle Health?

Oracle Health (Cerner) is used by a significant number of NHS acute trusts including Barts Health, Airedale, and Essex Partnership. Many clinicians have years of experience with its PowerChart interface. Despite Oracle's acquisition, these systems will remain in place for years — providing a familiar interface eases transition.

## Target Interface

Oracle Health PowerChart's UI is characterised by:

- **MPages** — configurable clinical summary pages showing vitals, results, orders, and documentation
- **Tabbed organiser** — top-level tabs for different clinical workflows (Orders, Results, Documentation, MAR)
- **Patient banner** — name, MRN, encounter info, FIN, allergies, isolation, fall risk indicators
- **Results review** — table and flowsheet views for lab and diagnostic results over time
- **PowerNote** — structured clinical documentation with auto-text and templates

## Design Sources

Oracle Health's interface is proprietary. Public references include:

- [NHS trust training materials — search "Cerner Millennium training NHS" for trust-published guides](https://learninghub.nhs.uk/)
- [DigitalHealthJobs — list of trusts using Oracle Health](https://digitalhealthjobs.uk/nhs-trusts-by-epr-vendor/)
- YouTube walkthroughs from NHS trusts and US health systems demonstrating PowerChart navigation
- [Oracle Health documentation portal](https://docs.oracle.com/en/industries/health-sciences/) (limited public access)

## Status

🟡 **Stub** — folder structure only. No implementation yet.

## Stack

Same as all Union frontends: Next.js, React, Tailwind CSS, shadcn/ui. See `frontend-emis` for the base template.
