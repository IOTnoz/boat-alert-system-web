import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { base, navList } from "./navbar";
import { useState } from "react";

export default function NavigationMobile() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="z-[9999] p-4 w-full">
                <SheetHeader>
                    <SheetTitle asChild>
                        <Link
                            href={base.link}
                            className="flex gap-2 text-xl font-semibold"
                            onClick={handleClose}
                        >
                            <Image
                                src="/logo.png"
                                alt="Logo IOTNOZ"
                                width={30}
                                height={30}
                                className="rounded-md"
                            />
                            {base.title}
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <ul className="space-y-2 p-4">
                    <Link href="/" onClick={handleClose}>
                        Maps
                    </Link>
                    {navList.map((nav, idx) => (
                        <div key={idx} className="space-y-2">
                            <li className="mt-4 font-medium">{nav.title}</li>
                            <Separator />
                            {nav.list.map((list, i) => (
                                <li
                                    key={`${idx}-${i}`}
                                    className="font-medium text-sm ml-2"
                                >
                                    <Link
                                        href={list.link}
                                        onClick={handleClose}
                                    >
                                        {list.title}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>

                <div className="p-2 w-full">
                    <Button variant="outline" className="w-full">
                        <Heart />
                        Donasi
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
