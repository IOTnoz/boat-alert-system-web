import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Heart, NotebookPen, ShipIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMobile from "./navigation-mobile";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const base = {
    title: "Boat Safe System",
    link: "/",
};

export const navList = [
    {
        title: "Tentang Kami",
        list: [
            {
                title: "Produk",
                desc: "Hadir untuk membantu para pelaut dan orang yang sedang berlayar.",
                link: "/produk",
            },
            {
                title: "IOTNOZ 09",
                desc: "Lihat siapa yang berkolaborasi dalam pengembangan ini.",
                link: "/iotnoz",
            },
            {
                title: "Mitra",
                desc: "Kami berkontribusi untuk membantu yang lain.",
                link: "/mitra",
            },
        ],
    },
    {
        title: "Produk",
        list: [
            {
                title: "Hardware",
                desc: "Komponen yang digunakan pada alat kami.",
                link: "/hardware",
            },
            {
                title: "Software",
                desc: "Teknologi yang digunakan untuk monitoring.",
                link: "/software",
            },
        ],
    },
];

export default function Navbar() {
    return (
        <header className="container mx-auto py-4 px-4 flex justify-between items-center">
            <Link href={base.link} className="flex gap-2 items-center">
                <Image
                    src="/logo.png"
                    alt="Logo IOTNOZ"
                    width={30}
                    height={30}
                    className="rounded-md"
                />
                <h1 className="font-bold text-sm md:text-xl">
                    Boat Safe System
                </h1>
            </Link>

            <NavigationMenu className="z-[500] hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/">Maps</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {navList.map((nav, idx) => (
                        <NavigationMenuItem key={idx}>
                            <NavigationMenuTrigger>
                                {nav.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                    {nav.list.map((list, i) => (
                                        <li
                                            className={`
                                                ${
                                                    idx == 0 && i == 0
                                                        ? `row-span-${nav.list.length - 1}`
                                                        : ""
                                                }`}
                                            key={i}
                                        >
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={list.link}
                                                    className={`${idx == 0 && i == 0 && "p-4"} h-full flex flex-col justify-between`}
                                                >
                                                    <div className="space-y-1">
                                                        <h3
                                                            className={`${idx == 0 && i == 0 ? "text-lg leading-tight" : "text-sm"} font-medium`}
                                                        >
                                                            {list.title}
                                                        </h3>
                                                        <p className="text-sm leading-tight line-clamp-2 text-muted-foreground">
                                                            {list.desc}
                                                        </p>
                                                    </div>

                                                    {idx == 0 && i == 0 && (
                                                        <Button>
                                                            Lihat Detail
                                                            <ShipIcon className="text-white" />
                                                        </Button>
                                                    )}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <a
                                href="https://github.com/IOTnoz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Github</span>
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex gap-2 md:gap-4">
                <Dialog>
                    <DialogTrigger>
                        <Button
                            variant="outline"
                            className="hover:cursor-pointer focus:bg-gray-100"
                            onClick={() => console.log("HI donasi")}
                        >
                            <Heart /> Donasi
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Donasi</DialogTitle>
                        <div>
                            <Alert>
                                <NotebookPen />
                                <AlertTitle>
                                    Donasi ini akan dipergunakan pribadi oleh
                                    tim kami.
                                </AlertTitle>
                                <AlertDescription>
                                    Tujuan adanya fitur donasi ini untuk
                                    menutupi pengeluaran kami dan diharapkan
                                    bisa membantu pengembangan selanjutnya.
                                </AlertDescription>
                            </Alert>
                            <div className="w-full aspect-square rounded-lg bg-gray-400 mt-4 overflow-clip">
                                <Image
                                    src="/qris.jpg"
                                    alt="qris donasi iotnoz"
                                    width={500}
                                    height={500}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <DialogClose asChild>
                            <Button variant="outline" className="w-full">
                                Tutup
                            </Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>

                {/* <Link href="/login" className="hidden md:block">
                    <Button>Login</Button>
                </Link> */}
                <NavigationMobile />
            </div>
        </header>
    );
}
