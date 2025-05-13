"use client";

import { createShip } from "@/actions/ship";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { useActionState, useEffect, useState } from "react";

export default function AddShip() {
    const [state, formAction, pending] = useActionState(createShip, undefined);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!state?.errors && !pending) {
            setOpen(false);
        }
    }, [state, pending]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <PlusIcon />
                    <span className="hidden lg:inline">Tambah Kapal</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tambah Kapal</DialogTitle>
                    <DialogDescription>
                        Tambahkan kapal yang menggunakan alat dengan ID yang
                        telah disediakan.
                    </DialogDescription>
                </DialogHeader>
                <form action={formAction}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 gap-2 items-center">
                            <Label htmlFor="code" className="text-right">
                                Kode ID
                            </Label>
                            <Input
                                id="code"
                                name="code"
                                className="col-span-3"
                            />
                            <p>{state?.errors.name}</p>
                        </div>
                        <div className="grid grid-cols-4 gap-2 items-center">
                            <Label htmlFor="name" className="text-right">
                                Nama Kapal
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={pending}>
                            Simpan
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
