"use client";

import { cn } from "@/lib/utils";

import { CategoryComponent } from "@/types/client-types";

import { motion } from "framer-motion";

export function CategoryCard({
    classNames,
    children,
    isCaption,
    header,
    caption,
    mainControls,
    transition
}: CategoryComponent) {
    return (
        <motion.div variants={{
            hidden: {
                opacity: 0,
                x: 100
            },
            visible: {
                opacity: 1,
                x: 0
            }
        }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: transition }} className={cn(
            "flex flex-col justify-center items-start border border-gray-12 rounded-xl w-full px-6 md:px-9 pt-6 md:pt-8 mt-2 md:mt-9",
            classNames
        )}>
            {isCaption
                ?
                <div className="flex flex-col space-y-2.5">
                    <h1 className="text-white text-base md:text-xl font-semibold">
                        {header}
                    </h1>
                    <p className="text-white-50 font-normal text-xs md:text-sm">
                        {caption}
                    </p>
                </div>
                :
                <h1 className="text-white text-base md:text-xl font-semibold">
                    {header}
                </h1>
            }
            {children}
        </motion.div>
    );
};