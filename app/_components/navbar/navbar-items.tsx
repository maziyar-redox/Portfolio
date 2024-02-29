"use client";

import { useLockedBody, useMediaQuery } from "usehooks-ts";

import { NavbarLinkContainer } from "./navbar";

import { Button } from "@/components/ui/button";

import { BarsBottomRight } from "@/components/svg/bars-bottom-right";

import { SidebarStore } from "@/store/use-sidebar";

import { navigation_data } from "@/data/data";

export function NavbarItems() {
    const matches = useMediaQuery('(max-width: 1024px)');
    const {
        collapse,
        onExpand
    } = SidebarStore((state) => state);
    const [locked, setLocked] = useLockedBody(collapse, 'root');
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
                    setLocked(!locked);
                }} size="icon" variant="selected">
                    <BarsBottomRight />
                </Button>
            )}
        </>
    );
};