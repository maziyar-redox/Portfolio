"use client";

import type { CardProps } from "@/types/client-types"

import { useEffect, useRef } from "react";

import { useInView, useAnimation, motion } from "framer-motion";

import { LearnMoreButton } from "./learnmore-button";

import { cn } from "@/lib/utils";

import { useMediaQuery } from "usehooks-ts";

import "../css/style.css";

export function Cards({
    header,
    href,
    caption,
    icon,
    id
}: CardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        };
    }, [isInView, mainControls]);
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: any) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                },
            };
        },
    };
    const matches = useMediaQuery('(max-width: 1024px)');
    return (
        <div ref={ref} className={cn(
            "flex flex-col items-center justify-center space-y-3.5 col-span-1 px-4",
            id === 2 && !matches ? "border-r border-l border-gray-12" : "",
            id === 2 && matches ? "border-t border-b border-gray-12 py-6" : ""
        )}>
            <div className="relative">
                <div>
                    <motion.svg
                        style={{
                            filter: "drop-shadow(0 0 4px #dc2626)"
                        }}
                        width={65}
                        height={65}
                        viewBox="0 0 100 100"
                        initial="hidden"
                        animate={mainControls}
                    >
                        <motion.circle
                            className="crl stroke-red-700"
                            cx="50"
                            cy="50"
                            r="45"
                            variants={draw}
                            custom={0.25}
                        />
                    </motion.svg>
                </div>
                <div className="absolute top-[18px] right-[18px]">
                    {icon}
                </div>
            </div>
            <h1 className="font-semibold text-xs lg:text-base text-white">
                {header}
            </h1>
            <p className="max-w-md text-center text-xs lg:text-base font-extralight text-white-65">
                {caption}
            </p>
            <LearnMoreButton
                link={href}
            />
        </div>
    );
};