# Union Frontend — Rio Skin

A Union frontend that replicates the look and feel of **Servelec Rio**, the EPR system widely used in mental health, community, and children's services across the NHS.

## Why Rio?

Rio is the dominant EPR in NHS mental health and community trusts. It's used by organisations like Avon and Wiltshire Mental Health Partnership, Barnet Enfield and Haringey, Kent and Medway, and many others. Mental health and community services have distinct workflow patterns — longer-term patient relationships, care plans, risk assessments — and clinicians in these settings are deeply familiar with Rio's interface.

## Target Interface

Rio's UI is characterised by:

- **Browser-based** — accessed through a web browser, unlike many desktop-only EPRs
- **Patient summary snapshot** — single-view overview of patient record, care plans, and risk
- **Care pathway navigation** — structured around referrals, assessments, and ongoing care episodes
- **Clinical forms** — extensive use of structured assessment forms (e.g. mental health assessments, risk tools)
- **Mobile access** — mobile app for community clinicians working in the field

## Design Sources

Rio's interface is proprietary. Public references include:

- [Servelec / Rio product information](https://www.servelec.co.uk/)
- [Medway Community Healthcare — Rio implementation (case study with workflow descriptions)](https://buildingbetterhealthcare.com/medway-community-healthcare-bolsters-interoperability-plans-162681)
- [Kent Community Health — Rio EPR go-live (implementation details)](https://buildingbetterhealthcare.com/kent-community-health-nhs-foundation-trust-drives-interoperability-with-rio-electronic-patient-record-170536)
- NHS trust training materials published for staff onboarding (search "Rio EPR training NHS")

## Status

🟡 **Stub** — folder structure only. No implementation yet.

## Stack

Same as all Union frontends: Next.js, React, Tailwind CSS, shadcn/ui. See `frontend-emis` for the base template.
