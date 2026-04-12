"use client";

/**
 * Clinical tabs — top-level navigation across patient record sections.
 *
 * Replicates the EMIS pattern: horizontal tabs across the full width,
 * each representing a major section of the clinical record.
 */

import { useState } from "react";
import type { ReactNode } from "react";

export interface ClinicalTab {
  id: string;
  label: string;
  content?: ReactNode;
}

export interface ClinicalTabsProps {
  tabs: ClinicalTab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function ClinicalTabs({
  tabs,
  defaultTab,
  onTabChange,
}: ClinicalTabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  function handleClick(id: string) {
    setActive(id);
    onTabChange?.(id);
  }

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div className="flex flex-col">
      <div className="flex border-b bg-slate-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`
              relative px-4 py-2 text-sm font-medium transition-colors
              ${
                active === tab.id
                  ? "border-b-2 border-sky-600 bg-white text-sky-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab?.content && (
        <div className="flex-1">{activeTab.content}</div>
      )}
    </div>
  );
}
