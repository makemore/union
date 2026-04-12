/**
 * Patient banner — the identifying strip at the top of the patient record.
 *
 * Replicates the EMIS spatial pattern: patient name (bold, left),
 * demographics (DOB, age, gender), identifiers (NHS number), and
 * registered GP — all in a compact horizontal bar.
 */

import { Badge } from "@/components/ui/badge";

export interface PatientBannerProps {
  givenName: string;
  familyName: string;
  title?: string;
  dob: string;
  age: number;
  gender: string;
  nhsNumber: string;
  usualGp?: string;
  allergies?: string[];
}

export function PatientBanner({
  givenName,
  familyName,
  title = "",
  dob,
  age,
  gender,
  nhsNumber,
  usualGp,
  allergies = [],
}: PatientBannerProps) {
  return (
    <div className="flex items-center justify-between border-b bg-sky-50 px-4 py-2">
      <div className="flex items-center gap-6">
        <div>
          <span className="text-base font-bold text-sky-900">
            {familyName.toUpperCase()}, {givenName}
          </span>
          {title && (
            <span className="ml-1 text-sm text-sky-700">({title})</span>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-sky-800">
          <span>{dob}</span>
          <span className="font-medium">{age} yrs</span>
          <span>{gender}</span>
          <span className="font-mono text-xs">{nhsNumber}</span>
        </div>
        {allergies.length > 0 && (
          <div className="flex gap-1">
            {allergies.map((a) => (
              <Badge
                key={a}
                variant="destructive"
                className="text-xs"
              >
                ⚠ {a}
              </Badge>
            ))}
          </div>
        )}
      </div>
      {usualGp && (
        <div className="text-sm text-sky-700">
          <span className="text-xs text-sky-500">Usual GP</span>{" "}
          <span className="font-semibold">{usualGp}</span>
        </div>
      )}
    </div>
  );
}
