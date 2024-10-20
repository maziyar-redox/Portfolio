"use client";

import Image from "next/image";

interface CardProps {
    imageUrl: string | undefined;
    isImageUrl: boolean;
};

export function Card({
    imageUrl,
    isImageUrl
}: CardProps) {
    const defaultImage = "https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/blog.png";
    return (
        <>
            <div className="border border-gray-10 bg-gray-shade-12/20 flex flex-col justify-center items-center rounded-xl p-1.5 md:p-4 w-full">
                <Image priority={true} src={isImageUrl ? imageUrl as string : defaultImage as string} alt="" width={572} height={289} className="rounded-xl w-full" />
            </div>
        </>
    );
};