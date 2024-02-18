"use client";

import { SidebarItems } from "./sidebar-items";

const navLinks = [
    {
        nav_text: "Home",
        href: "/",
    },
    {
        nav_text: "Services",
        href: "/services",
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
        nav_text: "About me",
        href: "/about",
    },
];

export function SidebarContainer() {
    return (
        <ul className="flex flex-col items-center justify-center space-y-3">
            {navLinks.map((items) => (
                <SidebarItems key={items.href} text={items.nav_text} href={items.href} />
            ))}
        </ul>
    );
};