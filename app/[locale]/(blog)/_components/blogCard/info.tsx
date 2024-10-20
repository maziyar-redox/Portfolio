"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "@/i18n/routing";
import { FormatDate } from "@/libs/formatDate";

import { CiClock2 } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

interface InfoSectionProps {
    author: string;
    readingDuration: string;
    publishedDate: string;
};

export function InfoSection({
    author,
    readingDuration,
    publishedDate
}: InfoSectionProps) {
    const githubUrl = `https://avatars.githubusercontent.com/${author}`;
    const githubProfile = `https://github.com/${author}`;
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-y-3 md:gap-y-0">
            <Link href={githubProfile} target="_blank">
                <div className="flex flex-row justify-center items-center gap-x-2">
                    <Avatar>
                        <AvatarImage src={githubUrl} />
                        <AvatarFallback>
                            {author}
                        </AvatarFallback>
                    </Avatar>
                    <span className="text-white font-normal text-sm">
                        {author}
                    </span>
                </div>
            </Link>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <div className="border border-gray-shade-12 rounded-full p-1.5 px-2 inline-flex gap-x-1.5 justify-center items-center">
                    <CiClock2 size={19} className="text-white-shade-55" />
                    <span className="text-white-shade-55 text-sm font-normal">
                        {readingDuration}
                    </span>
                </div>
                <div className="border border-gray-shade-12 rounded-full p-1.5 px-2 inline-flex gap-x-1.5 justify-center items-center">
                    <IoCalendarOutline size={19} className="text-white-shade-55" />
                    <span className="text-white-shade-55 text-sm font-normal">
                        {FormatDate(publishedDate)}
                    </span>
                </div>
            </div>
        </div>
    );
};