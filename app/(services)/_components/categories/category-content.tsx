"use client";

import { CategoryContentProps } from "@/types/client-types";

import { cn } from "@/lib/utils";

import { ActiveStore } from "@/store/use-active";

import { useAnimation, useInView, motion } from "framer-motion";

import { useEffect, useRef } from "react";

import { Separator } from "@/components/ui/separator";

import { ProjectDetail } from "./projectDetail-button";
import { CategoryCard } from "./category-card";
import { CategoryTable } from "./category-table";

export function CategoryContent({
    CategoryId,
    CategoryHeader,
    CategoryCaption,
    CategoryFeatures,
    CategoryDProcess
}: CategoryContentProps) {
    const { activeItem } = ActiveStore((state) => state);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start(activeItem === CategoryId ? "visible" : "hidden");
        };
    }, [isInView, mainControls, activeItem, CategoryId]);
    return (
        <div ref={ref} id={CategoryId} className={cn(
            "flex-col justify-center items-center w-full md:mx-10 gap-y-2.5 overflow-hidden",
            CategoryId === activeItem ? "flex" : "hidden"
        )}>
            <motion.h1 variants={{
                hidden: {
                    opacity: 0,
                    x: 100
                },
                visible: {
                    opacity: 1,
                    x: 0
                }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} className="font-semibold text-white text-base md:text-2xl text-start w-full">
                {CategoryHeader}
            </motion.h1>
            <motion.p variants={{
                hidden: {
                    opacity: 0,
                    x: 100
                },
                visible: {
                    opacity: 1,
                    x: 0
                }
            }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className="text-white-55 text-xs md:text-sm text-start font-normal w-full">
                {CategoryCaption}
            </motion.p>
            <CategoryCard
                transition={0.5}
                mainControls={mainControls}
                isCaption={false}
                header="Key Features"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 pt-12 pb-8 gap-y-4 md:gap-y-8">
                    {CategoryFeatures.map((items) => (
                        <>
                            <div key={items.Id} className={cn(
                                "col-span-1 flex flex-col justify-center items-start space-y-2 pr-3 md:pr-6 md:py-5",
                                items.Id === 1 || items.Id === 3 ? "md:border-r border-gray-12" : "md:pl-8",
                            )}>
                                <h1 className="text-sm md:text-base text-white-80 font-semibold">
                                    {items.Header}
                                </h1>
                                <p className="text-white-55 font-normal text-xs md:text-sm">
                                    {items.Caption}
                                </p>
                            </div>
                            {items.Id === 2 && (
                                <Separator className="col-span-2 md:block hidden" />
                            )}
                            {items.Id === 1 && (
                                <Separator className="col-span-1 md:hidden block" />
                            )}
                            {items.Id === 2 && (
                                <Separator className="col-span-1 md:hidden block" />
                            )}
                            {items.Id === 3 && (
                                <Separator className="col-span-1 md:hidden block" />
                            )}
                        </>
                    ))}
                </div>
            </CategoryCard>
            <CategoryCard
                transition={1.5}
                mainControls={mainControls}
                isCaption
                header="Design Process"
                caption="Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here&apos;s an overview of our design process."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-12 pb-8 gap-y-4 md:gap-y-8">
                    {CategoryDProcess.map((items) => (
                        <>
                            <div key={items.Id} className={cn(
                                "col-span-1 flex flex-col justify-center items-start space-y-2 pr-3 md:pr-6 md:py-5",
                                items.Id === 1 || items.Id === 3 ? "md:border-r border-gray-12" : "md:pl-8",
                            )}>
                                <h1 className="text-sm md:text-base text-white-80 font-semibold">
                                    {items.Header}
                                </h1>
                                <p className="text-white-55 font-normal text-xs md:text-sm">
                                    {items.Caption}
                                </p>
                            </div>
                            {items.Id === 2 && (
                                <Separator className="col-span-2 md:block hidden" />
                            )}
                            {items.Id === 1 && (
                                <Separator className="col-span-1 md:hidden block" />
                            )}
                            {items.Id === 2 && (
                                <Separator className="col-span-1 md:hidden block" />
                            )}
                            {items.Id === 3 && (
                                <Separator className="col-span-1 md:hidden block" />
                            )}
                        </>
                    ))}
                </div>
            </CategoryCard>
            <CategoryCard
                transition={2.5}
                mainControls={mainControls}
                isCaption
                header="Web Design Porfolio"
                caption="Check out some of our most recent Web Design projects in the table below."
            >
                <div className="flex flex-row justify-between items-center gap-x-3 md:gap-x-6 mt-5 md:mt-10 mb-16 md:mb-0 relative">
                    <div className="container px-0">
                        {/* eslint-disable-next-line */}
                        <img src="/img/3.jpg" className="object-cover object-center border border-gray-12 rounded-lg" alt="programming" />
                    </div>
                    <div className="container px-0">
                        {/* eslint-disable-next-line */}
                        <img src="/img/3.jpg" className="object-cover object-center border border-gray-12 rounded-lg" alt="programming" />
                    </div>
                    <div className="top-0 bottom-0 absolute right-0 left-0 bg-gradient-to-t from-gray-6 from-15% to-transparent" />
                    <div className="absolute left-0 right-0 flex items-center justify-center -bottom-10 md:bottom-20">
                        <ProjectDetail href="/services" />
                    </div>
                </div>
            </CategoryCard>
            <CategoryCard
                transition={3.5}
                mainControls={mainControls}
                isCaption
                header="Our Web Design Competed Projects"
                caption="At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences."
            >
                <CategoryTable />
            </CategoryCard>
        </div>
    );
};