import { posts } from "#site/content";

import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { cn } from "@/libs/utils";

import Image from "next/image";

import { MDXContent } from "@/components/mdxComponents";
import { Link } from "@/i18n/routing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Hashtag } from "./_components/hashtag";
import { FormatDate } from "@/libs/formatDate";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

interface PostPageProps {
    params: {
        slug: string[];
        locale?: string;
    };
};

async function getPostFromParams(params: PostPageProps["params"]) {
    const slug = params?.slug?.join("/");
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
};

export async function generateMetadata({
    params
}: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);
    if (!post) {
        return {};
    };
    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);
    ogSearchParams.set("author", post.author);
    ogSearchParams.set("date", post.date);
    const firstTag = post.tags as string[];
    ogSearchParams.set("tag", firstTag[0]);
    return {
        title: post.title,
        description: post.description,
        authors: { name: post.author },
        openGraph: {
            title: post.title,
            description: post.description,
            url: post.slug,
            siteName: "MrRedox Portfolio",
            type: "article",
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    secureUrl: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 650,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "https://maziyar-isa.ir/",
            title: post.title,
            description: post.description,
            creator: "@maziyar-redox",
            images: {
                url: `/api/og?${ogSearchParams.toString()}`,
                alt: post.title,
            },
        },
    };
};

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
};

export default async function PostPage({ params }: PostPageProps) {
    unstable_setRequestLocale(params.locale as string);
    const post = await getPostFromParams(params);
    if (!post || !post.published) {
        notFound();
    };
    const githubUrl = `https://avatars.githubusercontent.com/${post.author}`;
    const githubProfile = `https://github.com/${post.author}`;
    return (
        <article className={cn(
            "container my-3 py-6 prose dark:prose-invert max-w-3xl mx-auto",
            "prose-h1:text-white-shade-90 prose-h1:no-underline",
            "prose-h2:text-white-shade-90 prose-h2:no-underline",
            "prose-h3:text-white-shade-90",
            "prose-h4:text-white-shade-90",
            "prose-h5:text-white-shade-90",
            "prose-h6:text-white-shade-90",
            "prose-p:text-white-shade-60",
            "prose-a:text-white-shade-90"
        )}>
            <h1>
                {post.title}
            </h1>
            {post.description ? (
                <p>
                    {post.description}
                </p>
            ) : null}
            {post.isCover ? (
                <div className="container px-0">
                    <Image
                        alt={post.title}
                        src={post.coverUrl as string}
                        width={1200}
                        height={600}
                        className="object-cover object-center border border-gray-shade-12 rounded-xl"
                    />
                </div>
            ) : null}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full mb-6 gap-y-2">
                <div className="flex flex-col items-start justify-center gap-y-3">
                    <Link href={githubProfile} target="_blank" className="no-underline">
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <Avatar className="items-center justify-center">
                                <AvatarImage src={githubUrl} />
                                <AvatarFallback>
                                    {post.author}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-white font-normal text-sm">
                                {post.author}
                            </span>
                        </div>
                    </Link>
                    <span className="text-gray-shade-40 text-sm">
                        Published in {FormatDate(post.date)}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2">
                    {post.tags?.length !== 0 && post.tags?.map(item => (
                        <Hashtag
                            key={item}
                            href={item}
                        />
                    ))}
                </div>
            </div>
            <MDXContent code={post.body} />
        </article>
    );
};