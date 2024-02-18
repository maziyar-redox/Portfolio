"use client";

import { Logo } from "@/components/logo";
import { NavbarItems } from "./navbar-items";

export function Navbar() {
    return (
        <nav className="h-[60px] lg:h-[82px] 3xl:h-[162px] border-b border-gray-12 flex flex-row justify-between items-center px-5 md:px-20 3xl:px-40">
            <Logo />
            <NavbarItems />
        </nav>
    );
};