# Union Frontend — SystmOne Skin

A Union frontend that replicates the look and feel of **TPP SystmOne**, the clinical system used by ~45% of GP practices in England plus community, prison, and some secondary care settings.

## Why SystmOne?

SystmOne is the second most widely used primary care system in the UK. Clinicians using SystmOne have deep muscle memory around its clinical tree navigation, patient banner, and consultation workflows. Providing a SystmOne-like interface removes the retraining barrier and makes switching to Union feel like coming home.

## Target Interface

SystmOne's UI is characterised by:

- **Clinical tree** — left-hand tree navigation for patient record sections (Problems, Medications, Allergies, Referrals, etc.)
- **Patient banner** — top bar showing name, DOB, age, gender, NHS number, address, phone
- **Tabbed record views** — Patient Home, Consultations, Medications, Documents, etc.
- **Appointment ledger** — left-column filters with colour-coded slot statuses (booked, arrived, waiting, seen)
- **Consultation recording** — structured data entry via templates within the clinical tree

## Design Sources

SystmOne's UI is proprietary but extensively documented in publicly available NHS training materials:

- [SystmOne for Clinical Staff — NWL Learning (2025 user guide, PDF with screenshots)](https://www.nwllearning.nhs.uk/pluginfile.php/19875/course/section/2094/SystmOne%20for%20Clinical%20Staff%20User%20Guide%202025.pdf)
- [SystmOne for Beginners — NWL Learning (PDF with full navigation screenshots)](https://www.nwllearning.nhs.uk/pluginfile.php/19875/course/section/2092/SystmOne%20for%20Beginners%20.pdf)
- [SystmOne eLearning — RUH Bath (slide deck with annotated screenshots)](https://www.ruh.nhs.uk/careers/millennium/System_One/TPP_eLearning.pdf)
- [SystmOne TPP User Guide — UHB (screenshots of clinical record views)](https://www.uhb.nhs.uk/gps/diagnostic-electronic-requesting/ice-training-materials/systmone-tpp-user-guide/)
- [6B Technical Overview — SystmOne PFS API](https://6b.digital/insights/integrating-with-the-systmone-patient-facing-services-api-a-technical-overview)

## Status

🟡 **Stub** — folder structure only. No implementation yet.

## Stack

Same as all Union frontends: Next.js, React, Tailwind CSS, shadcn/ui. See `frontend-emis` for the base template.
