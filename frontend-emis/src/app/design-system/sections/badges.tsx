import { Badge } from "@/components/ui/badge";

export function BadgeSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Badges</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Status indicators, tags, and labels.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Variants</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Clinical context</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Active</Badge>
            <Badge variant="secondary">Resolved</Badge>
            <Badge variant="destructive">Urgent</Badge>
            <Badge variant="outline">Routine</Badge>
            <Badge variant="secondary">Pending</Badge>
            <Badge variant="outline">Allergy: Penicillin</Badge>
            <Badge variant="destructive">NKDA</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
