"use client";

import { motion } from "framer-motion";

import { HiHandRaised } from "react-icons/hi2";

import Document from "@/components/root/document";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <Document>
            <main className="flex flex-col h-screen justify-center space-y-8 overflow-hidden">
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
                    <HiHandRaised className="text-red-shade-1" size={100} />
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
                    className="flex flex-col space-y-5 items-center justify-center max-w-sm mx-auto"
                >
                    <h1 className="text-base md:text-xl font-medium">
                        Requested page is not found
                    </h1>
                    <div className="border rounded-full pl-4 px-2 py-1 flex flex-row space-x-2 items-center justify-center">
                        <h1 className="font-normal text-xs lg:text-sm">
                            REQUESTED PATH :
                        </h1>
                        <span className="border rounded-full px-5 py-2 text-xs lg:text-sm">
                            {pathname}
                        </span>
                    </div>
                </motion.div>
            </main>
        </Document>
    );
};