"use client";

import { useMediaQuery } from "usehooks-ts";
import { NavbarLinkContainer } from "./navbar";
import { Button } from "@/components/ui/button";
import { BarsBottomRight } from "@/components/svg/bars-bottom-right";
import { SidebarStore } from "@/store/use-sidebat";

const navLinks = [
    {
        nav_text: "Home",
        href: "/",
    },
    {
        nav_text: "Contact me",
        href: "/contact",
    },
    {
        nav_text: "Blogs",
        href: "/blogs",
    },
    {
        nav_text: "Projects",
        href: "/projects",
    },
    {
        nav_text: "Services",
        href: "/services",
    },
    {
        nav_text: "About me",
        href: "/about",
    },
];

export function NavbarItems() {
    const matches = useMediaQuery('(max-width: 1024px)');
    const {
        collapse,
        onExpand
    } = SidebarStore((state) => state);
    return (
        <>
            {!matches && (
                <ul className="flex flex-row space-x-2.5">
                    {navLinks.map((items) => (
                        <NavbarLinkContainer key={items.href} href={items.href} text={items.nav_text} />
                    ))}
                </ul>
            )}
            {matches && (
                <Button onClick={() => onExpand()} size="icon" variant="selected">
                    <BarsBottomRight />
                </Button>
            )}
        </>
    );
};