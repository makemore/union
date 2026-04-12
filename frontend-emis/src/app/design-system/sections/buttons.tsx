import { Button } from "@/components/ui/button";
import { Plus, Save, Trash2, Send, ChevronRight, Loader2 } from "lucide-react";

export function ButtonSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Buttons</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        All button variants, sizes, and states.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Plus /></Button>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">With Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Button><Save className="mr-2 h-4 w-4" /> Save Record</Button>
            <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>
            <Button variant="outline"><Send className="mr-2 h-4 w-4" /> Send Referral</Button>
            <Button variant="ghost">Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">States</h3>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
