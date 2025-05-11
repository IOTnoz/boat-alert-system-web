import { DataTable } from "@/components/ui/data-table";
import { columns, DataAlertType } from "./columns";
import TimerClock from "@/components/clock";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

export default function ShipPage() {
    const dataAlert: DataAlertType[] = [
        {
            code: "IOTNOZ09",
            name: "Kapal IOTNOZ",
            date: "23 Mei 2025",
            time: "14:00 WITA",
            lat: "-10.0009",
            lon: "5.00009",
            ship_tilt: "45 derajat",
        },
    ];

    return (
        <div className="container mx-auto py-2 px-6">
            <div className="flex mb-4 gap-4">
                <TimerClock />
                <Alert className="border-green-400">
                    <CheckCircle className="text-green-400" />
                    <AlertTitle>Tidak ada peringatan</AlertTitle>
                    <AlertDescription>
                        Tidak ada data kapal yang mencapai kemiringan
                        berpotensial terbalik dalam satu jam terakhir
                    </AlertDescription>
                </Alert>
            </div>
            <DataTable columns={columns} data={dataAlert} />
        </div>
    );
}
