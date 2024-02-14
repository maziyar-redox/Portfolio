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
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} className="font-semibold text-2xl md:text-3xl md:max-w-[400px] text-center leading-10">
                <span className="text-red-600">My</span> Works
            </motion.h1>
            <motion.p variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=" font-extralight text-white-50 text-xs md:text-base text-center mx-2 w-full md:max-w-[1200px]">
                Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we&apos;ve had with diverse clients across various industries. Let our work speak for itself.
            </motion.p>
        </div>
    );
};