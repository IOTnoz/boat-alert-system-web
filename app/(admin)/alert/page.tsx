"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";
import TimerClock from "@/components/features/clock/clock";
import { AlertType } from "@/types/alert";
import { child, get, onValue, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { Ship } from "@/types/ship";

export default function ShipPage() {
    const [dataAlert, setDataAlert] = useState<AlertType[]>([]);

    useEffect(() => {
        const shipsRef = child(ref(database), "ships");
        const alertRef = ref(database, "alerts");

        const unsubscribe = onValue(alertRef, async (snapshot) => {
            const alertSnapshot: Record<string, AlertType> =
                snapshot.val() || {};

            const shipSnapshot = await get(shipsRef);
            const dataShip: Record<string, Ship> = shipSnapshot.val() || {};

            const data = Object.entries(alertSnapshot).map(([id, alert]) => ({
                ...alert,
                ship: dataShip[id],
            }));

            setDataAlert(data);
        });

        return () => unsubscribe();
    }, []);

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
