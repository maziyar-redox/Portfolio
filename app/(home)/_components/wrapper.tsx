"use client";

import { useIsClient } from "usehooks-ts";
import { LoadingState } from "./loading-page";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";

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
            {children}
        </>
    );
};