"use client";

/**
 * Clinical tree — left-hand navigation tree for the patient record.
 *
 * Replicates the EMIS pattern: a collapsible tree of clinical record
 * sections grouped by date, with selectable items and visual nesting.
 */

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface TreeItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeItem[];
}

export interface ClinicalTreeProps {
  items: TreeItem[];
  onSelect?: (id: string) => void;
  selectedId?: string;
}

export function ClinicalTree({ items, onSelect, selectedId }: ClinicalTreeProps) {
  return (
    <div className="w-56 flex-shrink-0 overflow-y-auto border-r bg-white text-sm">
      <div className="p-1">
        {items.map((item) => (
          <TreeNode
            key={item.id}
            item={item}
            depth={0}
            onSelect={onSelect}
            selectedId={selectedId}
          />
        ))}
      </div>
    </div>
  );
}

function TreeNode({
  item,
  depth,
  onSelect,
  selectedId,
}: {
  item: TreeItem;
  depth: number;
  onSelect?: (id: string) => void;
  selectedId?: string;
}) {
  const [expanded, setExpanded] = useState(depth < 1);
  const hasChildren = item.children && item.children.length > 0;
  const isSelected = selectedId === item.id;

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setExpanded(!expanded);
          onSelect?.(item.id);
        }}
        className={`
          flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-xs
          ${isSelected ? "bg-sky-100 text-sky-800" : "text-slate-700 hover:bg-slate-50"}
        `}
        style={{ paddingLeft: `${depth * 14 + 4}px` }}
      >
        {hasChildren ? (
          expanded ? (
            <ChevronDown className="h-3 w-3 flex-shrink-0 text-slate-400" />
          ) : (
            <ChevronRight className="h-3 w-3 flex-shrink-0 text-slate-400" />
          )
        ) : (
          <span className="w-3 flex-shrink-0" />
        )}
        {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
        <span className="truncate">{item.label}</span>
      </button>
      {hasChildren && expanded && (
        <div>
          {item.children!.map((child) => (
            <TreeNode
              key={child.id}
              item={child}
              depth={depth + 1}
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
