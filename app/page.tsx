"use client";

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
            <div className="px-4 md:px-8">
                <div className="h-[90vh] bg-blue-100 rounded-md w-full overflow-hidden">
                    <Maps />
                </div>
            </div>
            <BigTitle />
            <TeamCards />
            <Footer />
        </div>
    );
}
