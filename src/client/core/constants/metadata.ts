import { PAGE_TITLES, type PageMetaData } from "@/client/core/types/metadata";

const HomePageMetaData: PageMetaData = {
    title: PAGE_TITLES.MAIN,
    description: "The online portfolio and blog of Maziyar Isanezhad, a full-stack developer specializing in DevOps and Golang. Explore case studies, design systems, and weekly insights on user experience, front-end and back-end development, and creative strategy.",
    keywords: [
        "Maziyar Isanezhad",
        "polymath",
        "portfolio",
        "physicist software engineer",
        "applied mathematics",
        "computational physics",
        "mechanics engineering",
        "computer engineering",
        "Golang developer",
        "DevOps engineer",
        "infrastructure as code", 
        "Kubernetes",
        "cloud architecture",
        "systems programming",
        "scientific computing",
        "numerical methods",
        "algorithm design",
        "CI/CD pipelines",
        "distributed systems",
        "multi-disciplinary engineer",
        "research portfolio",
        "technical blog"
    ],
};

const BlogListPageMetaData: PageMetaData = {
    title: PAGE_TITLES.BLOG_LIST,
    description: "Explore the polymath blog of Maziyar Isanezhad. Read in-depth articles on physics, applied mathematics, mechanics, Golang programming, DevOps infrastructure, and bridging theoretical science with production-grade software engineering.",
    keywords: [
        "polymath blog",
        "physics blog",
        "mathematics blog",
        "mechanics engineering",
        "Golang programming",
        "DevOps blog",
        "software engineering blog",
        "technical blog",
        "programming tutorials",
        "cloud infrastructure",
        "Kubernetes",
        "distributed systems",
        "computational physics",
        "numerical methods",
        "algorithm design",
        "systems programming",
        "developer blog",
        "engineering blog",
        "research blog",
        "Maziyar Isanezhad blog"
    ],
};

export {
    HomePageMetaData,
    BlogListPageMetaData
};