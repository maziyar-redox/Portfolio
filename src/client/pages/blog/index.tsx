import { Container } from "@/client/components/zippystarter/container";
import { highlightMarkdownCode } from "@/client/core/lib/syntaxHighLighter";
import { BlogLayout } from "@/client/layouts/blog";
//import { useGetApi } from "@/client/core/hooks/useGetApi";

//import BlogSkeleton from "@/client/pages/blog/components/skeleton";

import { Markdown } from "@tanstack/markdown/react";

const ff =  `
\`\`\`js
function hello() {
  console.info('Code blocks are supported!');
}
\`\`\`
`

function Component() {
    /* const { data, isLoading } = useGetApi({
        endpoint: "/dl",
        params: {},
        options: {},
        cacheKey: "some"
    });

    if (isLoading) {
        return (
            <BlogSkeleton />
        );
    }; */

    return (
        <Container id="Article-Blog" className="typeset typeset-docs py-24 border-t border-border max-w-7xl mx-auto markdown-renderer" component="article">
            <BlogLayout>
                <Markdown highlighter={highlightMarkdownCode}>
                    {ff}
                </Markdown>
            </BlogLayout>
        </Container>
    );
};

export {
    Component,
};