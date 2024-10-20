"use client";

import { useIsClient } from "usehooks-ts";

import { LoadingPage } from "@/components/loadingPage";
import { DigitalCard } from "@/components/layout/faq";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

export function Wrapper({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isClient = useIsClient();
    if (!isClient) {
        return (
            <LoadingPage />
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