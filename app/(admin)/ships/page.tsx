import AddShip from "@/components/features/ship/add-ship";
import { columns, Ship } from "./columns";
import { DataTable } from "@/components/ui/data-table";

const ships: Ship[] = [
    {
        code: "IOTNOZ-SHIP-09",
        name: "Kapal IOTNOZ",
        status: "Tidak Aktif",
        created_at: "23 April 2025",
    },
    {
        code: "IOTNOZ-SHIP-09",
        name: "Kapal IOTNOZ",
        status: "Tidak Aktif",
        created_at: "24 April 2025",
    },
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
                <AddShip />
            </div>
            <DataTable columns={columns} data={ships} />
        </div>
    );
}
