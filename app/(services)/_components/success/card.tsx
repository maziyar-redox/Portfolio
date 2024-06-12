"use client";

import { motion, useAnimation, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

import { CategoryCard } from "./category-card";

import { Separator } from "@/components/ui/separator";

import "@/app/_components/css/style.css";

import { SuccessCardProps } from "@/types/client-types";

import Link from "next/link";

export function Card({
    MainIcon,
    head,
    categoryCardItems,
    challengeCaption,
    SolutionCaption
}: SuccessCardProps) {
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
    return (
        <div ref={ref} className="flex flex-col justify-center items-start w-full rounded-xl border border-gray-12 px-4 md:px-8 py-8 gap-y-2 md:gap-y-3.5">
            <div className="flex flex-row justify-center items-center gap-x-2.5">
                <span className="relative">
                    <div>
                        <motion.svg
                            style={{
                                filter: "drop-shadow(0 0 4px #dc2626)"
                            }}
                            width={55}
                            height={55}
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
                    <div className="absolute top-[14px] left-[14px]">
                        {MainIcon}
                    </div>
                </span>
                <h1 className="font-semibold text-white text-lg md:text-xl">
                    {head}
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-1.5 md:space-y-0 md:space-x-1">
                {categoryCardItems.map((items) => (
                    <CategoryCard
                        key={items.head}
                        icon={items.icon}
                        head={items.head}
                    />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center border border-gray-15 rounded-xl px-5 mt-5 md:mt-0">
                <div className="flex flex-col justify-center items-start py-6 gap-y-2">
                    <h1 className="font-light text-base text-white">
                        Challenge
                    </h1>
                    <p className="font-light text-white-55 text-sm">
                        {challengeCaption}
                    </p>
                </div>
                <Separator />
                <div className="flex flex-col justify-center items-start py-6 gap-y-2">
                    <h1 className="font-light text-base text-white">
                        Solution
                    </h1>
                    <p className="font-light text-white-55 text-sm">
                        {SolutionCaption}
                    </p>
                    <Link href="/" className="font-light text-xs underline text-white">
                        Read Full Story
                    </Link>
                </div>
            </div>
        </div>
    );
};