"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertType } from "@/types/alert";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";

export const columns: ColumnDef<AlertType>[] = [
    {
        accessorKey: "code",
        header: "Kode",
    },
    {
        accessorKey: "ship.name",
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
        accessorKey: "pitch",
        header: "Kemiringan Pitch",
    },
    {
        accessorKey: "roll",
        header: "Kemiringan Roll",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status: "Peringatan" | "Darurat" = row.getValue("status");

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
