"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { SelectedStore } from "@/store/use-selected";
import { ActiveStore } from "@/store/use-active";

import { useMediaQuery } from "usehooks-ts";

import Link from "next/link";

export function CategoryButton({
    text,
    icon,
    href
}: {
    text: string;
    href: string;
    icon: React.ReactNode;
}) {
    const isMatches = useMediaQuery('(max-width: 768px)');
    const {
        selected,
        setSelected
    } = SelectedStore((state) => state);
    const {
        setActiveItem
    } = ActiveStore((state) => state);
    return (
        <>
            {isMatches
                ?
                <Button variant="category" className={cn(
                    "py-6 w-full pr-10",
                    selected === text ? "bg-gray-10 border-transparent" : ""
                )} asChild onClick={() => {
                    setSelected(text);
                    setActiveItem(href);
                }}>
                    <Link href={`#${href}`}>
                        {icon}
                        <h1 className={cn(
                            "text-white text-sm",
                            selected === text ? "font-semibold" : "font-normal"
                        )}>
                            {text}
                        </h1>
                    </Link>
                </Button>
                :
                <Button variant="category" className={cn(
                    "py-6 w-full pr-20",
                    selected === text ? "bg-gray-10 border-transparent" : ""
                )} onClick={() => {
                    setSelected(text);
                    setActiveItem(href);
                }}>
                    {icon}
                    <h1 className={cn(
                        "text-white text-sm",
                        selected === text ? "font-semibold" : "font-normal"
                    )}>
                        {text}
                    </h1>
                </Button>
            }
        </>
    );
};