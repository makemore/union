"use client";

import { PatientBanner } from "@/components/emis/patient-banner";
import { ClinicalTabs } from "@/components/emis/clinical-tabs";
import { RibbonToolbar } from "@/components/emis/ribbon-toolbar";
import { ClinicalTree } from "@/components/emis/clinical-tree";
import { ConsultationTable } from "@/components/emis/consultation-table";
import {
  FilePlus,
  FileEdit,
  Share2,
  Trash2,
  TrendingUp,
  User,
  SlidersHorizontal,
  Search,
  Printer,
  Settings,
  Eye,
  FileText,
} from "lucide-react";

const ribbonGroups = [
  {
    label: "Record",
    actions: [
      { id: "add", label: "Add", icon: <FilePlus className="h-4 w-4" /> },
      { id: "edit", label: "Edit", icon: <FileEdit className="h-4 w-4" /> },
      { id: "share", label: "Sharing", icon: <Share2 className="h-4 w-4" /> },
      { id: "delete", label: "Delete", icon: <Trash2 className="h-4 w-4" />, disabled: true },
    ],
  },
  {
    label: "View",
    actions: [
      { id: "trend", label: "Trend", icon: <TrendingUp className="h-4 w-4" /> },
      { id: "mine", label: "My Records", icon: <User className="h-4 w-4" /> },
      { id: "view-deleted", label: "Deleted", icon: <Eye className="h-4 w-4" /> },
    ],
  },
  {
    label: "Filter",
    actions: [
      { id: "filters", label: "Filters", icon: <SlidersHorizontal className="h-4 w-4" /> },
      { id: "search", label: "Search", icon: <Search className="h-4 w-4" /> },
    ],
  },
  {
    label: "Output",
    actions: [
      { id: "print", label: "Print", icon: <Printer className="h-4 w-4" /> },
      { id: "export", label: "Export", icon: <FileText className="h-4 w-4" /> },
      { id: "config", label: "Config", icon: <Settings className="h-4 w-4" /> },
    ],
  },
];

const treeItems = [
  {
    id: "add-menu",
    label: "Add",
    children: [
      { id: "consultation", label: "Consultation" },
      { id: "quick-note", label: "Quick Note" },
      { id: "code", label: "Code" },
      { id: "allergy", label: "Allergy" },
      { id: "referral", label: "Referral" },
      { id: "document", label: "Document" },
      { id: "template", label: "Data using Template" },
      { id: "diary", label: "Diary Entry" },
      { id: "test-request", label: "Test Request" },
      { id: "care-plan", label: "Care Plan" },
    ],
  },
  {
    id: "apr-2026",
    label: "Apr (3)",
    children: [
      { id: "c-12apr", label: "12th: Dr Williams" },
      { id: "c-08apr", label: "8th: Dr Patel" },
      { id: "c-02apr", label: "2nd: Nurse Jenkins" },
    ],
  },
  {
    id: "mar-2026",
    label: "Mar (5)",
    children: [
      { id: "c-28mar", label: "28th: Dr Williams" },
      { id: "c-21mar", label: "21st: Dr Chen" },
      { id: "c-15mar", label: "15th: Dr Williams" },
      { id: "c-08mar", label: "8th: Nurse Jenkins" },
      { id: "c-01mar", label: "1st: Dr Patel" },
    ],
  },
  {
    id: "feb-2026",
    label: "Feb (2)",
    children: [
      { id: "c-18feb", label: "18th: Dr Williams" },
      { id: "c-04feb", label: "4th: Dr Patel" },
    ],
  },
];

const consultations = [
  {
    date: "12-Apr-2026",
    time: "09:45",
    location: "GP Surgery (Union Medical Centre)",
    entries: [
      { type: "Comment" as const, text: "Routine follow-up for hypertension and diabetes review" },
      { type: "Result" as const, text: "HbA1c level 52 mmol/mol — within target range", highlight: true },
      { type: "Result" as const, text: "BP 138/82 mmHg — slightly above target" },
      { type: "Comment" as const, text: "Continue current medication. Review in 3 months." },
    ],
  },
  {
    date: "08-Apr-2026",
    time: "14:20",
    location: "GP Surgery (Union Medical Centre)",
    entries: [
      { type: "Comment" as const, text: "Blood test — routine bloods for diabetic review" },
      { type: "Additional" as const, text: "FBC, U&E, HbA1c, Lipid profile requested" },
    ],
  },
  {
    date: "02-Apr-2026",
    time: "10:15",
    location: "GP Surgery (Union Medical Centre)",
    entries: [
      { type: "Comment" as const, text: "Nurse review — annual diabetic foot check" },
      { type: "Examination" as const, text: "Peripheral pulses present bilaterally. Sensation intact." },
      { type: "Comment" as const, text: "No concerns. Next review due Apr 2027." },
    ],
  },
  {
    date: "28-Mar-2026",
    time: "11:30",
    location: "GP Surgery (Union Medical Centre)",
    entries: [
      { type: "Comment" as const, text: "Telephone consultation re: repeat prescription query" },
      { type: "Comment" as const, text: "Amlodipine 5mg — confirmed continuation. Issued repeat." },
    ],
  },
];

const clinicalTabs = [
  { id: "summary", label: "Summary" },
  { id: "consultations", label: "Consultations" },
  { id: "medication", label: "Medication" },
  { id: "problems", label: "Problems" },
  { id: "investigations", label: "Investigations" },
  { id: "care-history", label: "Care History" },
  { id: "diary", label: "Diary" },
  { id: "documents", label: "Documents" },
  { id: "referrals", label: "Referrals" },
];

export function EmisLayoutDemo() {
  return (
    <div className="flex h-[600px] flex-col">
      {/* Patient banner */}
      <PatientBanner
        givenName="Andrew"
        familyName="Burns"
        title="Mr"
        dob="23-Dec-1925"
        age={100}
        gender="Male"
        nhsNumber="943 476 5919"
        usualGp="Dr R. Williams"
        allergies={["Penicillin"]}
      />

      {/* Clinical tabs */}
      <ClinicalTabs tabs={clinicalTabs} defaultTab="consultations" />

      {/* Ribbon toolbar */}
      <RibbonToolbar groups={ribbonGroups} />

      {/* Main content: tree + consultation table */}
      <div className="flex flex-1 overflow-hidden">
        <ClinicalTree items={treeItems} selectedId="c-12apr" />
        <ConsultationTable consultations={consultations} />
      </div>
    </div>
  );
}
