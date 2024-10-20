"use client";

import { useScrollLock, useMediaQuery } from "usehooks-ts";

import { NavbarLinkContainer } from "./navbar";

import { Button } from "@/components/ui/button";

import { HiBars3BottomRight } from "react-icons/hi2";

import { SidebarStore } from "@/stores/use-sidebar";

import { navigation_data } from "@/data";

export function NavbarItems() {
    const matches = useMediaQuery('(max-width: 1024px)');
    const {
        collapse,
        onExpand
    } = SidebarStore((state) => state);
    const { lock, unlock } = useScrollLock({
        autoLock: false,
        lockTarget: "root"
    });
    return (
        <>
            {!matches && (
                <ul className="flex flex-row space-x-2.5">
                    {navigation_data.map((items) => (
                        <NavbarLinkContainer key={items.href} href={items.href} text={items.nav_text} />
                    ))}
                </ul>
            )}
            {matches && (
                <Button onClick={() => {
                    onExpand();
                    if (collapse) {
                        lock();
                    } else {
                        unlock();
                    };
                }} size="icon" variant="selected">
                    <HiBars3BottomRight size={24} />
                </Button>
            )}
        </>
    );
};