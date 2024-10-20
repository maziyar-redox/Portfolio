"use client";

import { Logo } from "@/components/logo";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { FooterIcons } from "./icons";
import { Links } from "./links";

import { Separator } from "@/components/ui/separator";

import { headers } from "@/data";

import Link from "next/link";

import { useMediaQuery } from "usehooks-ts";

export function Footer() {
    const matches = useMediaQuery('(max-width: 1024px)');
    return (
        <footer className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-4">
            <div className="flex flex-row justify-between items-center w-full">
                <Logo />
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-3 space-y-3 sm:space-y-0">
                    <h1 className="font-light text-xs sm:text-sm text-absolute-white">
                        Follow me on social media
                    </h1>
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <FooterIcons
                            icons={<FaSquareXTwitter size={matches ? 19 : 24} />}
                            link="/"
                        />
                        <FooterIcons
                            icons={<FaSquareInstagram size={matches ? 19 : 24} />}
                            link="/"
                        />
                        <FooterIcons
                            icons={<FaLinkedin size={matches ? 19 : 24} />}
                            link="/"
                        />
                        <FooterIcons
                            icons={<FaTelegram size={matches ? 19 : 24} />}
                            link="/"
                        />
                    </div>
                </div>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-y-10 justify-items-center md:justify-items-start place-items-start md:grid-cols-3 md:gap-y-10 lg:gap-y-0 lg:grid-cols-6 w-full md:py-10">
                <Links data={headers.data} />
            </div>
            <Separator />
            <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:justify-between items-center w-full pb-3">
                <h1 className="text-xs text-gray-shade-40">
                    @2024 Maziyar Isanezhad. All Rights Reserved.
                </h1>
                <h1 className="text-xs text-gray-shade-40 font-mono border rounded-full p-0.5 px-1">
                    version 0.0.4
                </h1>
                <div className="flex flex-row justify-center items-center space-x-2 sm:space-x-5">
                    <Link href="/" className="text-xs text-gray-shade-40 font-light">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-xs text-gray-shade-40 font-light">
                        Terms  & Conditions
                    </Link>
                    <Link href="/" className="text-xs text-gray-shade-40 font-light">
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};