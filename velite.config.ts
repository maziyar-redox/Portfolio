import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { defineConfig, defineCollection, s } from "velite";
import { preProcess, postProcess } from "@/libs/rehype-pre-raw";

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
    name: "Post",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999),
        date: s.isodate(),
        isCover: s.boolean(),
        coverUrl: s.string().optional(),
        author: s.string(),
        tags: s.array(s.string()).optional(),
        published: s.boolean().default(true),
        body: s.mdx()
    }).transform(computedFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/img",
        base: "/img/",
        name: "[name]-[hash:6].ext",
        clean: true
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [preProcess ,rehypeSlug, [
            rehypePrettyCode,
            {
                theme: "ayu-dark",
            },
        ], [
            rehypeAutolinkHeadings,
            {
                behavior: "wrap",
                properties: {
                    className: ["subheading-anchor"],
                    ariaLabel: "link to section"
                },
            },
        ], postProcess],
        remarkPlugins: [],
    },
});