import { ButtonSection } from "./sections/buttons";
import { InputSection } from "./sections/inputs";
import { CardSection } from "./sections/cards";
import { BadgeSection } from "./sections/badges";
import { AlertSection } from "./sections/alerts";
import { TableSection } from "./sections/table";
import { MiscSection } from "./sections/misc";

export function ComponentsSection() {
  return (
    <div className="space-y-8 rounded-lg border bg-white p-6 shadow-sm">
      <ButtonSection />
      <hr className="border-slate-200" />
      <InputSection />
      <hr className="border-slate-200" />
      <CardSection />
      <hr className="border-slate-200" />
      <BadgeSection />
      <hr className="border-slate-200" />
      <AlertSection />
      <hr className="border-slate-200" />
      <TableSection />
      <hr className="border-slate-200" />
      <MiscSection />
    </div>
  );
}
