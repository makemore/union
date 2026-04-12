"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function MiscSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Misc</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Avatars, separators, and utility components.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Avatars</h3>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>DW</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">
              Dr Williams, Dr Patel, Dr Chen
            </span>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Typography</h3>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Heading 1 — Page Title</h1>
            <h2 className="text-2xl font-semibold">Heading 2 — Section</h2>
            <h3 className="text-xl font-medium">Heading 3 — Subsection</h3>
            <h4 className="text-lg font-medium">Heading 4 — Group</h4>
            <p className="text-base">
              Body text — standard paragraph content for clinical notes and descriptions.
            </p>
            <p className="text-sm text-muted-foreground">
              Muted text — secondary information, timestamps, and metadata.
            </p>
            <p className="font-mono text-sm">
              Mono — NHS numbers, codes, identifiers: 943 476 5919
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Colour Palette</h3>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
            {[
              { name: "Primary", cls: "bg-primary text-primary-foreground" },
              { name: "Secondary", cls: "bg-secondary text-secondary-foreground" },
              { name: "Muted", cls: "bg-muted text-muted-foreground" },
              { name: "Accent", cls: "bg-accent text-accent-foreground" },
              { name: "Destructive", cls: "bg-destructive text-white" },
              { name: "Card", cls: "bg-card text-card-foreground border" },
              { name: "Background", cls: "bg-background text-foreground border" },
              { name: "Border", cls: "bg-border text-foreground" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div className={`h-12 rounded-md ${c.cls}`} />
                <span className="mt-1 block text-xs text-muted-foreground">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
