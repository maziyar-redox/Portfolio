"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/libs/utils";

import { SidebarStore } from "@/stores/use-sidebar";

import { Link, usePathname } from "@/i18n/routing";

export function SidebarItems({
    text,
    href
}: {
    text: string;
    href: string;
}) {
    const pathname = usePathname();
    const {
        onCollapse
    } = SidebarStore((state) => state);
    return (
        <li>
            <Button disabled={pathname.includes(href) ? true : false} asChild variant="selected" size="default" className={cn(
                "w-36",
                pathname.includes(href) ? "opacity-85" : "opacity-100",
            )} onClick={() => {
                onCollapse();
            }}>
                <Link href={href}>
                    {text}
                </Link>
            </Button>
        </li>
    );
};