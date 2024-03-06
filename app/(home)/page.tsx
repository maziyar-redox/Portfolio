import { HeroWrapper } from "@/app/_components/hero-wrapper";

import { HeroSection } from "./_components/hero";
import { Question } from "./_components/question";
import { ReasonToChose } from "./_components/reason";
import { Services } from "./_components/services";
import { Works } from "./_components/works";

export default async function RootPage() {
    return (
        <>
            <HeroSection />
            <HeroWrapper>
                <ReasonToChose />
                <Services />
                <Works />
                <Question />
            </HeroWrapper>
        </>
    );
};