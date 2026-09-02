import type { BlogPostsProtoProps } from "@/client/core/types/constants";

const blogPosts: BlogPostsProtoProps[] = [
    {
        title: "Optimizing React Render Cycles in High-Frequency Data Apps",
        date: Date.now(),
        readTime: 5,
        excerpt: "Deep dive into memoization strategies and custom hooks for handling 100+ updates per second.",
        tags: ["React", "Go", "WebSocket", "D3.js"],
    },
    {
        title: "The State of WebAssembly in 2024",
        date: Date.now(),
        readTime: 8,
        excerpt: "Is WASM ready to replace JavaScript for heavy compute tasks? A performance benchmark.",
        tags: ["React", "Go", "WebSocket", "D3.js"],
    },
    {
        title: "Building a Custom Kubernetes Operator with Go",
        date: Date.now(),
        readTime: 12,
        excerpt: "Automating stateful application management using the Operator pattern.",
        tags: ["React", "Go", "WebSocket", "D3.js"],
    },
];

export {
    blogPosts
};