import { Button } from "@/components/ui/button";
import { columns, Ship } from "./columns";
import { PlusIcon } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";

const ships: Ship[] = [
    {
        code: "IOTNOZ-SHIP-09",
        name: "Kapal IOTNOZ",
        status: "Tidak Aktif",
        created_at: "23 April 2025",
    },
];

export default function ShipPage() {
    return (
        <div className="container mx-auto py-4 px-6">
            <div className="flex mb-4 justify-end">
                <Button variant="outline" size="sm">
                    <PlusIcon />
                    <span className="hidden lg:inline">Tambah Kapal</span>
                </Button>
            </div>
            <DataTable columns={columns} data={ships} />
        </div>
    );
}
