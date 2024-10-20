"use client";

import { Button } from "@/components/ui/button";

import readingDuration from "reading-duration";

import { Card } from "./card";
import { Description } from "./description";
import { InfoSection } from "./info";

import { useRouter } from "@/i18n/routing";

interface CardContainerProps {
    imageUrl: string;
    isImageUrl: boolean;
    title: string;
    description: string;
    author: string;
    publishedDate: string;
    body: string;
    slug: string;
};

export function CardContainer({
    imageUrl,
    isImageUrl,
    title,
    description,
    author,
    body,
    publishedDate,
    slug
}: CardContainerProps) {
    const duration = readingDuration(body, {
        wordsPerMinute: 150,
        emoji: false
    });
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1 gap-y-5">
            <Card
                imageUrl={imageUrl}
                isImageUrl={isImageUrl}
            />
            <InfoSection
                author={author}
                publishedDate={publishedDate}
                readingDuration={duration}
            />
            <Description
                title={title}
                description={description}
            />
            <div className="flex items-center justify-center">
                <Button variant="border" onClick={() => {
                    router.push(slug);
                }}>
                    Read More
                </Button>
            </div>
        </div>
    );
};