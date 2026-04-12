import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const patients = [
  { nhs: "943 476 5919", name: "Jane Smith", dob: "14/03/1985", gp: "Dr Williams", status: "Active" },
  { nhs: "872 104 3388", name: "John Davies", dob: "22/07/1972", gp: "Dr Patel", status: "Active" },
  { nhs: "561 893 2247", name: "Sarah Jones", dob: "01/11/1990", gp: "Dr Williams", status: "Inactive" },
  { nhs: "334 667 8812", name: "Robert Brown", dob: "30/05/1968", gp: "Dr Chen", status: "Active" },
  { nhs: "118 445 9903", name: "Emily Wilson", dob: "15/09/2001", gp: "Dr Patel", status: "Active" },
];

export function TableSection() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-semibold">Table</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Patient list table with status badges.
      </p>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NHS Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>GP</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.nhs} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-mono text-sm">{p.nhs}</TableCell>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell>{p.dob}</TableCell>
                <TableCell>{p.gp}</TableCell>
                <TableCell>
                  <Badge variant={p.status === "Active" ? "default" : "secondary"}>
                    {p.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
