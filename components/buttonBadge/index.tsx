/*
    THIS COMPONENT IS NOT CLIENT COMPONENT
    IT'S DESIGNED FOR BUTTON V1 COMPONENT
*/

import type { ButtonProps } from "@/types";

import { IoMdArrowForward } from "react-icons/io";

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";

export function ButtonBadge({
    href,
    children,
}: ButtonProps) {
    return (
        <>
            <span className="flex flex-row justify-center items-center space-x-4 border border-gray-shade-12 rounded-full pr-2 pl-4 py-1.5">
                <h1 className="text-white font-light text-xs lg:text-sm">
                    {children}
                </h1>
                <Button className="rounded-full w-[44px] h-7 lg:h-8" size="icon" variant="destructive" asChild>
                    <Link href={href}>
                        <IoMdArrowForward
                            size={13}
                        />
                    </Link>
                </Button>
            </span>
        </>
    );
};