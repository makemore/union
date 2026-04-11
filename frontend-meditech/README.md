# Union Frontend — MEDITECH Expanse Skin

A Union frontend that replicates the look and feel of **MEDITECH Expanse**, the web-based EHR used by several NHS acute trusts.

## Why MEDITECH?

MEDITECH Expanse is used by trusts like The Rotherham NHS Foundation Trust, East Cheshire, and James Paget. While it has a smaller UK footprint than Epic or Oracle Health, clinicians at MEDITECH sites have built workflows around its distinctive web-based interface. Supporting a MEDITECH-like skin ensures Union can serve these sites without forcing a jarring transition.

## Target Interface

MEDITECH Expanse's UI is characterised by:

- **Web-native** — browser-based, no desktop client required
- **Status board** — ward/department patient list with colour-coded indicators for alerts, results, and tasks
- **Patient chart** — tabbed chart navigation (Labs, Medical Imaging, Departments, Notes) with bold/red abnormal result highlighting
- **Patient banner** — name, PHN, DOB, age, birth sex, reason for visit, length of stay, special indicators
- **PDoc and SOAP notes** — structured clinical documentation with discrete data capture

## Design Sources

MEDITECH Expanse has good public documentation from Canadian and UK health systems:

- [Interior Health — MEDITECH Expanse Web Patient Chart Navigation (PDF with full screenshots)](https://www.interiorhealth.ca/sites/default/files/PDFS/expanse-web-patient-chart-navigation-and-qrg.pdf)
- [Interior Health — Expanse System Applications (video walkthroughs and quick reference guides)](https://www.interiorhealth.ca/information-for/medical-staff/getting-started/e-access/meditech-expanse-system-applications)
- [NHS Learning Hub — MEDITECH Main Menu overview (TRFT)](https://learninghub.nhs.uk/Resource/60405)
- [MEDITECH product pages](https://home.meditech.com/en/d/expanse/)

## Status

🟡 **Stub** — folder structure only. No implementation yet.

## Stack

Same as all Union frontends: Next.js, React, Tailwind CSS, shadcn/ui. See `frontend-emis` for the base template.
