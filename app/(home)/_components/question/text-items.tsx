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
        <div ref={ref} className="flex flex-col justify-center items-center space-y-2.5 md:space-y-5 overflow-hidden">
            <motion.h1 variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} className="font-semibold text-2xl md:text-3xl md:max-w-[400px] text-center leading-10">
                <span className="text-red-600">Frequently</span> Asked Questions
            </motion.h1>
            <motion.p variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=" font-extralight text-white-50 text-xs md:text-base text-center mx-2 w-full md:max-w-[1200px]">
                Got questions? We&apos;ve got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
            </motion.p>
        </div>
    );
};