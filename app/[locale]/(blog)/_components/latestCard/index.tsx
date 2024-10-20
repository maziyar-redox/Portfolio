import { Card } from "./card";
import { Info } from "./info";

interface LatestCardProps {
    title: string;
    description: string;
    slug: string;
    isCover: boolean;
    coverUrl: string;
    author: string;
    publishedDate: string;
    body: string;
    tags?: string[];
};

export function LatestCard({
    title,
    description,
    slug,
    isCover,
    coverUrl,
    author,
    publishedDate,
    body,
    tags
}: LatestCardProps) {
    return (
        <>
            <div className="grid grid-cols-4 mx-0 md:mx-10 gap-y-8 md:gap-x-10">
                <Card
                    imageUrl={coverUrl}
                    isImageUrl={isCover}
                />
                <Info
                    title={title}
                    description={description}
                    slug={slug}
                    author={author}
                    publishedDate={publishedDate}
                    body={body}
                    tags={tags}
                />
            </div>
        </>
    );
};