"use client";

import { HandRised } from "@/components/svg/hand-rised";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <>
            <div className="flex flex-col h-screen justify-center space-y-8 overflow-hidden">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        type: "spring",
                        stiffness: 400
                    }}
                    className="flex items-center justify-center max-w-xs mx-auto"
                >
                    <HandRised
                        size={100}
                        color="#dc2626"
                    />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        type: "spring",
                        stiffness: 400
                    }}
                    className="flex flex-col space-y-5 items-center justify-center max-w-xs mx-auto"
                >
                    <h1 className="text-white text-base md:text-xl font-medium">
                        Requested page is not found
                    </h1>
                    <div className="border-2 border-gray-12 rounded-full px-2 py-1 flex flex-row space-x-2 items-center justify-center">
                        <h1 className="font-normal text-white text-xs lg:text-sm">
                            REQUESTED PATH :
                        </h1>
                        <span className="border rounded-full px-5 py-2 text-white text-xs lg:text-base">
                            {pathname}
                        </span>
                    </div>
                </motion.div>
            </div>
        </>
    );
};