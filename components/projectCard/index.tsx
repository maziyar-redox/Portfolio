"use client";

import type { CardProps } from "@/types";

import { cn } from "@/libs/utils";

import { useState } from "react";

import { format } from "date-fns";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { IoMdArrowForward } from "react-icons/io";
import { Link } from "@/i18n/routing";

export function ProjectCard({
    icon,
    header,
    caption,
    category,
    href,
    img,
    time
}: CardProps) {
    const [isMouse, setIsMouse] = useState(false);
    return (
        <div className="border border-gray-shade-15 bg-gray-shade-12/20 flex flex-col justify-center items-center rounded-2xl col-span-1">
            <div className="w-full sm:my-8 my-6 px-6 sm:px-8">
                <div className="relative flex justify-center items-center h-full z-20">
                    {/* IMG MUST BE 1280 x 620 */}
                    <Image
                        onMouseEnter={() => setIsMouse(true)}
                        onMouseLeave={() => setIsMouse(false)}
                        className="object-center object-cover rounded-2xl border border-gray-shade-10 blur-sm hover:blur-none transition-all duration-200"
                        src={img as string}
                        alt="project"
                        width={1280}
                        height={620}
                    />
                    <div className={cn(
                        "absolute top-1/3 md:top-2/4 transition-all",
                        isMouse && "scale-0 duration-200"
                    )}>
                        {icon}
                    </div>
                    <div className="absolute -bottom-5">
                        <Button variant="border" asChild>
                            <Link href={href} className="font-extralight text-xs gap-x-2">
                                <span>
                                    View Project Detail
                                </span>
                                <IoMdArrowForward size={15} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full px-6 sm:px-8 mt-5 sm:mt-7 mb-6 flex flex-col space-y-3">
                <h1 className="text-sm sm:text-lg text-white font-semibold text-left">
                    {header}
                </h1>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center space-y-3 sm:space-y-3">
                    <h2 className="text-white font-light text-xs sm:text-sm">
                        Category: {category}
                    </h2>
                    <h2 className="text-white font-light text-xs sm:text-sm">
                        {format(time as Date, "PPpp")}
                    </h2>
                </div>
                <p className="text-white-shade-55 font-light text-xs">
                    {caption}
                </p>
            </div>
        </div>
    );
};