import { HeroWrapper } from "@/app/_components/hero-wrapper";

import { Hero } from "../_components/hero";
import { TagButton } from "../_components/tagButton";
import { LatestCard } from "../_components/latestCard";
import { BlogCard } from "../_components/blogCard";

export default function BlogPage() {
    return (
        <>
            <Hero />
            <HeroWrapper>
                <TagButton />
                <LatestCard />
                <BlogCard />
            </HeroWrapper>
        </>
    );
};