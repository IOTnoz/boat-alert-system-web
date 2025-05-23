"use client";

import AddShip from "@/components/features/ship/add-ship";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useEffect, useState } from "react";
import { Ship, ShipSchema } from "@/types/ship";
import { onValue, ref } from "firebase/database";
import { database as db } from "@/lib/firebase";

export default function ShipPage() {
    const [data, setData] = useState<Ship[]>([]);

    useEffect(() => {
        const useRef = ref(db, "ships");

        const unsubscribe = onValue(useRef, (snapshot) => {
            const data = snapshot.val();
            const validShip: Ship[] = [];

            if (data) {
                for (const key in data) {
                    const parsed = ShipSchema.safeParse(data[key]);
                    if (parsed.success) {
                        validShip.push(parsed.data);
                    }
                }
            }

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
