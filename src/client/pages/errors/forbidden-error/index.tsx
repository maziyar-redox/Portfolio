import { buttonVariants } from "@/client/components/ui/button";
import { cn } from "@/client/core/lib/utils";

import { ArrowRightIcon, XIcon } from "@phosphor-icons/react";

import { Link } from "react-router";

function ForbiddenErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="relative size-20 flex items-center justify-center target-yellow">
                <div className="absolute top-0 left-0 size-3 border-t-3 border-l-3 border-primary" />
                <div className="absolute top-0 right-0 size-3 border-t-3 border-r-3 border-primary" />
                <div className="absolute bottom-0 left-0 size-3 border-b-3 border-l-3 border-primary" />
                <div className="absolute bottom-0 right-0 size-3 border-b-3 border-r-3 border-primary" />
                <XIcon className="size-8 text-primary" />
            </div>
            <h1 className="font-mono text-7xl md:text-9xl text-foreground my-10">
                4 <span className="text-primary border-b-2 border-primary">0</span> 3
            </h1>
            <h3 className="font-mono text-3xl text-foreground">
                FORBIDDEN_<span className="text-primary">ERROR</span>_PAGE
            </h3>
            <p className="text-muted-foreground mb-8 text-center max-w-2xs">
                Seems like you are trying to a page that you don't have access to.
            </p>
            <Link
                to="/"
                className={cn("uppercase pt-1", buttonVariants({ size: "lg" }), "h-11")}
            >
                Return Home <ArrowRightIcon className="size-4" />
            </Link>
        </div>
    );
};

export default ForbiddenErrorPage;