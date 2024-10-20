"use client";

import { HiOutlineXMark } from "react-icons/hi2";

import { Button } from "@/components/ui/button";

import { cn } from "@/libs/utils";

import { SidebarStore } from "@/stores/use-sidebar";

import { SidebarContainer } from "./sidebar";

import { Logo } from "@/components/logo";

import { useScrollLock } from "usehooks-ts";

export function Sidebar() {
    const {
        collapse,
        onCollapse
    } = SidebarStore((state) => state);
    const { lock, unlock } = useScrollLock({
        autoLock: false,
        lockTarget: "root"
    });
    return (
        <div className={cn(
            "fixed top-0 bottom-0 bg-white-shade-90 bg-opacity-95 transition-all duration-300 w-screen lg:hidden",
            collapse ? "right-0 z-50" : "right-full"
        )}>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="absolute top-3 left-5">
                    <Logo color="black" />
                </div>
                <div className="absolute top-2.5 right-5">
                    <Button onClick={() => {
                        onCollapse();
                        if (collapse) {
                            lock();
                        } else {
                            unlock();
                        };
                    }} variant="selected" size="icon">
                        <HiOutlineXMark size={24} />
                    </Button>
                </div>
                <SidebarContainer />
            </div>
        </div>
    );
};