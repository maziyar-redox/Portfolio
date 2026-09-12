import { format } from "date-fns";

import { cn } from "@/client/core/lib/utils";
import type { blogListProps } from "@/client/core/types/blogList";
import { Separator } from "@/client/components/ui/separator";

import { Link } from "react-router";

import { buttonVariants } from "@/client/components/ui/button";
import { badgeVariants } from "@/client/components/ui/badge";


import { ArrowRightIcon } from "@phosphor-icons/react";
import { useMediaQuery } from "usehooks-ts";

function BlogCard({
    tags,
    title,
    excerpt,
    date
}: blogListProps) {

    const matches = useMediaQuery("(min-width: 768px)")

    return (
        <div className="bg-accent/35 border border-border w-full flex flex-col md:flex-row justify-between items-center px-10 md:px-16 py-8 gap-y-10 md:gap-y-0 md:gap-x-10">
            <div className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-y-0 md:gap-x-10">
                <div className="flex flex-col justify-center items-center gap-y-3">
                    <span className="text-sm text-muted-foreground font-mono">
                        {format(date, "MMM")}
                    </span>
                    <h1 className="font-mono text-4xl text-primary font-bold">
                        {format(date, "dd")}
                    </h1>
                    <span className="text-sm text-muted-foreground font-mono">
                        {format(date, "yyyy")}
                    </span>
                </div>
                <Separator orientation={matches ? "vertical" : "horizontal"} />
                <div className="flex flex-col justify-between items-start gap-y-5">
                    <h1 className="text-3xl/normal font-heading">
                        {title}
                    </h1>
                    <p className="text-muted-foreground">
                        {excerpt}
                    </p>
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        {tags.map((value, index) => (
                            <Link
                                to="#"
                                key={index}
                                className={cn(
                                    badgeVariants({ variant: "secondary" }),
                                    "font-mono text-xs"
                                )}
                            >
                                {value}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Link to="#" className={cn(
                buttonVariants({ variant: "outline", size: "icon-lg" }),
                "rounded-full size-14 text-primary"
            )}>
                <ArrowRightIcon className="size-6" />
            </Link>
        </div>
    );
};

export default BlogCard;