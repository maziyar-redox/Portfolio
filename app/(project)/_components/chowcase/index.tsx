import { TextAnimation } from "@/components/HoveringText";

import { Unity } from "@/components/svg/unity";
import { ArrowSmallUp } from "@/components/svg/Arrow-Up";

import { Card } from "./card";
import { CardImage } from "./card-image";
import { CardTag } from "./card-tag";
import { CardDescription } from "./card-description";

export function ShowCase() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 md:mt-0 space-y-8 lg:space-y-16 max-w-5xl mx-auto">
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
                HighlightText="Projects"
                Text="Showcase"
                Caption="Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."
            />
            <Card>
                <div className="relative">
                    <CardImage />
                    <div className="top-0 bottom-0 absolute right-0 left-0 bg-gradient-to-t from-gray-6 from-15% to-transparent" />
                </div>
                <div className="flex sm:flex-row flex-col-reverse justify-center sm:justify-between items-center w-full gap-y-4 sm:gap-y-0">
                    <h1 className="text-white text-lg font-medium self-start">
                        E-Commerce Revolution
                    </h1>
                    <button className="flex flex-row justify-center items-center gap-x-2.5">
                        <span className="text-gray-40 font-normal text-sm">
                            show less
                        </span>
                        <span className="border border-gray-15 p-3 rounded-full bg-gray-10">
                            <ArrowSmallUp size={12} />
                        </span>
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-y-0 sm:gap-x-2.5 mt-2.5">
                    <CardTag
                        icon={<Unity size={20} />}
                        head="E-commerce"
                    />
                    <CardTag
                        icon={<Unity size={20} />}
                        head="E-commerce"
                    />
                    <CardTag
                        icon={<Unity size={20} />}
                        head="E-commerce"
                    />
                </div>
                <CardDescription>
                    <div className="flex flex-row justify-center items-center border border-gray-12 rounded-xl w-full px-3 sm:px-9 py-3 sm:py-5 mt-8">
                        <div className="flex flex-row justify-between items-start w-full border-r border-gray-12 mr-6">
                            <div className="flex flex-col justify-center items-start gap-y-1">
                                <span className="text-white-55 font-light text-sm">
                                    Category
                                </span>
                                <h1 className="text-white font-light text-base">
                                    E-commerce
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full border-r border-gray-12 mr-6">
                            <div className="flex flex-col justify-center items-start gap-y-1">
                                <span className="text-white-55 font-light text-sm">
                                    Time Taken
                                </span>
                                <h1 className="text-white font-light text-base">
                                    4 Months
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full border-r border-gray-12 mr-6">
                            <div className="flex flex-col justify-center items-start gap-y-1">
                                <span className="text-white-55 font-light text-sm">
                                    Start Date
                                </span>
                                <h1 className="text-white font-light text-base">
                                    January 15, 2023
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full">
                            <div className="flex flex-col justify-center items-start gap-y-1">
                                <span className="text-white-55 font-light text-sm">
                                    Completed Date
                                </span>
                                <h1 className="text-white font-light text-base">
                                    May 15, 2023
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------ */}
                    <div className="flex flex-row justify-start items-center border border-gray-12 rounded-xl w-full px-3 sm:px-9 py-3 sm:py-5 mt-3 gap-x-6">
                        <h1 className="text-white font-light text-base">
                            Technologies used
                        </h1>
                        <span className="border border-gray-15 p-3 rounded-full bg-gray-10">
                            <Unity size={18} />
                        </span>
                        <span className="border border-gray-15 p-3 rounded-full bg-gray-10">
                            <Unity size={18} />
                        </span>
                        <span className="border border-gray-15 p-3 rounded-full bg-gray-10">
                            <Unity size={18} />
                        </span>
                        <span className="border border-gray-15 p-3 rounded-full bg-gray-10">
                            <Unity size={18} />
                        </span>
                    </div>
                    {/* ------------------------------ */}
                    <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl w-full gap-y-4 px-3 sm:px-9 py-3 sm:py-5 mt-3 gap-x-6">
                        <h1 className="text-white font-light text-base">
                            Team Members
                        </h1>
                        <div className="flex flex-row justify-between items-center w-full gap-x-4">
                            <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl px-6 pt-5 pb-3.5 w-full">
                                <h1 className="text-white font-light text-base">
                                    Web Developer
                                </h1>
                                <div className="flex flex-row justify-center items-center mt-5 gap-x-2">
                                    <img src="/img/4.jpg" className="w-10 h-10 rounded-full border border-gray-12 object-cover object-center" alt="programmer" />
                                    <span className="text-white font-light text-sm">
                                        Jhon Smith
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl px-6 pt-5 pb-3.5 w-full">
                                <h1 className="text-white font-light text-base">
                                    UI UX Designer
                                </h1>
                                <div className="flex flex-row justify-center items-center mt-5 gap-x-2">
                                    <img src="/img/4.jpg" className="w-10 h-10 rounded-full border border-gray-12 object-cover object-center" alt="programmer" />
                                    <span className="text-white font-light text-sm">
                                        Jhon Smith
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl px-6 pt-5 pb-3.5 w-full">
                                <h1 className="text-white font-light text-base">
                                    Project Manager
                                </h1>
                                <div className="flex flex-row justify-center items-center mt-5 gap-x-2">
                                    <img src="/img/4.jpg" className="w-10 h-10 rounded-full border border-gray-12 object-cover object-center" alt="programmer" />
                                    <span className="text-white font-light text-sm">
                                        Jhon Smith
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl w-full gap-y-4 px-3 sm:px-9 py-3 sm:py-5 mt-3 gap-x-6">
                        <h1 className="text-white font-light text-base">
                            Method used
                        </h1>
                        ff
                    </div> */}
                </CardDescription>
            </Card>
            <Card>
                <div className="relative">
                    <CardImage />
                    <div className="top-0 bottom-0 absolute right-0 left-0 bg-gradient-to-t from-gray-6 from-15% to-transparent" />
                </div>
                <div className="flex sm:flex-row flex-col-reverse justify-center sm:justify-between items-center w-full gap-y-4 sm:gap-y-0">
                    <h1 className="text-white text-lg font-medium self-start">
                        E-Commerce Revolution
                    </h1>
                    <button className="flex flex-row justify-center items-center gap-x-2.5">
                        <span className="text-gray-40 font-normal text-sm">
                            show less
                        </span>
                        <span className="border border-gray-15 p-3 rounded-full bg-gray-10">
                            <ArrowSmallUp size={12} />
                        </span>
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-y-0 sm:gap-x-2.5 mt-2.5">
                    <CardTag
                        icon={<Unity size={20} />}
                        head="E-commerce"
                    />
                    <CardTag
                        icon={<Unity size={20} />}
                        head="E-commerce"
                    />
                    <CardTag
                        icon={<Unity size={20} />}
                        head="E-commerce"
                    />
                </div>
                <CardDescription></CardDescription>
            </Card>
        </div>
    );
};