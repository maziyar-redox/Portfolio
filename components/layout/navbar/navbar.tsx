"use client";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/routing";

export function NavbarLinkContainer({
    href,
    text
}: {
    href: string;
    text: string;
}) {
    const pathname = usePathname();
    return (
        <li>
            <Button asChild variant={pathname === href ? "selected" : "not_selected"}>
                <Link className="font-normal 3xl:text-3xl 3xl:p-10" href={href}>
                    {text}
                </Link>
            </Button>
        </li>
    );
};