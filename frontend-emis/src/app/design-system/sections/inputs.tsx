"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function InputSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Form Controls</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Inputs, selects, switches, and labels.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="patient-name">Patient Name</Label>
          <Input id="patient-name" placeholder="e.g. Jane Smith" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nhs-number">NHS Number</Label>
          <Input id="nhs-number" placeholder="000 000 0000" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email (disabled)</Label>
          <Input id="email" type="email" disabled value="jane@nhs.net" />
        </div>

        <div className="space-y-2">
          <Label>Department</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="oncology">Oncology</SelectItem>
              <SelectItem value="orthopaedics">Orthopaedics</SelectItem>
              <SelectItem value="paediatrics">Paediatrics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-3 pt-6">
          <Switch id="urgent" />
          <Label htmlFor="urgent">Mark as urgent</Label>
        </div>
      </div>
    </section>
  );
}
