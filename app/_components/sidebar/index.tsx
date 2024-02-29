"use client";

import { X } from "@/components/svg/x-mark";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { SidebarStore } from "@/store/use-sidebar";

import { SidebarContainer } from "./sidebar";

import { Logo } from "@/components/logo";

import { useLockedBody } from "usehooks-ts";

export function Sidebar() {
    const {
        collapse,
        onCollapse
    } = SidebarStore((state) => state);
    const [locked, setLocked] = useLockedBody(collapse, 'root');
    return (
        <div className={cn(
            "fixed top-0 bottom-0 bg-white-90 bg-opacity-95 transition-all duration-300 w-screen lg:hidden",
            collapse ? "right-0 z-50" : "right-full"
        )}>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="absolute top-3 left-5">
                    <Logo color="black" />
                </div>
                <div className="absolute top-2.5 right-5">
                    <Button onClick={() => {
                        onCollapse();
                        setLocked(!locked);
                    }} variant="selected" size="icon">
                        <X />
                    </Button>
                </div>
                <SidebarContainer />
            </div>
        </div>
    );
};