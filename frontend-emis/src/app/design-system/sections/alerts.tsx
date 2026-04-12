import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Info, TriangleAlert } from "lucide-react";

export function AlertSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Alerts</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Notifications, warnings, and system messages.
      </p>

      <div className="space-y-3">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            Patient record has been updated by Dr Williams at 09:42.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Critical Alert</AlertTitle>
          <AlertDescription>
            Allergy interaction detected — Penicillin. Review before prescribing.
          </AlertDescription>
        </Alert>

        <Alert>
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Blood test results are overdue. Last requested: 05 Apr 2026.
          </AlertDescription>
        </Alert>

        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Referral to St Mary&apos;s Hospital has been sent successfully.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
