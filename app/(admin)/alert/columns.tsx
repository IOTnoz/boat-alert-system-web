"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";

export type StatusShipTilt = "Peringatan" | "Darurat";

export type DataAlertType = {
    code: string;
    name: string;
    date: string;
    time: string;
    lat: string;
    lon: string;
    ship_tilt: string;
    status: StatusShipTilt;
};

export const columns: ColumnDef<DataAlertType>[] = [
    {
        accessorKey: "code",
        header: "Kode",
    },
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "date",
        header: "Tanggal",
    },
    {
        accessorKey: "time",
        header: "Waktu",
    },
    {
        accessorKey: "lat",
        header: "Latitude",
    },
    {
        accessorKey: "lon",
        header: "longitute",
    },
    {
        accessorKey: "ship_tilt",
        header: "Kemiringan",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status: StatusShipTilt = row.getValue("status");

            return <Badge>{status}</Badge>;
        },
    },
    {
        id: "actions",
        cell: () => {
            return (
                <Button variant="outline" size="sm">
                    <Search /> Detail
                </Button>
            );
        },
    },
];
