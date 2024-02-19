"use client";

import { useIsClient } from "usehooks-ts";

import { LoadingState } from "./loading-page";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { DigitalCard } from "./digitalCard";

export function Wrapper({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isClient = useIsClient();
    if (!isClient) {
        return (
            <LoadingState />
        );
    };
    return (
        <>
            <Sidebar />
            <Navbar />
            {children}
            <div className="px-2.5 bg-gray-6">
                <DigitalCard />
                <Footer />
            </div>
        </>
    );
};