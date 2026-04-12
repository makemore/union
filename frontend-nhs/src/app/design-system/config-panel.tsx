"use client";

/**
 * Config panel — individual layout flag overrides.
 * Lets you toggle/change any flag on top of the selected preset.
 */

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LayoutConfig } from "@/lib/layout-config";

interface Props {
  config: LayoutConfig;
  onOverride: (overrides: Partial<LayoutConfig>) => void;
}

type SelectKey = "navigation" | "tabPosition" | "actionPlacement" | "treePosition"
  | "patientBanner" | "recordView" | "patientList" | "resultsView"
  | "documentationStyle" | "density";

const selectFields: { key: SelectKey; label: string; options: string[] }[] = [
  { key: "navigation", label: "Navigation", options: ["tabs", "sidebar", "tree", "bottom-tabs"] },
  { key: "tabPosition", label: "Tab Position", options: ["top", "left"] },
  { key: "actionPlacement", label: "Actions", options: ["ribbon", "toolbar", "inline", "fab"] },
  { key: "patientBanner", label: "Patient Banner", options: ["compact", "full", "minimal"] },
  { key: "recordView", label: "Record View", options: ["table", "timeline", "cards", "notes"] },
  { key: "patientList", label: "Patient List", options: ["table", "board", "cards"] },
  { key: "resultsView", label: "Results View", options: ["table", "flowsheet", "timeline"] },
  { key: "documentationStyle", label: "Documentation", options: ["structured", "freetext", "hybrid"] },
  { key: "density", label: "Density", options: ["compact", "comfortable", "spacious"] },
];

type BoolKey = "showRibbon" | "showClinicalTree" | "showStoryboard"
  | "showStatusBoard" | "mobileFirst" | "sidebarCollapsible";

const boolFields: { key: BoolKey; label: string }[] = [
  { key: "showRibbon", label: "Show Ribbon" },
  { key: "showClinicalTree", label: "Clinical Tree" },
  { key: "showStoryboard", label: "Storyboard" },
  { key: "showStatusBoard", label: "Status Board" },
  { key: "mobileFirst", label: "Mobile First" },
  { key: "sidebarCollapsible", label: "Collapsible Sidebar" },
];

export function ConfigPanel({ config, onOverride }: Props) {
  function setField(key: string, value: string | boolean) {
    onOverride({ [key]: value });
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-nhs-dark-blue">Override Flags</h2>

      <div className="space-y-3">
        {selectFields.map((field) => (
          <div key={field.key} className="space-y-1">
            <Label className="text-[11px] text-nhs-grey-2">{field.label}</Label>
            <Select
              value={config[field.key]}
              onValueChange={(v) => setField(field.key, v)}
            >
              <SelectTrigger className="h-7 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((opt) => (
                  <SelectItem key={opt} value={opt} className="text-xs">{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        <div className="border-t pt-3">
          {boolFields.map((field) => (
            <div key={field.key} className="flex items-center justify-between py-1">
              <Label className="text-[11px] text-nhs-grey-2">{field.label}</Label>
              <Switch
                checked={config[field.key]}
                onCheckedChange={(v) => setField(field.key, v)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
