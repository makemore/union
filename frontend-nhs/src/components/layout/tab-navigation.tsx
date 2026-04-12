"use client";

/**
 * Tab navigation — horizontal or vertical tab strip.
 *
 * Position controlled by LayoutConfig.tabPosition:
 *   top  — horizontal tabs across the top (EMIS/Epic/Cerner style)
 *   left — vertical tabs on the left (Rio/community style)
 */

import { useState } from "react";

export interface NavTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface Props {
  tabs: NavTab[];
  position: "top" | "left";
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export function TabNavigation({ tabs, position, defaultTab, onTabChange }: Props) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  function select(id: string) {
    setActive(id);
    onTabChange?.(id);
  }

  if (position === "left") {
    return (
      <div className="flex w-44 flex-col border-r bg-nhs-pale-grey">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => select(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
              active === tab.id
                ? "border-l-3 border-nhs-blue bg-white font-medium text-nhs-blue"
                : "text-nhs-grey-3 hover:bg-white/60"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  // top (default)
  return (
    <div className="flex border-b bg-nhs-pale-grey">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => select(tab.id)}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm transition-colors ${
            active === tab.id
              ? "border-b-2 border-nhs-blue bg-white font-medium text-nhs-blue"
              : "text-nhs-grey-3 hover:bg-white/60"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
