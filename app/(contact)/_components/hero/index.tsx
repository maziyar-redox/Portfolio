import { BrandLogo } from "./brand-logo";

export function Hero() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center p-2">
                <BrandLogo />
            </div>
        </>
    );
};