import { posts } from "#site/content";
import { HeroWrapper } from "@/components/hero-wrapper";
import { Main } from "@/components/main";
import { SortPosts } from "@/libs/sortPosts";

import { LatestCard } from "../_components/latestCard";
import { BlogCard } from "../_components/blogCard";
import { QueryPagination } from "../_components/pagination";
import { getAllTags, sortTagsByCount } from "@/libs/tags";
import { TagButton } from "../_components/tags";

const POSTS_PER_PAGE = 4;

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const sortedPosts = SortPosts(posts.filter((post) => post.published));
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage
    );
    const latestPost = sortedPosts[0];
    const tags = getAllTags(posts);
    const sortedTags = sortTagsByCount(tags);
    return (
        <>
            <Main mode="onlyText" />
            <HeroWrapper>
                {displayPosts.length !== 0 ? (
                    <TagButton tags={sortedTags} />
                ) : null}
                {displayPosts.length === 0 ? (
                    <div className="flex items-center justify-center py-24">
                        <h1 className="text-4xl text-center">
                            Requested page does not exist!
                        </h1>
                    </div>
                ) : (
                    <LatestCard
                        author={latestPost.author}
                        title={latestPost.title}
                        description={latestPost.description as string}
                        publishedDate={latestPost.date}
                        slug={latestPost.slug}
                        isCover={latestPost.isCover}
                        coverUrl={latestPost.coverUrl as string}
                        body={latestPost.body}
                        tags={latestPost.tags}
                    />
                )}
                {displayPosts.length === 0 ? null : (
                    <BlogCard
                        postsData={displayPosts}
                    />
                )}
                {displayPosts.length === 0 ? null : (
                    <QueryPagination
                        totalPages={totalPages}
                        className="justify-center py-4"
                    />
                )}
            </HeroWrapper>
        </>
    );
};