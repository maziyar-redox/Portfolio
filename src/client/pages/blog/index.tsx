import { Container } from "@/client/components/zippystarter/container";
import { useGetApi } from "@/client/core/hooks/useGetApi";

import BlogSkeleton from "@/client/pages/blog/components/skeleton";

import { Markdown } from "@tanstack/markdown/react";

function Component() {
    const { data, isLoading } = useGetApi({
        endpoint: "/dl",
        params: {},
        options: {},
        cacheKey: "some"
    });

    if (isLoading) {
        return (
            <BlogSkeleton />
        );
    };

    return (
        <Container id="Article-Blog" className="typeset typeset-docs py-24 border-t border-border max-w-7xl mx-auto" component="article">
            <Markdown>
                {data}
            </Markdown>
        </Container>
    );
};

export {
    Component,
};