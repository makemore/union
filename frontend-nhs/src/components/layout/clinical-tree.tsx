"use client";

/**
 * Clinical tree — collapsible left-hand navigation.
 * Rendered when LayoutConfig.showClinicalTree === true.
 */

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface TreeItem {
  id: string;
  label: string;
  children?: TreeItem[];
}

interface Props {
  items: TreeItem[];
  onSelect?: (id: string) => void;
  selectedId?: string;
  collapsible?: boolean;
}

export function ClinicalTree({ items, onSelect, selectedId, collapsible }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsible && collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="flex w-8 flex-shrink-0 items-start justify-center border-r bg-nhs-pale-grey pt-2 text-nhs-grey-2 hover:text-nhs-blue"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="flex w-52 flex-shrink-0 flex-col border-r bg-white">
      {collapsible && (
        <button
          onClick={() => setCollapsed(true)}
          className="flex items-center justify-end border-b px-2 py-1 text-nhs-grey-2 hover:text-nhs-blue"
        >
          <ChevronDown className="h-3 w-3 rotate-90" />
        </button>
      )}
      <div className="flex-1 overflow-y-auto p-1">
        {items.map((item) => (
          <TreeNode key={item.id} item={item} depth={0} onSelect={onSelect} selectedId={selectedId} />
        ))}
      </div>
    </div>
  );
}

function TreeNode({
  item, depth, onSelect, selectedId,
}: {
  item: TreeItem; depth: number; onSelect?: (id: string) => void; selectedId?: string;
}) {
  const [expanded, setExpanded] = useState(depth < 1);
  const hasChildren = item.children && item.children.length > 0;
  const isSelected = selectedId === item.id;

  return (
    <div>
      <button
        onClick={() => { if (hasChildren) setExpanded(!expanded); onSelect?.(item.id); }}
        className={`flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-xs ${
          isSelected ? "bg-nhs-blue/10 font-medium text-nhs-blue" : "text-nhs-grey-3 hover:bg-nhs-pale-grey"
        }`}
        style={{ paddingLeft: `${depth * 12 + 4}px` }}
      >
        {hasChildren ? (
          expanded ? <ChevronDown className="h-3 w-3 flex-shrink-0 text-nhs-grey-2" /> : <ChevronRight className="h-3 w-3 flex-shrink-0 text-nhs-grey-2" />
        ) : (
          <span className="w-3 flex-shrink-0" />
        )}
        <span className="truncate">{item.label}</span>
      </button>
      {hasChildren && expanded && item.children!.map((child) => (
        <TreeNode key={child.id} item={child} depth={depth + 1} onSelect={onSelect} selectedId={selectedId} />
      ))}
    </div>
  );
}
