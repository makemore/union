/**
 * Consultation table — the main content area for consultation history.
 *
 * Replicates the EMIS pattern: date-grouped consultation entries with
 * structured rows showing Comment, Result, History entries beneath
 * each consultation header.
 */

export interface ConsultationEntry {
  type: "Comment" | "Result" | "History" | "Additional" | "Examination";
  text: string;
  highlight?: boolean;
}

export interface Consultation {
  date: string;
  time?: string;
  location: string;
  entries: ConsultationEntry[];
}

export interface ConsultationTableProps {
  consultations: Consultation[];
}

export function ConsultationTable({ consultations }: ConsultationTableProps) {
  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-slate-50 text-left">
            <th className="w-36 px-3 py-1.5 text-xs font-semibold text-slate-500">
              Date
            </th>
            <th className="px-3 py-1.5 text-xs font-semibold text-slate-500">
              Consultation Text
            </th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((consultation, ci) => (
            <>
              {/* Consultation header row */}
              <tr
                key={`header-${ci}`}
                className="border-t bg-sky-50/60"
              >
                <td className="px-3 py-1.5 text-xs font-semibold text-sky-800">
                  {consultation.date}
                  {consultation.time && (
                    <span className="ml-1 text-sky-600">
                      {consultation.time}
                    </span>
                  )}
                </td>
                <td className="px-3 py-1.5 text-xs font-medium text-sky-700">
                  {consultation.location}
                </td>
              </tr>
              {/* Entry rows */}
              {consultation.entries.map((entry, ei) => (
                <tr
                  key={`entry-${ci}-${ei}`}
                  className="border-b border-slate-100 hover:bg-slate-50/50"
                >
                  <td className="px-3 py-1 text-right text-xs text-slate-400">
                    {entry.type}
                  </td>
                  <td
                    className={`px-3 py-1 text-xs ${
                      entry.highlight
                        ? "font-semibold text-amber-700"
                        : "text-slate-700"
                    }`}
                  >
                    {entry.text}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
