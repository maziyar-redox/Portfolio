import type { BlogPostsProtoProps } from "@/client/core/types/constants";

const blogPosts: BlogPostsProtoProps[] = [
    {
        title: "Optimizing React Render Cycles in High-Frequency Data Apps",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        excerpt: "Deep dive into memoization strategies and custom hooks for handling 100+ updates per second.",
    },
    {
        title: "The State of WebAssembly in 2024",
        date: "Sep 28, 2024",
        readTime: "8 min read",
        excerpt: "Is WASM ready to replace JavaScript for heavy compute tasks? A performance benchmark.",
    },
    {
        title: "Building a Custom Kubernetes Operator with Go",
        date: "Aug 15, 2024",
        readTime: "12 min read",
        excerpt: "Automating stateful application management using the Operator pattern.",
    },
];

export {
    blogPosts
};