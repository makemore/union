"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function TabsSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Tabs</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Tabbed navigation for record sections — like EMIS Care Record tabs.
      </p>

      <Tabs defaultValue="summary">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
          <TabsTrigger value="medication">Medication</TabsTrigger>
          <TabsTrigger value="problems">Problems</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="mt-4 rounded-md border p-4">
          <h3 className="font-medium">Patient Summary</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of active problems, current medication, allergies, and recent activity.
          </p>
          <div className="mt-3 flex gap-2">
            <Badge>Hypertension</Badge>
            <Badge>Type 2 Diabetes</Badge>
            <Badge variant="outline">Allergy: Penicillin</Badge>
          </div>
        </TabsContent>
        <TabsContent value="consultations" className="mt-4 rounded-md border p-4">
          <h3 className="font-medium">Consultations</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Chronological list of all clinical consultations.
          </p>
        </TabsContent>
        <TabsContent value="medication" className="mt-4 rounded-md border p-4">
          <h3 className="font-medium">Medication</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Active prescriptions, repeat medications, and past prescriptions.
          </p>
        </TabsContent>
        <TabsContent value="problems" className="mt-4 rounded-md border p-4">
          <h3 className="font-medium">Problems</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Active and resolved problem list.
          </p>
        </TabsContent>
        <TabsContent value="documents" className="mt-4 rounded-md border p-4">
          <h3 className="font-medium">Documents</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Letters, referrals, lab reports, and attached documents.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
