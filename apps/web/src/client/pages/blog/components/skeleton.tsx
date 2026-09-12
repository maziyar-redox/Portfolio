import { Skeleton } from "@/client/components/ui/skeleton";
import { Container } from "@/client/components/zippystarter/container";

function BlogSkeleton() {
    return (
        <Container id="Article-Blog-Skeleton" className="py-24 border-t border-border max-w-7xl mx-auto" component="section">
            <div className="flex flex-col w-full gap-y-5">
                <Skeleton className="w-full md:w-xl h-8 rounded-full mb-10" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-6 rounded-full" />
                <Skeleton className="w-full h-48 rounded-md mt-10" />
            </div>
        </Container>
    );
};

export default BlogSkeleton;