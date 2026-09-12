import { buttonVariants } from "@/client/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/client/components/ui/pagination";
import { cn } from "@/client/core/lib/utils";

function BlogPagination() {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" className={cn(
                        buttonVariants({ variant: "outline", size: "icon-lg" }),
                        "[&_span]:hidden rounded-full [&_svg]:ml-1"
                    )} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        55
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" className={cn(
                        buttonVariants({ variant: "outline", size: "icon-lg" }),
                        "[&_span]:hidden rounded-full [&_svg]:mr-0.5"
                    )} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default BlogPagination;