import { EmisLayoutDemo } from "./emis-layout-demo";
import { ComponentsSection } from "./components-section";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="border-b bg-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800">
              Union Design System
            </h1>
            <p className="text-xs text-slate-500">
              EMIS-style skin — layout patterns and component library
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <a href="#layout" className="rounded bg-sky-50 px-3 py-1.5 font-medium text-sky-700 hover:bg-sky-100">
              Layout Preview
            </a>
            <a href="#components" className="rounded bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
              Components
            </a>
          </div>
        </div>
      </header>

      {/* Full layout preview */}
      <section id="layout" className="p-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Layout Preview — Patient Record
        </h2>
        <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <EmisLayoutDemo />
        </div>
      </section>

      {/* Individual components */}
      <section id="components" className="p-6 pt-0">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Component Library
        </h2>
        <ComponentsSection />
      </section>
    </div>
  );
}
