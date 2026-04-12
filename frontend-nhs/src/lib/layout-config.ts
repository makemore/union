/**
 * Layout configuration system.
 *
 * A single set of flags that controls how the clinical interface is
 * assembled. Different combinations approximate the spatial patterns
 * and interaction models of major UK clinical systems — all using the
 * NHS design system and Union's own identity.
 *
 * Each flag controls one independent layout decision. Presets combine
 * flags into coherent profiles that feel familiar to clinicians coming
 * from specific systems.
 */

export interface LayoutConfig {
  /** Unique preset name */
  name: string;
  /** Human-readable label */
  label: string;
  /** Short description */
  description: string;

  // ── Navigation ──────────────────────────────────────────────
  /** Primary navigation pattern */
  navigation: "tabs" | "sidebar" | "tree" | "bottom-tabs";
  /** Where the main section tabs sit */
  tabPosition: "top" | "left";

  // ── Toolbar ─────────────────────────────────────────────────
  /** Whether the grouped ribbon toolbar appears */
  showRibbon: boolean;
  /** Where record actions (Add, Edit, Delete) are placed */
  actionPlacement: "ribbon" | "toolbar" | "inline" | "fab";

  // ── Panels ──────────────────────────────────────────────────
  /** Left-hand collapsible clinical tree */
  showClinicalTree: boolean;
  /** Which side the tree panel sits on */
  treePosition: "left" | "right";
  /** Quick-glance patient summary strip (Epic-style storyboard) */
  showStoryboard: boolean;
  /** Ward-level patient status board */
  showStatusBoard: boolean;

  // ── Patient banner ──────────────────────────────────────────
  /** How much detail the patient identifying strip shows */
  patientBanner: "compact" | "full" | "minimal";

  // ── Content ─────────────────────────────────────────────────
  /** How consultation/encounter history is presented */
  recordView: "table" | "timeline" | "cards" | "notes";
  /** How the patient list / ward view is displayed */
  patientList: "table" | "board" | "cards";
  /** How lab/investigation results are shown */
  resultsView: "table" | "flowsheet" | "timeline";
  /** How clinical notes are entered */
  documentationStyle: "structured" | "freetext" | "hybrid";

  // ── Layout ──────────────────────────────────────────────────
  /** Overall information density */
  density: "compact" | "comfortable" | "spacious";
  /** Touch-optimised layout as default */
  mobileFirst: boolean;
  /** Whether sidebar/tree can collapse to icons */
  sidebarCollapsible: boolean;
}

// ── Presets ─────────────────────────────────────────────────────

export const PRESETS: Record<string, LayoutConfig> = {
  "gp-classic": {
    name: "gp-classic",
    label: "GP Classic",
    description: "Tabs, ribbon toolbar, clinical tree, compact tables. Familiar to EMIS Web users.",
    navigation: "tabs",
    tabPosition: "top",
    showRibbon: true,
    actionPlacement: "ribbon",
    showClinicalTree: true,
    treePosition: "left",
    showStoryboard: false,
    showStatusBoard: false,
    patientBanner: "compact",
    recordView: "table",
    patientList: "table",
    resultsView: "table",
    documentationStyle: "structured",
    density: "compact",
    mobileFirst: false,
    sidebarCollapsible: false,
  },

  "gp-tree": {
    name: "gp-tree",
    label: "GP Tree Nav",
    description: "Tree as primary navigation, simple toolbar, comfortable density. Familiar to SystmOne users.",
    navigation: "tree",
    tabPosition: "top",
    showRibbon: false,
    actionPlacement: "toolbar",
    showClinicalTree: true,
    treePosition: "left",
    showStoryboard: false,
    showStatusBoard: false,
    patientBanner: "compact",
    recordView: "table",
    patientList: "table",
    resultsView: "table",
    documentationStyle: "structured",
    density: "comfortable",
    mobileFirst: false,
    sidebarCollapsible: true,
  },

  acute: {
    name: "acute",
    label: "Acute",
    description: "Tabs with sidebar, storyboard, notes-based records. Familiar to Epic Hyperspace users.",
    navigation: "tabs",
    tabPosition: "top",
    showRibbon: false,
    actionPlacement: "toolbar",
    showClinicalTree: false,
    treePosition: "left",
    showStoryboard: true,
    showStatusBoard: false,
    patientBanner: "full",
    recordView: "notes",
    patientList: "table",
    resultsView: "flowsheet",
    documentationStyle: "hybrid",
    density: "comfortable",
    mobileFirst: false,
    sidebarCollapsible: true,
  },

  "acute-legacy": {
    name: "acute-legacy",
    label: "Acute Legacy",
    description: "Tabbed organiser, flowsheet results, table records. Familiar to Oracle Health / Cerner users.",
    navigation: "tabs",
    tabPosition: "top",
    showRibbon: false,
    actionPlacement: "toolbar",
    showClinicalTree: false,
    treePosition: "left",
    showStoryboard: false,
    showStatusBoard: false,
    patientBanner: "full",
    recordView: "table",
    patientList: "table",
    resultsView: "flowsheet",
    documentationStyle: "structured",
    density: "comfortable",
    mobileFirst: false,
    sidebarCollapsible: false,
  },

  "mobile-ward": {
    name: "mobile-ward",
    label: "Mobile Ward",
    description: "Bottom tabs, cards, spacious, status board, mobile-first. Familiar to Nervecentre users.",
    navigation: "bottom-tabs",
    tabPosition: "top",
    showRibbon: false,
    actionPlacement: "fab",
    showClinicalTree: false,
    treePosition: "left",
    showStoryboard: false,
    showStatusBoard: true,
    patientBanner: "minimal",
    recordView: "cards",
    patientList: "board",
    resultsView: "timeline",
    documentationStyle: "structured",
    density: "spacious",
    mobileFirst: true,
    sidebarCollapsible: false,
  },

  community: {
    name: "community",
    label: "Community & MH",
    description: "Sidebar nav, structured forms, collapsible panels. Familiar to Rio users.",
    navigation: "sidebar",
    tabPosition: "left",
    showRibbon: false,
    actionPlacement: "inline",
    showClinicalTree: false,
    treePosition: "left",
    showStoryboard: false,
    showStatusBoard: false,
    patientBanner: "full",
    recordView: "timeline",
    patientList: "table",
    resultsView: "table",
    documentationStyle: "structured",
    density: "comfortable",
    mobileFirst: false,
    sidebarCollapsible: true,
  },

  "web-acute": {
    name: "web-acute",
    label: "Web Acute",
    description: "Tabs, simple toolbar, status board, flowsheet results. Familiar to MEDITECH Expanse users.",
    navigation: "tabs",
    tabPosition: "top",
    showRibbon: false,
    actionPlacement: "toolbar",
    showClinicalTree: false,
    treePosition: "left",
    showStoryboard: false,
    showStatusBoard: true,
    patientBanner: "full",
    recordView: "table",
    patientList: "board",
    resultsView: "flowsheet",
    documentationStyle: "hybrid",
    density: "comfortable",
    mobileFirst: false,
    sidebarCollapsible: false,
  },
};

/** Get a preset by name, falling back to gp-classic */
export function getPreset(name: string): LayoutConfig {
  return PRESETS[name] ?? PRESETS["gp-classic"];
}

/** All preset names */
export const PRESET_NAMES = Object.keys(PRESETS);
