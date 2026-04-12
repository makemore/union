import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CardSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Cards</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Card layouts for patient summaries, tasks, and clinical content.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
            <CardDescription>NHS: 943 476 5919 · DOB: 14/03/1985</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge>Female</Badge>
              <Badge variant="outline">Active</Badge>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Last seen: 12 Apr 2026 — Dr Williams (Cardiology)
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="outline" className="w-full">View Record</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Task</CardTitle>
            <CardDescription>Review blood test results</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Assigned to Dr Patel · Due: 13 Apr 2026
            </p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button size="sm">Complete</Button>
            <Button size="sm" variant="outline">Reassign</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Referral</CardTitle>
            <CardDescription>Outbound to St Mary&apos;s</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="secondary">Sent</Badge>
              <Badge variant="outline">Cardiology</Badge>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Patient: Jane Smith · Sent: 10 Apr 2026
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="ghost">View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
