"use client";

import { useState } from "react";
import { PRESETS, PRESET_NAMES } from "@/lib/layout-config";
import type { LayoutConfig } from "@/lib/layout-config";
import { ClinicalLayout } from "@/components/layout/clinical-layout";
import { DemoContent } from "./demo-content";
import {
  demoPatient,
  demoTabs,
  demoTree,
  demoRibbonGroups,
  demoToolbarActions,
} from "./demo-data";
import { ConfigPanel } from "./config-panel";

export function PresetDemo() {
  const [presetName, setPresetName] = useState<string>("gp-classic");
  const [overrides, setOverrides] = useState<Partial<LayoutConfig>>({});

  const baseConfig = PRESETS[presetName];
  const config: LayoutConfig = { ...baseConfig, ...overrides };

  function selectPreset(name: string) {
    setPresetName(name);
    setOverrides({});
  }

  return (
    <div className="flex flex-col gap-4 p-4 lg:flex-row">
      {/* Left: controls */}
      <div className="w-full space-y-4 lg:w-80">
        {/* Preset selector */}
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-nhs-dark-blue">Layout Preset</h2>
          <div className="grid grid-cols-1 gap-1.5">
            {PRESET_NAMES.map((name) => {
              const p = PRESETS[name];
              return (
                <button
                  key={name}
                  onClick={() => selectPreset(name)}
                  className={`rounded-md px-3 py-2 text-left text-xs transition-colors ${
                    presetName === name
                      ? "bg-nhs-blue text-white"
                      : "bg-nhs-pale-grey text-nhs-grey-3 hover:bg-nhs-grey-1"
                  }`}
                >
                  <span className="font-medium">{p.label}</span>
                  <br />
                  <span className={presetName === name ? "text-white/80" : "text-nhs-grey-2"}>
                    {p.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Config overrides */}
        <ConfigPanel config={config} onOverride={setOverrides} />
      </div>

      {/* Right: live preview */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="h-[650px]">
            <ClinicalLayout
              config={config}
              patient={demoPatient}
              tabs={demoTabs}
              ribbonGroups={demoRibbonGroups}
              toolbarActions={demoToolbarActions}
              treeItems={demoTree}
            >
              <DemoContent config={config} />
            </ClinicalLayout>
          </div>
        </div>
        {/* Active flags */}
        <div className="mt-3 rounded-lg border bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-xs font-semibold text-nhs-grey-2">Active Config</h3>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(config)
              .filter(([k]) => !["name", "label", "description"].includes(k))
              .map(([k, v]) => (
                <span key={k} className="rounded bg-nhs-pale-grey px-2 py-0.5 font-mono text-[10px] text-nhs-grey-3">
                  {k}: <strong>{String(v)}</strong>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
