import { buttonVariants } from "@/client/components/ui/button";
import { cn } from "@/client/core/lib/utils";
import { InternalErrorPageMetaData } from "@/client/core/constants/metadata";

import { ArrowRightIcon, XIcon } from "@phosphor-icons/react";

import { Link } from "react-router";

import { Helmet } from "react-helmet-async";

function InternalErrorPage() {
    return (
        <>
            <Helmet>
                <title>
                    {InternalErrorPageMetaData.title}
                </title>
                <meta name="description" content={InternalErrorPageMetaData.description} />
                <meta name="keywords" content={InternalErrorPageMetaData.keywords.join(" ,")} />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Maziyar Isanezhad" />
            </Helmet>
            <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="relative size-20 flex items-center justify-center target-yellow">
                    <div className="absolute top-0 left-0 size-3 border-t-3 border-l-3 border-primary" />
                    <div className="absolute top-0 right-0 size-3 border-t-3 border-r-3 border-primary" />
                    <div className="absolute bottom-0 left-0 size-3 border-b-3 border-l-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 border-b-3 border-r-3 border-primary" />
                    <XIcon className="size-8 text-primary" />
                </div>
                <h1 className="font-mono text-7xl md:text-9xl text-foreground my-10">
                    5 <span className="text-primary border-b-2 border-primary">0</span> 0
                </h1>
                <h3 className="font-mono text-3xl text-foreground">
                    INTERNAL_<span className="text-primary">ERROR</span>_PAGE
                </h3>
                <p className="text-muted-foreground mb-8 text-center max-w-2xs">
                    There is an error in our systems and we are currently working on it.
                </p>
                <Link
                    to="/"
                    className={cn("uppercase pt-1", buttonVariants({ size: "lg" }), "h-11")}
                >
                    Return Home <ArrowRightIcon className="size-4" />
                </Link>
            </div>
        </>
    );
};

export default InternalErrorPage;