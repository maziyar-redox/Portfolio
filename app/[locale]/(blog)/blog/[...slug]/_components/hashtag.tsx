"use client";

import { Link } from "@/i18n/routing";
import { HexColor } from "@/libs/hex-color"; 

export function Hashtag({
    href
}: {
    href: string;
}) {
    const color = `#${HexColor()}`;
    return (
        <Link className="inline-flex no-underline" href={"/tags/" + href}>
            <span style={{ color: color }}>
                #
            </span>
            <span className="text-white">
                {href}
            </span>
        </Link>
    );
};