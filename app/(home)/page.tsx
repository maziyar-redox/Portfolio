import { HeroSection } from "./_components/hero";
import { HeroWrapper } from "./_components/hero-wrapper";
import { ReasonToChose } from "./_components/reason";
import { Services } from "./_components/services";

export default async function RootPage() {
    return (
        <>
            <HeroSection />
            <HeroWrapper>
                <ReasonToChose />
                <Services />
            </HeroWrapper>
        </>
    );
};