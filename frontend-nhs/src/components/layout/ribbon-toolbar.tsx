"use client";

/**
 * Ribbon toolbar — grouped action bar.
 * Only rendered when LayoutConfig.showRibbon === true.
 */

export interface RibbonAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface RibbonGroup {
  label: string;
  actions: RibbonAction[];
}

interface Props {
  groups: RibbonGroup[];
}

export function RibbonToolbar({ groups }: Props) {
  return (
    <div className="flex items-end gap-0 border-b bg-nhs-pale-grey px-2 py-1">
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
                  className="flex flex-col items-center rounded px-2 py-1 text-nhs-grey-3 transition-colors hover:bg-white hover:text-nhs-blue disabled:opacity-40"
                >
                  <span className="text-lg">{action.icon}</span>
                  <span className="text-[10px] leading-tight">{action.label}</span>
                </button>
              ))}
            </div>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wider text-nhs-grey-2">
              {group.label}
            </span>
          </div>
          {gi < groups.length - 1 && <div className="mx-1 h-12 w-px bg-nhs-grey-1" />}
        </div>
      ))}
    </div>
  );
}
