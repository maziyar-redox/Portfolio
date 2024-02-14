"use client";

import { ArrowSmallRight } from "@/components/svg/Arrow-Right";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectDetail({
    href,
    text = "View Project Detail"
}: {
    href: string;
    text?: string;
}) {
    return (
        <Button variant="projectDetail" className="space-x-2.5">
            <Link href={href} className="text-white text-xs font-light">
                {text}
            </Link>
            <ArrowSmallRight size={15} />
        </Button>
    );
};