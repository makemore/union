/**
 * Storyboard — quick-glance patient summary strip.
 * Rendered when LayoutConfig.showStoryboard === true (Epic-style).
 */

import { Badge } from "@/components/ui/badge";
import type { PatientData } from "./patient-banner";

interface Props {
  patient: PatientData;
}

export function Storyboard({ patient }: Props) {
  return (
    <div className="flex gap-4 border-b bg-white px-4 py-2">
      <SummaryCard title="Allergies">
        {patient.allergies && patient.allergies.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {patient.allergies.map((a) => (
              <Badge key={a} variant="destructive" className="text-[10px]">{a}</Badge>
            ))}
          </div>
        ) : (
          <span className="text-xs text-nhs-grey-2">No known allergies</span>
        )}
      </SummaryCard>
      <SummaryCard title="Problems">
        <div className="flex flex-wrap gap-1">
          <Badge variant="outline" className="text-[10px]">Hypertension</Badge>
          <Badge variant="outline" className="text-[10px]">Type 2 Diabetes</Badge>
        </div>
      </SummaryCard>
      <SummaryCard title="Medication">
        <span className="text-xs text-nhs-grey-3">Amlodipine 5mg, Metformin 500mg</span>
      </SummaryCard>
      <SummaryCard title="Last Visit">
        <span className="text-xs text-nhs-grey-3">12 Apr 2026 — Dr Williams</span>
      </SummaryCard>
    </div>
  );
}

function SummaryCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="text-[10px] font-medium uppercase tracking-wider text-nhs-grey-2">{title}</div>
      <div className="mt-0.5">{children}</div>
    </div>
  );
}
