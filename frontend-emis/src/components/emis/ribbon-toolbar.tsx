"use client";

/**
 * Ribbon toolbar — grouped action bar below the clinical tabs.
 *
 * Replicates the EMIS pattern: actions grouped into labelled sections
 * (e.g. "View", "Filter", "Print") with icon+label buttons inside
 * each group, separated by vertical dividers.
 */

import type { ReactNode } from "react";

export interface RibbonAction {
  id: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface RibbonGroup {
  label: string;
  actions: RibbonAction[];
}

export interface RibbonToolbarProps {
  groups: RibbonGroup[];
}

export function RibbonToolbar({ groups }: RibbonToolbarProps) {
  return (
    <div className="flex items-end gap-0 border-b bg-slate-50 px-2 py-1">
      {groups.map((group, gi) => (
        <div key={group.label} className="flex items-end">
          <div className="flex flex-col items-center px-2">
            <div className="flex items-center gap-1">
              {group.actions.map((action) => (
                <button
                  key={action.id}
                  onClick={action.onClick}
                  disabled={action.disabled}
                  title={action.label}
                  className="flex flex-col items-center rounded px-2 py-1 text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <span className="text-lg">{action.icon}</span>
                  <span className="text-[10px] leading-tight">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wider text-slate-400">
              {group.label}
            </span>
          </div>
          {gi < groups.length - 1 && (
            <div className="mx-1 h-12 w-px bg-slate-200" />
          )}
        </div>
      ))}
    </div>
  );
}
