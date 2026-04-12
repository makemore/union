"use client";

/**
 * ClinicalLayout — the master layout orchestrator.
 *
 * Reads a LayoutConfig and composes the correct combination of
 * navigation, toolbars, panels, and content areas. This single
 * component can produce layouts that approximate any major UK
 * clinical system, all using NHS design tokens and Union branding.
 */

import type { LayoutConfig } from "@/lib/layout-config";
import type { PatientData } from "./patient-banner";
import type { RibbonGroup } from "./ribbon-toolbar";
import type { ToolbarAction } from "./simple-toolbar";
import type { NavTab } from "./tab-navigation";
import type { TreeItem } from "./clinical-tree";

import { PatientBanner } from "./patient-banner";
import { TabNavigation } from "./tab-navigation";
import { BottomNavigation } from "./bottom-navigation";
import { RibbonToolbar } from "./ribbon-toolbar";
import { SimpleToolbar } from "./simple-toolbar";
import { ClinicalTree } from "./clinical-tree";
import { Storyboard } from "./storyboard";
import { FabButton } from "./fab-button";

export interface ClinicalLayoutProps {
  config: LayoutConfig;
  patient: PatientData;
  tabs: NavTab[];
  ribbonGroups?: RibbonGroup[];
  toolbarActions?: ToolbarAction[];
  treeItems?: TreeItem[];
  children: React.ReactNode;
}

const densityClasses = {
  compact: "text-sm",
  comfortable: "text-sm",
  spacious: "text-base",
};

export function ClinicalLayout({
  config,
  patient,
  tabs,
  ribbonGroups = [],
  toolbarActions = [],
  treeItems = [],
  children,
}: ClinicalLayoutProps) {
  const isBottomNav = config.navigation === "bottom-tabs";
  const isLeftTabs = config.navigation === "sidebar" || config.tabPosition === "left";

  return (
    <div className={`flex h-full flex-col bg-white ${densityClasses[config.density]}`}>
      {/* Patient banner — always present, variant changes */}
      <PatientBanner patient={patient} variant={config.patientBanner} />

      {/* Storyboard — Epic-style summary strip */}
      {config.showStoryboard && <Storyboard patient={patient} />}

      {/* Top navigation tabs (when not bottom or left) */}
      {!isBottomNav && !isLeftTabs && (
        <TabNavigation tabs={tabs} position="top" />
      )}

      {/* Ribbon toolbar */}
      {config.showRibbon && config.actionPlacement === "ribbon" && ribbonGroups.length > 0 && (
        <RibbonToolbar groups={ribbonGroups} />
      )}

      {/* Simple toolbar */}
      {config.actionPlacement === "toolbar" && toolbarActions.length > 0 && (
        <SimpleToolbar actions={toolbarActions} />
      )}

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar tabs (Rio/community style) */}
        {isLeftTabs && !isBottomNav && (
          <TabNavigation tabs={tabs} position="left" />
        )}

        {/* Clinical tree (EMIS/SystmOne style) */}
        {config.showClinicalTree && treeItems.length > 0 && (
          <ClinicalTree
            items={treeItems}
            collapsible={config.sidebarCollapsible}
          />
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>

      {/* Bottom navigation (mobile-ward) */}
      {isBottomNav && <BottomNavigation tabs={tabs} />}

      {/* Floating action button (mobile) */}
      {config.actionPlacement === "fab" && <FabButton />}
    </div>
  );
}
