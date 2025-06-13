"use client";

import AddShip from "@/components/features/ship/add-ship";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database as db } from "@/lib/firebase";
import { Ship } from "@/types";

export default function ShipPage() {
    const [data, setData] = useState<Ship[]>([]);

    useEffect(() => {
        const useRef = ref(db, "boats");

        const unsubscribe = onValue(useRef, (snapshot) => {
            const data = snapshot.val() as Record<string, Ship>;

            const validShip: Ship[] = Object.entries(data).map(
                ([shipId, ship]) => ({
                    code: shipId,
                    name: ship.name,
                    created_at: ship.created_at ?? "0",
                    status: ship.status ?? "Aktif",
                }),
            );

            setData(validShip);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="container mx-auto py-4 px-6">
            <div className="flex mb-4 justify-end">
                <AddShip />
            </div>

            <DataTable columns={columns} data={data} />
        </div>
    );
}
