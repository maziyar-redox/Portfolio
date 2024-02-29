import { BrandLogo } from "./brand-logo";
import { HeroItems } from "./hero-items";

export function HeroSection() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-between lg:mx-10 items-center h-screen">
                <HeroItems />
                <BrandLogo />
            </div>
        </>
    );
};