import { Button } from "@/components/ui/button";

import { Card } from "./card";
import { Description } from "./description";
import { InfoSection } from "./info";

export function CardContainer() {
    return (
        <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1 gap-y-5">
            <Card />
            <InfoSection />
            <Description />
            <div className="flex items-center justify-center">
                <Button size="default" variant="selected">
                    Read More
                </Button>
            </div>
        </div>
    );
};