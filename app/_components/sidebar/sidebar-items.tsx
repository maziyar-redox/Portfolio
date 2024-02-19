"use client";

import type { NavbarLinkContainerProps } from "@/types/client-types";

import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { SidebarStore } from "@/store/use-sidebat";

import Link from "next/link";

export function SidebarItems({
    text,
    href
}: NavbarLinkContainerProps) {
    const pathname = usePathname();
    const {
        onCollapse
    } = SidebarStore((state) => state);
    return (
        <li>
            <Button disabled={href === pathname ? true : false} asChild variant="selected" size="default" className={cn(
                "w-36",
                pathname === href ? "opacity-85" : "opacity-100",
            )} onClick={() => {
                onCollapse()
            }}>
                <Link href={href}>
                    {text}
                </Link>
            </Button>
        </li>
    );
};