import { ArrowSmallRight } from "@/components/svg/Arrow-Right";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ReadMoreButton({
    href
}: { href: string }) {
    return (
        <Button variant="learnMore" className="space-x-2.5">
            <Link href={href} className="text-white text-xs">
                Learn more
            </Link>
            <ArrowSmallRight size={12} />
        </Button>
    );
};