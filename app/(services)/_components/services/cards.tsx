"use client";

import type { CardProps } from "@/types/client-types";

import { motion, useAnimation, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

import { LearnMoreButton } from "./learnmore-button";

import { useMediaQuery } from "usehooks-ts";

import "../css/style.css";

export function Card({
    header,
    href,
    icon,
    caption,
    price
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
        <div ref={ref} className="border border-gray-10 bg-gray-12/20 flex flex-col justify-center items-center rounded-2xl col-span-1">
            <div className="relative my-12">
                <div>
                    <motion.svg
                        style={{
                            filter: "drop-shadow(0 0 4px #dc2626)"
                        }}
                        width={115}
                        height={115}
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
                <div className="absolute top-[15px] left-[15px]">
                <motion.svg
                        style={{
                            filter: "drop-shadow(0 0 4px #dc2626)"
                        }}
                        width={85}
                        height={85}
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
                            custom={0.5}
                        />
                    </motion.svg>
                </div>
                <div className="absolute top-[30px] left-[30px]">
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
                            custom={1}
                        />
                    </motion.svg>
                </div>
                <div className="absolute top-[42px] right-[42px]">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center max-w-xl pb-12 space-y-2.5">
                <h1 className="text-white font-semibold text-sm md:text-lg">
                    {header}
                </h1>
                <p className="text-white-55 font-light text-xs md:text-sm text-center px-6 md:px-0">
                    {caption}
                </p>
                <div className="flex flex-row justify-between items-center pt-6 w-full md:px-0 px-3">
                    <h1 className="text-gray-40 text-xs md:text-sm font-normal text-wrap leading-5">
                        Starts at Price : <span className="text-white">{price}</span>
                    </h1>
                    <LearnMoreButton
                        link={href}
                    />
                </div>
            </div>
        </div>
    );
};