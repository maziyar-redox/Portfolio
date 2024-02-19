import { Hero } from "../_components/hero";
import { HeroWrapper } from "../_components/hero-wrapper";
import { Services } from "../_components/services";

export default function ServicesPage() {
    return (
        <>
            <Hero />
            <HeroWrapper>
                <Services />
            </HeroWrapper>
        </>
    );
};