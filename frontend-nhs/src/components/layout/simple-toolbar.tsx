"use client";

/**
 * Simple toolbar — flat action bar without ribbon grouping.
 * Used when LayoutConfig.actionPlacement === "toolbar".
 */

import { Button } from "@/components/ui/button";

export interface ToolbarAction {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "outline" | "ghost" | "destructive";
}

interface Props {
  actions: ToolbarAction[];
}

export function SimpleToolbar({ actions }: Props) {
  return (
    <div className="flex items-center gap-1 border-b bg-nhs-pale-grey px-3 py-1.5">
      {actions.map((action) => (
        <Button
          key={action.id}
          size="sm"
          variant={action.variant || "ghost"}
          onClick={action.onClick}
          disabled={action.disabled}
          className="h-7 text-xs"
        >
          {action.icon && <span className="mr-1.5">{action.icon}</span>}
          {action.label}
        </Button>
      ))}
    </div>
  );
}
