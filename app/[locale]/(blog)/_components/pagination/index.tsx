"use client";

import { usePathname, useRouter } from "@/i18n/routing";

import { useSearchParams } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from "@/components/ui/pagination";

interface QueryPaginationProps {
    totalPages: number;
    className?: string;
    maxPageItem: number;
};

export function QueryPagination({
    totalPages,
    className,
    maxPageItem
}: QueryPaginationProps) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };
    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className="rounded-[4px] cursor-pointer" onClick={() => {
                        if (prevPage >= 1) {
                            router.push(createPageURL(prevPage));
                        } else {
                            return;
                        };
                    }} />
                </PaginationItem>
                {Array(totalPages).fill("").map((_, index) => (
                    <PaginationItem
                        className="hidden sm:inline-block"
                        key={`page-button-${index}`}
                    >
                        <PaginationLink
                            className="cursor-pointer"
                            isActive={currentPage === index + 1}
                            onClick={() => {
                                router.push(createPageURL(index + 1));
                            }}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="rounded-[4px] cursor-pointer" onClick={() => {
                        if (nextPage <= totalPages) {
                            router.push(createPageURL(nextPage));
                        } else {
                            return;
                        };
                    }} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}