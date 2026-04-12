import { ButtonSection } from "./sections/buttons";
import { InputSection } from "./sections/inputs";
import { CardSection } from "./sections/cards";
import { BadgeSection } from "./sections/badges";
import { AlertSection } from "./sections/alerts";
import { TableSection } from "./sections/table";
import { TabsSection } from "./sections/tabs";
import { MiscSection } from "./sections/misc";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold tracking-tight">
            Union Design System
          </h1>
          <p className="text-sm text-muted-foreground">
            EMIS skin — kitchen sink of all available components
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl space-y-12 px-6 py-10">
        <ButtonSection />
        <InputSection />
        <CardSection />
        <BadgeSection />
        <AlertSection />
        <TableSection />
        <TabsSection />
        <MiscSection />
      </main>
    </div>
  );
}
