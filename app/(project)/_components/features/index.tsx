"use client";

import { LightBulb } from "@/components/svg/light-bulb";
import { CursorArrow } from "@/components/svg/cursor-arrow";
import { DevicePhone } from "@/components/svg/device-phone";
import { Bolt } from "@/components/svg/bolt";
import { SquaresPlus } from "@/components/svg/squares-plus";
import { SparklesFunction } from "@/components/svg/sparkles";

import { Separator } from "@/components/ui/separator";

import { Cards } from "./cards";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { TextAnimation } from "@/components/HoveringText";

const FeaturesData = [
    {
        id: 1,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/services",
        icon: <SparklesFunction size={30} />
    },
    {
        id: 2,
        header: "Tailored Business Solutions",
        caption: "We understand that every business is unique. That's why our solutions are customized.",
        href: "/services",
        icon: <LightBulb size={30} />
    },
    {
        id: 3,
        header: "Cutting-Edge Web Design",
        caption: "Leave a lasting impression on your audience with our top-notch web design services.",
        href: "/services",
        icon: <CursorArrow size={30} />
    }
];

const FeaturesData2 = [
    {
        id: 1,
        header: "Mobile-First Approach",
        caption: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
        href: "/services",
        icon: <DevicePhone size={30} />
    },
    {
        id: 2,
        header: "Marketing Strategies",
        caption: "Our data-driven marketing strategies allow us to target the right audience with precision.",
        href: "/services",
        icon: <Bolt size={30} />
    },
    {
        id: 3,
        header: "Search Engine Optimization",
        caption: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
        href: "/services",
        icon: <SquaresPlus size={30} />
    },
];

export function Features() {
    const matches = useMediaQuery('(max-width: 1024px)');
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 md:mt-0 space-y-8 lg:space-y-16">
            <TextAnimation
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    x: 0
                }}
                HighlightTextAnimation={{
                    opacity: 0,
                    x: 75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    x: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    x: -75
                }}
                HighlightText="Reason to Chose me for"
                Text="Your Developing Projects"
                Caption="Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success."
            />
            <div>
                <div className={cn(
                    "grid",
                    matches ? "grid-cols-1 gap-y-8" : "grid-cols-3 gap-x-4"
                )}>
                    {FeaturesData.map((items) => (
                        <Cards
                            id={items.id}
                            key={items.id}
                            header={items.header}
                            caption={items.caption}
                            icon={items.icon}
                            href={items.href}
                        />
                    ))}
                </div>
                <Separator
                    className="my-10 bg-gray-12"
                    orientation="horizontal"
                />
                <div className={cn(
                    "grid lg:pt-0",
                    matches ? "grid-cols-1 gap-y-8" : "grid-cols-3 gap-x-4"
                )}>
                    {FeaturesData2.map((items) => (
                        <Cards
                            id={items.id}
                            key={items.id}
                            header={items.header}
                            caption={items.caption}
                            icon={items.icon}
                            href={items.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};