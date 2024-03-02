import { Categories } from "../_components/categories";
import { Hero } from "../_components/hero";
import { HeroWrapper } from "../_components/hero-wrapper";
import { Services } from "../_components/services";
import { Success } from "../_components/success";

export default function ServicesPage() {
    return (
        <>
            <Hero />
            <HeroWrapper>
                <Services />
                <Categories />
                <Success />
            </HeroWrapper>
        </>
    );
};