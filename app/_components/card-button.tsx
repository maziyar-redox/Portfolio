/*
    THIS COMPONENT IS NOT CLIENT COMPONENT
    IT'S DESIGNED FOR BUTTON V1 COMPONENT
*/

import type { ButtonProps } from "@/types/client-types";

import { ArrowSmallRight } from "@/components/svg/Arrow-Right";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export function CardButton({
    href,
    children,
    variant,
    type
}: ButtonProps) {
    return (
        <>
            {type === "INNER" && (
                <span className="flex flex-row justify-center items-center space-x-4 border border-gray-12 rounded-full pr-2 pl-4 py-1.5">
                    <h1 className="text-white font-light text-xs lg:text-sm">
                        {children}
                    </h1>
                    <Button variant={variant.variant} className="rounded-full w-[44px] h-7 lg:h-8" size="icon" asChild>
                        <Link href={href}>
                            <ArrowSmallRight
                                size={13}
                            />
                        </Link>
                    </Button>
                </span>
            )}
            {type === "OUTER" && (
                <Button variant={variant.variant} className="space-x-2.5">
                    <Link href={href} className="text-white text-xs font-light">
                        {children}
                    </Link>
                    <ArrowSmallRight size={12} />
                </Button>
            )}
        </>
    );
};