"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function TextItems() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        };
    }, [isInView]);
    return (
        <div ref={ref} className="flex flex-col justify-center items-center space-y-2.5 md:space-y-5 overflow-x-hidden">
            <motion.h1 variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} className="font-semibold text-2xl md:text-3xl md:max-w-[400px] text-center leading-10">
                <span className="text-red-600">My</span> Services
            </motion.h1>
            <motion.p variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=" font-extralight text-white-50 text-xs md:text-base text-center mx-2 w-full md:max-w-[1200px]">
                Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you&apos;re a startup or an established enterprise, our experts will craft solutions that drive results.
            </motion.p>
        </div>
    );
};