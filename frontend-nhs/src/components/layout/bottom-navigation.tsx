"use client";

/**
 * Bottom tab navigation — mobile-first pattern for ward/bedside use.
 * Used when LayoutConfig.navigation === "bottom-tabs" (Nervecentre-style).
 */

import { useState } from "react";
import type { NavTab } from "./tab-navigation";

interface Props {
  tabs: NavTab[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export function BottomNavigation({ tabs, defaultTab, onTabChange }: Props) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  function select(id: string) {
    setActive(id);
    onTabChange?.(id);
  }

  return (
    <div className="flex border-t bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => select(tab.id)}
          className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors ${
            active === tab.id
              ? "text-nhs-blue"
              : "text-nhs-grey-2 hover:text-nhs-grey-3"
          }`}
        >
          <span className="text-lg">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
