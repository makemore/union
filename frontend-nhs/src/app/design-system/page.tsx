import { PresetDemo } from "./preset-demo";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-nhs-pale-grey">
      {/* Header */}
      <header className="border-b bg-nhs-blue px-6 py-3">
        <h1 className="text-lg font-bold text-white">Union Design System</h1>
        <p className="text-xs text-nhs-light-blue">
          NHS design tokens · configurable layout presets · switch between clinical system layouts
        </p>
      </header>

      <PresetDemo />
    </div>
  );
}
