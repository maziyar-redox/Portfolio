import { HeroWrapper } from "@/components/hero-wrapper";
import { Main } from "@/components/main";

import { ReasonToChose } from "./_components/reason";
import { MyServices } from "./_components/services";
import { Works } from "./_components/works";
import { Question } from "./_components/question";

export default async function HomePage() {
    return (
        <>
            <Main mode="twin" />
            <HeroWrapper>
                <ReasonToChose />
                <MyServices />
                <Works />
                <Question />
            </HeroWrapper>
        </>
    );
};