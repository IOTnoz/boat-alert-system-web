"use client"

import { Button } from "@/components/ui/button";
import { Github, Heart, Map, Table } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import TeamCards from "@/components/team-card";
import Footer from "@/components/layout/footer";
import BigTitle from "@/components/big-title";
import MapLeaflet from "@/components/maps";

export default function Home() {
  const Maps = useMemo(() => dynamic(
    () => import('@/components/map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), []);
  return (
    <div>
      <header className="max-w-7xl mx-auto py-4 flex justify-between">
        <h1>Boat Safe System</h1>
        <NavigationMenu>
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
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <div className="text-sm font-medium leading-none">Alat</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Monitoring kapal dilaut secara realtime menggunakan alat kami
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <div className="text-sm font-medium leading-none">Alat</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Monitoring kapal dilaut secara realtime menggunakan alat kami
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <div className="text-sm font-medium leading-none">Alat</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Monitoring kapal dilaut secara realtime menggunakan alat kami
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
                      <div className="text-sm font-medium leading-none">Alat</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Monitoring kapal dilaut secara realtime menggunakan alat kami
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <div className="text-sm font-medium leading-none">Layanan</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Kami menyediakan layanan monitoring kapal dilaut secara realtime menggunakan alat kami
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
        <div>
          <Button>
            <Heart /> Donasi
          </Button>
        </div>
      </header>
      <div className="h-[90vh] flex px-4 gap-4">
        <div className="flex-none w-fit flex flex-col h-full justify-center gap-4">
          <Button variant="outline" size="icon" className="w-16 h-16">
            <Map className="w-12 h-12" />
          </Button>
          <Button variant="outline" size="icon" className="w-16 h-16">
            <Table className="w-12 h-12" />
          </Button>
        </div>
        <div className="grow">
          <div className="bg-gray-200 rounded-md h-full w-full overflow-hidden">
            <MapLeaflet />
          </div>
        </div>
      </div>
      <BigTitle />
      <TeamCards />
      <Footer />
    </div>
  );
}
