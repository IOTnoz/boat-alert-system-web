import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Calendar, Compass, HelpCircle, History } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { database } from "@/lib/firebase";
import { off, onValue, orderByChild, query, ref } from "firebase/database";
import { NavigationLog } from "@/types";

export default function NavigationDetails({
    shipId,
    name,
}: {
    shipId: string;
    name: string;
}) {
    const [open, setOpen] = useState(false);
    const [shipNavigation, setShipNavigation] = useState<NavigationLog[]>([]);

    useEffect(() => {
        if (!open) return;

        const navRef = query(
            ref(database, `boats/${shipId}/navigation_log`),
            orderByChild("timestamp"),
        );

        onValue(navRef, (snapshot) => {
            const data = snapshot.val();
            let logs: NavigationLog[] = [];

            if (data) {
                logs = Object.values(data);
            }

            const navData = logs
                .sort((a, b) => b.timestamp - a.timestamp)
                .slice(0, 20);

            setShipNavigation(navData);
        });

        return () => off(navRef);
    }, [open, shipId]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="bg-foreground w-full" size="sm">
                    <Compass />
                    Detail
                </Button>
            </SheetTrigger>
            <SheetContent className="z-[1000]">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <Compass className="w-4 h-4" />
                        Riwayat Navigasi
                    </SheetTitle>
                    <SheetDescription>
                        Realtime data navigasi kapal dan riwayat titik
                        perpindahan beserta kemiringannya.
                    </SheetDescription>
                </SheetHeader>
                <div className="px-4 text-xl font-bold pb-2">{name}</div>
                <div className="px-4 overflow-scroll">
                    <div className="font-semibold text-gray-500 pb-2">
                        Riwayat Navigasi
                    </div>
                    <div className="relative ml-4 font-sans">
                        <div className="absolute left-0 inset-y-0 border-l-2" />

                        {shipNavigation.map((nav, id) => (
                            <div
                                className="relative pl-10 pb-2 last:pb-0"
                                key={id}
                            >
                                <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                                    <History className="h-4 w-4" />
                                </div>
                                {/* Content */}
                                <div className="pt-2 sm:pt-1 space-y-3">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 mt-1 text-sm">
                                            {formatTimestampToClock(
                                                nav.timestamp,
                                            )}
                                            <Calendar className="w-4 h-4" />
                                            {formatTimestampToDate(
                                                nav.timestamp,
                                            )}
                                            <Badge
                                                className={
                                                    nav.flag
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-blue-100 text-blue-700"
                                                }
                                            >
                                                {nav.flag
                                                    ? "Peringatan"
                                                    : "Normal"}
                                            </Badge>
                                        </div>
                                        <Separator />
                                        <div className="flex gap-2 h-5 text-sm">
                                            <p>
                                                {Math.floor(nav.roll)}&#176;
                                                roll
                                            </p>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <HelpCircle className="w-4 h-4" />
                                                </TooltipTrigger>
                                                <TooltipContent className="z-[1000]">
                                                    <p>Kemiringan samping</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            <Separator orientation="vertical" />
                                            <p>
                                                {Math.floor(nav.pitch)}&#176;
                                                pitch
                                            </p>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <HelpCircle className="w-4 h-4" />
                                                </TooltipTrigger>
                                                <TooltipContent className="z-[1000]">
                                                    <p>
                                                        Kemiringan
                                                        depan/belakang
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="outline">Tutup</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

function formatTimestampToClock(timestamp: number): string {
    if (timestamp < 1000000000000) {
        timestamp *= 1000;
    }

    const date = new Date(timestamp);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

function formatTimestampToDate(timestamp: number): string {
    if (timestamp < 1000000000000) {
        timestamp *= 1000;
    }

    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}
