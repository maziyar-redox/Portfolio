import { HeroSection } from "./_components/hero";
import { HeroWrapper } from "./_components/hero-wrapper";
import { ReasonToChose } from "./_components/reason";

export default async function RootPage() {
    return (
        <>
            <HeroSection />
            <HeroWrapper>
                <ReasonToChose />
            </HeroWrapper>
        </>
    );
};