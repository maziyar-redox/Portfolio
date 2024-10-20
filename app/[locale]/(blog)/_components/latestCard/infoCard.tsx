"use client";

import { FormatDate } from "@/libs/formatDate";

interface InfoCardProps {
    author: string;
    publishedDate: string;
    readingDuration: string;
    tags?: string[];
};

export function InfoCard({
    author,
    publishedDate,
    readingDuration,
    tags
}: InfoCardProps) {
    return (
        <>
            <ul className="flex flex-col md:flex-row items-start justify-between gap-y-4 md:gap-y-0 md:gap-x-3 border border-gray-shade-12 w-full px-4 md:px-8 rounded-xl py-4">
                <li className="flex flex-col items-start justify-center gap-y-1 w-full border-b md:border-b-0 md:border-r border-gray-shade-12 pb-4 md:pb-0">
                    <span className="text-white-shade-50 text-sm font-light">
                        Read Time
                    </span>
                    <h5 className="text-white text-base font-normal">
                        {readingDuration}
                    </h5>
                </li>
                <li className="flex flex-col items-start justify-center gap-y-1 w-full border-b md:border-b-0 md:border-r border-gray-shade-12 pb-4 md:pb-0">
                    <span className="text-white-shade-50 text-sm font-light">
                        Author
                    </span>
                    <h5 className="text-white text-base font-normal">
                        {author}
                    </h5>
                </li>
                <li className="flex flex-col items-start justify-center gap-y-1 w-full border-b md:border-b-0 md:border-r border-gray-shade-12 pb-4 md:pb-0">
                    <span className="text-white-shade-50 text-sm font-light">
                        Published Date
                    </span>
                    <h5 className="text-white text-base font-normal">
                        {FormatDate(publishedDate)}
                    </h5>
                </li>
                <li className="flex flex-col items-start justify-center gap-y-1 w-full">
                    <span className="text-white-shade-50 text-sm font-light">
                        Category
                    </span>
                    <h5 className="text-white text-base font-normal">
                        {tags === undefined && "All"}
                        {tags?.length === 0 ? null : tags?.map(tag => `${tag}, `)}
                    </h5>
                </li>
            </ul>
        </>
    );
};