"use client";

import { Logo } from "@/components/logo";

import { Twitter } from "@/components/svg/twitter";
import { Instagram } from "@/components/svg/instagram-icon";
import { LinkedIn } from "@/components/svg/linkedin";

import { FooterIcons } from "./icons";
import { Links } from "./links";

import { Separator } from "@/components/ui/separator";

import type { FooterLinksType } from "@/types/client-types";

import Link from "next/link";

const headers: FooterLinksType = {
    data: [
        {
            Header_id: 1,
            text: "Home",
            links: [
                {
                    Link_id: 1,
                    text: "Benefits",
                    href: "/benefits"
                },
                {
                    Link_id: 2,
                    text: "Our Testimonials",
                    href: "/testimonials"
                },
                {
                    Link_id: 3,
                    text: "Partners",
                    href: "/partners"
                },
            ],
        },
        {
            Header_id: 2,
            text: "Services",
            links: [
                {
                    Link_id: 1,
                    text: "Web Design",
                    href: "/web"
                },
                {
                    Link_id: 2,
                    text: "Website Development",
                    href: "/benefits"
                },
                {
                    Link_id: 3,
                    text: "App Development",
                    href: "/benefits"
                },
                {
                    Link_id: 4,
                    text: "Digital Marketing",
                    href: "/benefits"
                },
            ],
        },
        {
            Header_id: 3,
            text: "Projects",
            links: [
                {
                    Link_id: 1,
                    text: "Web Design",
                    href: "/web"
                },
                {
                    Link_id: 2,
                    text: "Website Development",
                    href: "/benefits"
                },
                {
                    Link_id: 3,
                    text: "App Development",
                    href: "/benefits"
                },
                {
                    Link_id: 4,
                    text: "Digital Marketing",
                    href: "/benefits"
                },
            ],
        },
        {
            Header_id: 4,
            text: "About us",
            links: [
                {
                    Link_id: 1,
                    text: "Web Design",
                    href: "/web"
                },
                {
                    Link_id: 2,
                    text: "Website Development",
                    href: "/benefits"
                },
                {
                    Link_id: 3,
                    text: "App Development",
                    href: "/benefits"
                },
                {
                    Link_id: 4,
                    text: "Digital Marketing",
                    href: "/benefits"
                },
            ],
        },
        {
            Header_id: 5,
            text: "Careers",
            links: [
                {
                    Link_id: 1,
                    text: "Web Design",
                    href: "/web"
                },
                {
                    Link_id: 2,
                    text: "Website Development",
                    href: "/benefits"
                },
                {
                    Link_id: 3,
                    text: "App Development",
                    href: "/benefits"
                },
                {
                    Link_id: 4,
                    text: "Digital Marketing",
                    href: "/benefits"
                },
            ],
        },
        {
            Header_id: 6,
            text: "Blogs",
            links: [
                {
                    Link_id: 1,
                    text: "Web Design",
                    href: "/web"
                },
                {
                    Link_id: 2,
                    text: "Website Development",
                    href: "/benefits"
                },
                {
                    Link_id: 3,
                    text: "App Development",
                    href: "/benefits"
                },
                {
                    Link_id: 4,
                    text: "Digital Marketing",
                    href: "/benefits"
                },
            ],
        },
    ],
};

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-4">
            <div className="flex flex-row justify-between items-center w-full">
                <Logo />
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-3 space-y-3 sm:space-y-0">
                    <h1 className="font-light text-xs sm:text-sm text-white">
                        Follow me on social media
                    </h1>
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <FooterIcons
                            icon={<Twitter size={24} />}
                            href="/"
                        />
                        <FooterIcons
                            icon={<Instagram size={24} />}
                            href="/"
                        />
                        <FooterIcons
                            icon={<LinkedIn size={24} />}
                            href="/"
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
                <h1 className="text-xs text-gray-40">
                    @2024 Maziyar Isanezhad. All Rights Reserved.
                </h1>
                <h1 className="text-xs text-gray-40">
                    version 0.1
                </h1>
                <div className="flex flex-row justify-center items-center space-x-5">
                    <Link href="/" className="text-xs text-gray-40 font-light">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-xs text-gray-40 font-light">
                        Terms  & Conditions
                    </Link>
                    <Link href="/" className="text-xs text-gray-40 font-light">
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};