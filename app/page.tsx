"use client";

import { Button } from "@/components/ui/button";
import { Map, Table } from "lucide-react";
import Navbar from "@/components/layout/root/navbar";
import BigTitle from "@/components/layout/root/big-title";
import TeamCards from "@/components/layout/root/team-card";
import Footer from "@/components/layout/root/footer";

import dynamic from "next/dynamic";

const Maps = dynamic(() => import("@/components/features/maps/maps"), {
    ssr: false,
});

export default function Home() {
    return (
        <div>
            <Navbar />
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
                    <div className="bg-blue-100 rounded-md h-full w-full overflow-hidden">
                        <Maps />
                    </div>
                </div>
            </div>
            <BigTitle />
            <TeamCards />
            <Footer />
        </div>
    );
}
