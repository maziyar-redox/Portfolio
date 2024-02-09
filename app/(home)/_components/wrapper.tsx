"use client";

import { useIsClient } from "usehooks-ts";
import { LoadingState } from "./loading-page";
import { Navbar } from "./navbar";

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
            <Navbar />
            <div>
                {children}
            </div>
        </>
    );
};