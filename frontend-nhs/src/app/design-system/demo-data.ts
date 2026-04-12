import type { PatientData } from "@/components/layout/patient-banner";
import type { NavTab } from "@/components/layout/tab-navigation";
import type { TreeItem } from "@/components/layout/clinical-tree";
import type { RibbonGroup } from "@/components/layout/ribbon-toolbar";
import type { ToolbarAction } from "@/components/layout/simple-toolbar";

export const demoPatient: PatientData = {
  givenName: "Sarah",
  familyName: "Thompson",
  title: "Mrs",
  dob: "14-Mar-1985",
  age: 41,
  gender: "Female",
  nhsNumber: "943 476 5919",
  usualGp: "Dr R. Williams",
  allergies: ["Penicillin", "Ibuprofen"],
  ward: "Cardiology",
  bed: "Bay 3, Bed 2",
  consultant: "Dr A. Patel",
};

export const demoTabs: NavTab[] = [
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

export const demoTree: TreeItem[] = [
  {
    id: "add",
    label: "Add",
    children: [
      { id: "consultation", label: "Consultation" },
      { id: "quick-note", label: "Quick Note" },
      { id: "code", label: "Code" },
      { id: "allergy", label: "Allergy" },
      { id: "referral", label: "Referral" },
      { id: "document", label: "Document" },
      { id: "template", label: "Data using Template" },
      { id: "diary-entry", label: "Diary Entry" },
      { id: "test-request", label: "Test Request" },
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
    label: "Mar (4)",
    children: [
      { id: "c-28mar", label: "28th: Dr Williams" },
      { id: "c-21mar", label: "21st: Dr Chen" },
      { id: "c-15mar", label: "15th: Dr Williams" },
      { id: "c-01mar", label: "1st: Dr Patel" },
    ],
  },
];

export const demoRibbonGroups: RibbonGroup[] = [
  {
    label: "Record",
    actions: [
      { id: "add", label: "Add", icon: "➕" },
      { id: "edit", label: "Edit", icon: "✏️" },
      { id: "share", label: "Share", icon: "🔗" },
      { id: "delete", label: "Delete", icon: "🗑️", disabled: true },
    ],
  },
  {
    label: "View",
    actions: [
      { id: "trend", label: "Trend", icon: "📈" },
      { id: "mine", label: "My Records", icon: "👤" },
    ],
  },
  {
    label: "Filter",
    actions: [
      { id: "filter", label: "Filters", icon: "⚙️" },
      { id: "search", label: "Search", icon: "🔍" },
    ],
  },
  {
    label: "Output",
    actions: [
      { id: "print", label: "Print", icon: "🖨️" },
      { id: "export", label: "Export", icon: "📄" },
    ],
  },
];

export const demoToolbarActions: ToolbarAction[] = [
  { id: "add", label: "Add", variant: "default" },
  { id: "edit", label: "Edit", variant: "outline" },
  { id: "share", label: "Share", variant: "outline" },
  { id: "search", label: "Search", variant: "ghost" },
  { id: "print", label: "Print", variant: "ghost" },
];
