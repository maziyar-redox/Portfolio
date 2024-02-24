"use client";

import type { VariantProps } from "@/types/client-types";

import { useAnimation, useInView, motion } from "framer-motion";

import { useEffect, useRef } from "react";

export function TextAnimation({
    VisibleHighlightTextAnimation,
    HighlightTextAnimation,
    VisibleCaptionAnimation,
    CaptionAnimation,
    HighlightText,
    Text,
    Caption
}: VariantProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        };
    }, [isInView, mainControls]);
    return (
        <div ref={ref} className="flex flex-col justify-center items-center space-y-2.5 md:space-y-5 overflow-hidden">
            <motion.h1 variants={{
                hidden: HighlightTextAnimation,
                visible: VisibleHighlightTextAnimation
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} className="font-semibold text-2xl md:text-3xl md:max-w-[400px] text-center leading-10">
                <span className="text-red-600">{HighlightText}</span> {Text}
            </motion.h1>
            <motion.p variants={{
                hidden: CaptionAnimation,
                visible: VisibleCaptionAnimation
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=" font-extralight text-white-50 text-xs md:text-base text-center mx-2 w-full md:max-w-[1200px]">
                {Caption}
            </motion.p>
        </div>
    );
};