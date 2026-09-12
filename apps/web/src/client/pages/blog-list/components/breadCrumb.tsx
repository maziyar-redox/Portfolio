import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/client/components/ui/breadcrumb";
import { buttonVariants } from "@/client/components/ui/button";
import { cn } from "@/client/core/lib/utils";

import { Link } from "react-router";

function BreadCrumbList() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link className={cn(buttonVariants({ variant: "default", size: "icon-lg" }), "rounded-full size-4")} to="/" />} />
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    /
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link to="/blog-list" className="font-mono">
                        BLOG LIST
                    </Link>} />
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadCrumbList;