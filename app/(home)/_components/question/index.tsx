"use client";

import type { AccourditionType } from "@/types/client-types";

import { useAnimation, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

import { Input } from "@/components/ui/input";

import { ModifyingGlass } from "@/components/svg/modifying-glass";

import { QuestionSmaples } from "./question-smaples";

import { TextAnimation } from "@/components/HoveringText";

const itemContainer: AccourditionType = {
    data: [
        {
            ac_id: 1,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            ac_id: 2,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            ac_id: 3,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            ac_id: 4,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
    ]
};

const itemContainer2: AccourditionType = {
    data: [
        {
            ac_id: 1,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            ac_id: 2,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            ac_id: 3,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            ac_id: 4,
            ac_header: "How long does it take to complete a web development project?",
            ac_caption: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
    ]
};

export function Question() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 pb-16 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
            <TextAnimation
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    y: 0
                }}
                HighlightTextAnimation={{
                    opacity: 0,
                    y: 75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    y: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    y: -75
                }}
                HighlightText="Reason to Chose me for"
                Text="Your Developing Projects"
                Caption="Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success."
            />
            <div className="relative">
                <button className="absolute top-1/4 left-2">
                    <ModifyingGlass size={19} />
                </button>
                <Input placeholder="Search..." className="rounded-full bg-gray-10 pl-8 pr-28 focus-visible:ring-0 focus-visible:border-white-90 focus-visible:ring-offset-0" type="text" />
            </div>
            <div className="flex flex-col lg:flex-row w-full px-0 lg:px-20 justify-center lg:space-y-0 space-y-5 lg:justify-between items-center">
                <QuestionSmaples data={itemContainer.data} />
                <QuestionSmaples data={itemContainer2.data} />
            </div>
        </div>
    );
};