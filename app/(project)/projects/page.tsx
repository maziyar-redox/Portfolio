import { HeroWrapper } from "@/app/_components/hero-wrapper";

import { Hero } from "../_components/hero";
import { Features } from "../_components/features";
import { ShowCase } from "../_components/chowcase";

export default function ProjectsPage() {
    return (
        <>
            <Hero />
            <HeroWrapper>
                <Features />
                <ShowCase />
            </HeroWrapper>
        </>
    );
};