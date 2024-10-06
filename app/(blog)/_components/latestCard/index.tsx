import { Card } from "./card";
import { Info } from "./info";

export function LatestCard() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-start items-center mx-0 md:mx-10 gap-y-8 md:gap-x-10">
                <Card />
                <Info />
            </div>
        </>
    );
};