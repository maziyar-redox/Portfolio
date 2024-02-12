import { HeroSection } from "./_components/hero";
import { HeroWrapper } from "./_components/hero-wrapper";
import { ReasonToChose } from "./_components/reason";

export default async function RootPage() {
    /* await new Promise((resolve) => setTimeout(resolve, 5000)); */
    return (
        <>
            <HeroSection />
            <HeroWrapper>
                <ReasonToChose />
            </HeroWrapper>
        </>
    );
};