"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";

export type DataAlertType = {
    code: string;
    name: string;
    date: string;
    time: string;
    lat: string;
    lon: string;
    ship_tilt: string;
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
