"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ship } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, Check, CircleX, Pencil, Trash } from "lucide-react";

export const columns: ColumnDef<Ship>[] = [
    {
        accessorKey: "code",
        header: "Kode",
    },
    {
        accessorKey: "name",
        header: "Nama Kapal",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const value: "Aktif" | "Tidak Aktif" = row.getValue("status");
            return (
                <Badge variant="outline">
                    {value == "Aktif" ? (
                        <Check className="text-green-400" />
                    ) : (
                        <CircleX className="text-red-400" />
                    )}
                    {value}
                </Badge>
            );
        },
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="hover:cursor-pointer"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() == "asc")
                    }
                >
                    Tanggal Dibuat
                    <ArrowDown />
                </Button>
            );
        },
    },
    {
        id: "actiions",
        cell: () => {
            return (
                <div className="flex gap-2">
                    <Button>
                        <Pencil />
                        Edit
                    </Button>
                    <Button variant="destructive">
                        <Trash />
                        Hapus
                    </Button>
                </div>
            );
        },
    },
];
