import { Link } from "react-router";

import { Container } from "@/client/components/zippystarter/container";

import { blogPosts } from "@/client/core/constants/blog-proto";
import { useActiveSection } from "@/client/core/stores/useActiveSection";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cn } from "@/client/core/lib/utils";
import { buttonVariants } from "@/client/components/ui/button";

function BlogsSection() {
    const { setActiveSection } = useActiveSection((state) => state);
    const { ref, inView } = useInView({
        threshold: 0.7, // Trigger when 30% of the element is visible
        triggerOnce: false, // Only trigger once (good for animations)
    });

    useEffect(() => {
        if (inView) {
            setActiveSection("blog");
        };
    }, [inView]);
    return (
        <Container
            id="blog"
            className="py-24 border-t border-border max-w-7xl mx-auto"
        >
            <h2 className="text-4xl font-display mb-12 uppercase">
                Transmissions
            </h2>

            <div className="grid gap-8" ref={ref}>
                {blogPosts.map((post, index) => (
                    <Link
                        to="#"
                        key={index}
                        className="group"
                    >
                        <div className="grid gap-4 md:grid-cols-[1fr_auto] items-baseline justify-between mb-2">
                            <h3 className="text-2xl font-display group-hover:text-primary transition-colors text-balance">
                                {post.title}
                            </h3>
                            <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                                {post.date} // {post.readTime}
                            </span>
                        </div>
                        <p className="text-muted-foreground mb-4 max-w-2xl">
                            {post.excerpt}
                        </p>
                        <div className="h-px w-full bg-border group-hover:bg-primary/50 transition-colors" />
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/blog-list" className={cn(
                    "pt-1 dark:hover:text-primary",
                    buttonVariants({variant: "outline", size: "lg"})
                )}>
                    VIEW ALL POSTS
                </Link>
            </div>
        </Container>
    );
};

export default BlogsSection;