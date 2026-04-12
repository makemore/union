/**
 * Patient banner — configurable patient identifying strip.
 *
 * Three variants controlled by LayoutConfig.patientBanner:
 *   compact  — single-line with key identifiers (GP-style)
 *   full     — two-line with extended info (acute-style)
 *   minimal  — name + single ID only (mobile-style)
 */

import { Badge } from "@/components/ui/badge";

export interface PatientData {
  givenName: string;
  familyName: string;
  title?: string;
  dob: string;
  age: number;
  gender: string;
  nhsNumber: string;
  usualGp?: string;
  allergies?: string[];
  ward?: string;
  bed?: string;
  consultant?: string;
}

interface Props {
  patient: PatientData;
  variant: "compact" | "full" | "minimal";
}

export function PatientBanner({ patient, variant }: Props) {
  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-between border-b bg-nhs-pale-grey px-4 py-2">
        <span className="text-sm font-bold text-nhs-dark-blue">
          {patient.familyName.toUpperCase()}, {patient.givenName}
        </span>
        <span className="font-mono text-xs text-nhs-grey-2">{patient.nhsNumber}</span>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className="border-b bg-nhs-pale-grey px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-base font-bold text-nhs-dark-blue">
              {patient.familyName.toUpperCase()}, {patient.givenName}
              {patient.title && <span className="ml-1 font-normal text-nhs-grey-3">({patient.title})</span>}
            </span>
            <div className="flex gap-3 text-sm text-nhs-grey-3">
              <span>{patient.dob}</span>
              <span className="font-medium">{patient.age} yrs</span>
              <span>{patient.gender}</span>
            </div>
          </div>
          <span className="font-mono text-xs text-nhs-grey-2">{patient.nhsNumber}</span>
        </div>
        <div className="mt-1 flex items-center gap-4 text-xs text-nhs-grey-2">
          {patient.usualGp && <span>GP: <strong className="text-nhs-grey-3">{patient.usualGp}</strong></span>}
          {patient.ward && <span>Ward: <strong className="text-nhs-grey-3">{patient.ward}</strong></span>}
          {patient.bed && <span>Bed: <strong className="text-nhs-grey-3">{patient.bed}</strong></span>}
          {patient.consultant && <span>Consultant: <strong className="text-nhs-grey-3">{patient.consultant}</strong></span>}
          {patient.allergies && patient.allergies.length > 0 && (
            <div className="flex gap-1">
              {patient.allergies.map((a) => (
                <Badge key={a} variant="destructive" className="text-[10px]">⚠ {a}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // compact (default)
  return (
    <div className="flex items-center justify-between border-b bg-nhs-pale-grey px-4 py-2">
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold text-nhs-dark-blue">
          {patient.familyName.toUpperCase()}, {patient.givenName}
          {patient.title && <span className="ml-1 font-normal text-nhs-grey-3">({patient.title})</span>}
        </span>
        <div className="flex gap-3 text-xs text-nhs-grey-3">
          <span>{patient.dob}</span>
          <span>{patient.age} yrs</span>
          <span>{patient.gender}</span>
          <span className="font-mono">{patient.nhsNumber}</span>
        </div>
        {patient.allergies && patient.allergies.length > 0 && (
          <div className="flex gap-1">
            {patient.allergies.map((a) => (
              <Badge key={a} variant="destructive" className="text-[10px]">⚠ {a}</Badge>
            ))}
          </div>
        )}
      </div>
      {patient.usualGp && (
        <span className="text-xs text-nhs-grey-2">GP: <strong>{patient.usualGp}</strong></span>
      )}
    </div>
  );
}
