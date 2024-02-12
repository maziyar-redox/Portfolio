"use client";

import { Separator } from "@/components/ui/separator";
import { Cards } from "./cards";
import { TextItems } from "./text-items";
import { SparklesFunction } from "@/components/svg/sparkles";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";


const ResonData = [
    {
        id: 1,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    },
    {
        id: 2,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    },
    {
        id: 3,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    }
];

const ResonData2 = [
    {
        id: 1,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    },
    {
        id: 2,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    },
    {
        id: 3,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    },
];

export function ReasonToChose() {
    const matches = useMediaQuery('(max-width: 1024px)');
    return (
        <div className="flex flex-col items-center justify-center px-10 pt-10 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
            <TextItems />
            <div>
                <div className={cn(
                    "grid",
                    matches ? "grid-cols-1 gap-y-8" : "grid-cols-3 gap-x-4"
                )}>
                    {ResonData.map((items) => (
                        <Cards
                            id={items.id}
                            key={items.id}
                            header={items.header}
                            caption={items.caption}
                            icon={items.icon}
                            href={items.href}
                        />
                    ))}
                </div>
                <Separator
                    className="my-10 bg-gray-12"
                    orientation="horizontal"
                />
                <div className={cn(
                    "grid lg:pt-0",
                    matches ? "grid-cols-1 gap-y-8" : "grid-cols-3 gap-x-4"
                )}>
                    {ResonData.map((items) => (
                        <Cards
                            id={items.id}
                            key={items.id}
                            header={items.header}
                            caption={items.caption}
                            icon={items.icon}
                            href={items.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};