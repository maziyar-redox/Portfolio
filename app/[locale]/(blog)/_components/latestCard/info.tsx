"use client";

import { useRouter } from "@/i18n/routing";
import { InfoCard } from "./infoCard";

import ReadingDuration from "reading-duration";

interface InfoProps {
    title: string;
    description: string;
    slug: string;
    author: string;
    publishedDate: string;
    body: string;
    tags?: string[];
};

export function Info({
    title,
    description,
    slug,
    author,
    publishedDate,
    body,
    tags
}: InfoProps) {
    const router = useRouter();
    const duration = ReadingDuration(body, {
        wordsPerMinute: 150,
        emoji: false
    });
    return (
        <>
            <div className="flex flex-col justify-center items-start gap-y-5 col-span-4 lg:col-span-2">
                <h1 className="text-white font-medium text-lg md:text-xl">
                    {title}
                </h1>
                <p className="text-white-shade-55 font-light text-xs md:text-base">
                    <span>
                        {description}
                    </span>
                    <button className="text-white" onClick={() => {
                        router.push(slug);
                    }}>
                        Read More...
                    </button>
                </p>
                <InfoCard
                    author={author}
                    publishedDate={publishedDate}
                    readingDuration={duration}
                    tags={tags}
                />
            </div>
        </>
    );
};