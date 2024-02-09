"use client";

import type { NavbarLinkContainerProps } from "@/types/client-types";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SidebarItems({
    text,
    href
}: NavbarLinkContainerProps) {
    return (
        <li>
            <Button asChild variant="selected" size="default" className="w-36">
                <Link href={href}>
                    {text}
                </Link>
            </Button>
        </li>
    );
};