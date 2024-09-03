import { HeroWrapper } from "@/app/_components/hero-wrapper";

import { Hero } from "../_components/hero";
import { GetInTouchCard } from "../_components/getInTouch";
import { ContactWays } from "../_components/contactWays";

export default function ContactPage() {
    return (
        <>
            <Hero />
            <HeroWrapper>
                <div className="py-16">
                    <GetInTouchCard />
                </div>
                <ContactWays />
                <ContactWays />
            </HeroWrapper>
        </>
    );
};