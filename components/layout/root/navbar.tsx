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
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, ShipIcon } from "lucide-react";
import Link from "next/link";

const base = {
    title: "Boat Safe System",
    link: "/",
};

const navList = [
    {
        title: "Tentang Kami",
        list: [
            {
                title: "IOTNOZ 09",
                desc: "Hadir untuk membantu para pelaut dan orang yang sedang berlayar.",
                link: "/produk",
            },
            {
                title: "Kami",
                desc: "Lihat siapa yang berkolaborasi dalam pengembangan ini.",
                link: "/kami",
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
                link: "/sofware",
            },
        ],
    },
];

export default function Navbar() {
    return (
        <header className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
            <Link href={base.link}>
                <h1 className="font-bold text-sm md:text-xl">
                    Boat Safe System
                </h1>
            </Link>

            <NavigationMenu className="z-[500] hidden md:block">
                <NavigationMenuList>
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
                <Button
                    variant="outline"
                    className="hover:cursor-pointer focus:bg-gray-100"
                    onClick={() => console.log("HI donasi")}
                >
                    <Heart /> Donasi
                </Button>
                <Link href="/login" className="hidden md:block">
                    <Button>Login</Button>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="lg:hidden"
                        >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="z-[9999] p-4 w-full">
                        <SheetHeader>
                            <SheetTitle asChild>
                                <Link
                                    href={base.link}
                                    className="text-xl font-semibold"
                                >
                                    {base.title}
                                </Link>
                            </SheetTitle>
                        </SheetHeader>

                        <ul className="space-y-2 p-4">
                            {navList.map((nav, idx) => (
                                <div key={idx} className="space-y-2">
                                    <li className="mt-4 font-medium">
                                        {nav.title}
                                    </li>
                                    <Separator />
                                    {nav.list.map((list, i) => (
                                        <li
                                            key={`${idx}-${i}`}
                                            className="font-medium text-sm ml-2"
                                        >
                                            <Link href={list.link}>
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
            </div>
        </header>
    );
}
