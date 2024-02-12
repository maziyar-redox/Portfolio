import { ArrowSmallRight } from "@/components/svg/Arrow-Right";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ReadMoreButton({ link }: { link: string }) {
    return (
        <div className="flex flex-row justify-center items-center space-x-4 border border-gray-12 rounded-full pr-2 pl-4 py-2 lg:py-2">
            <h1 className="text-white font-light text-xs lg:text-sm">
                Learn more
            </h1>
            <Button variant="readmore" className="rounded-full w-[44px] h-7 lg:h-8" size="icon" asChild>
                <Link href={link}>
                    <ArrowSmallRight
                        size={13}
                    />
                </Link>
            </Button>
        </div>
    );
};