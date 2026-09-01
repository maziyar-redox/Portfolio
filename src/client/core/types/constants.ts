import type { Icon } from "@phosphor-icons/react";

type SkillsProps = {
    category: string;
    items: string[];
};

type ProjectsProps = {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    repo: string;
};

type BlogPostsProtoProps = {
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
};

type TechCardProps = {
    text: string;
    Icon: Icon;
};

type MileStonesProps = {
    id: number;
    date: string;
    title: string;
};

export type {
    SkillsProps,
    ProjectsProps,
    BlogPostsProtoProps,
    TechCardProps,
    MileStonesProps
};