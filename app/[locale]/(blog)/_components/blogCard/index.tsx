import { posts } from "#site/content";

import { CardContainer } from "./container";

type CardContainerProps = {
    postsData: typeof posts;
};

export function BlogCard({
    postsData,
}: CardContainerProps) {
    return (
        <>
            <div className="grid grid-cols-2 mx-0 md:mx-10 py-14 gap-6 md:gap-10">
                {postsData.map(item => (
                    <CardContainer
                        key={item.slug}
                        title={item.title}
                        description={item.description as string}
                        author={item.author}
                        imageUrl={item.coverUrl as string}
                        isImageUrl={item.isCover}
                        publishedDate={item.date}
                        slug={item.slug}
                        body={item.body}
                    />
                ))}
            </div>
        </>
    );
};