"use client";

import type { NavbarLinkContainerProps } from "@/types/client-types";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavbarLinkContainer({
    href,
    text
}: NavbarLinkContainerProps) {
    const pathname = usePathname();
    return (
        <li>
            <Button asChild variant={pathname === href ? "selected" : "notSelected"}>
                <Link className="font-normal 3xl:text-3xl 3xl:p-10" href={href}>
                    {text}
                </Link>
            </Button>
        </li>
    );
};