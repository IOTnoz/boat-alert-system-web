"use client";
import Footer from "@/components/layout/root/footer";
import Navbar from "@/components/layout/root/navbar";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
