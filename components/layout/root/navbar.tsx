import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Github, Heart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
            <h1 className="font-bold text-sm md:text-xl">Boat Safe System</h1>
            <NavigationMenu className="z-[999] hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Kami</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components
                                            built with Radix UI and Tailwind
                                            CSS.
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink>
                                        <div className="text-sm font-medium leading-none">
                                            Alat
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Monitoring kapal dilaut secara
                                            realtime menggunakan alat kami
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink>
                                        <div className="text-sm font-medium leading-none">
                                            Alat
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Monitoring kapal dilaut secara
                                            realtime menggunakan alat kami
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink>
                                        <div className="text-sm font-medium leading-none">
                                            Alat
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Monitoring kapal dilaut secara
                                            realtime menggunakan alat kami
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Produk</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                <li>
                                    <NavigationMenuLink>
                                        <div className="text-sm font-medium leading-none">
                                            Alat
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Monitoring kapal dilaut secara
                                            realtime menggunakan alat kami
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink>
                                        <div className="text-sm font-medium leading-none">
                                            Layanan
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Kami menyediakan layanan monitoring
                                            kapal dilaut secara realtime
                                            menggunakan alat kami
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <div>
                                <Github className="inline-flex mr-2" />
                                <span>Github</span>
                            </div>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex md:gap-4">
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
            </div>
        </header>
    );
}
