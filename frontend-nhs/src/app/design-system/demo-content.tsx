/**
 * Demo content panels — different record view styles.
 * Shows how the same clinical data renders differently
 * depending on LayoutConfig.recordView.
 */

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LayoutConfig } from "@/lib/layout-config";

interface Props {
  config: LayoutConfig;
}

const entries = [
  { date: "12 Apr 2026", time: "09:45", clinician: "Dr Williams", type: "Review", text: "Routine follow-up for hypertension and diabetes review. HbA1c 52 mmol/mol — within target. BP 138/82 — slightly above target. Continue current medication.", tags: ["Hypertension", "Diabetes"] },
  { date: "08 Apr 2026", time: "14:20", clinician: "Dr Patel", type: "Investigation", text: "Blood test — routine bloods for diabetic review. FBC, U&E, HbA1c, Lipid profile requested.", tags: ["Diabetes"] },
  { date: "02 Apr 2026", time: "10:15", clinician: "Nurse Jenkins", type: "Examination", text: "Annual diabetic foot check. Peripheral pulses present bilaterally. Sensation intact. No concerns.", tags: ["Diabetes"] },
  { date: "28 Mar 2026", time: "11:30", clinician: "Dr Williams", type: "Telephone", text: "Telephone consultation re: repeat prescription query. Amlodipine 5mg — confirmed continuation.", tags: ["Hypertension"] },
];

export function DemoContent({ config }: Props) {
  if (config.recordView === "cards") return <CardsView />;
  if (config.recordView === "notes") return <NotesView />;
  if (config.recordView === "timeline") return <TimelineView />;
  return <TableView />;
}

function TableView() {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b bg-nhs-pale-grey text-left">
          <th className="w-28 px-3 py-1.5 text-xs font-semibold text-nhs-grey-2">Date</th>
          <th className="w-20 px-3 py-1.5 text-xs font-semibold text-nhs-grey-2">Type</th>
          <th className="px-3 py-1.5 text-xs font-semibold text-nhs-grey-2">Details</th>
          <th className="w-28 px-3 py-1.5 text-xs font-semibold text-nhs-grey-2">Clinician</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((e, i) => (
          <tr key={i} className="border-b border-nhs-grey-1/50 hover:bg-nhs-pale-grey/50">
            <td className="px-3 py-1.5 text-xs text-nhs-grey-3">{e.date}<br /><span className="text-nhs-grey-2">{e.time}</span></td>
            <td className="px-3 py-1.5"><Badge variant="outline" className="text-[10px]">{e.type}</Badge></td>
            <td className="px-3 py-1.5 text-xs text-nhs-grey-4">{e.text}</td>
            <td className="px-3 py-1.5 text-xs text-nhs-grey-3">{e.clinician}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CardsView() {
  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2">
      {entries.map((e, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">{e.type}</CardTitle>
              <span className="text-xs text-nhs-grey-2">{e.date}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-nhs-grey-3">{e.text}</p>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-1">{e.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}</div>
              <span className="text-[10px] text-nhs-grey-2">{e.clinician}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function NotesView() {
  return (
    <div className="space-y-4 p-4">
      {entries.map((e, i) => (
        <div key={i} className="border-l-2 border-nhs-blue pl-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-nhs-dark-blue">{e.clinician}</span>
            <span className="text-xs text-nhs-grey-2">{e.date} {e.time}</span>
            <Badge variant="outline" className="text-[10px]">{e.type}</Badge>
          </div>
          <p className="mt-1 text-sm text-nhs-grey-4">{e.text}</p>
          <div className="mt-1 flex gap-1">{e.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}</div>
        </div>
      ))}
    </div>
  );
}

function TimelineView() {
  return (
    <div className="p-4">
      <div className="relative border-l-2 border-nhs-grey-1 pl-6">
        {entries.map((e, i) => (
          <div key={i} className="relative mb-6">
            <div className="absolute -left-[31px] h-4 w-4 rounded-full border-2 border-nhs-blue bg-white" />
            <div className="text-xs text-nhs-grey-2">{e.date} · {e.time}</div>
            <div className="mt-0.5 text-sm font-medium text-nhs-grey-4">{e.type} — {e.clinician}</div>
            <p className="mt-0.5 text-sm text-nhs-grey-3">{e.text}</p>
            <div className="mt-1 flex gap-1">{e.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
