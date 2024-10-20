import { Wrapper } from "@/components/wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MrRedox Portolio | Blog Page",
    description: "Full-Stack Developer and computer engineering student.",
    openGraph: {
        title: "Blog Page",
        description: "Full-Stack Developer and computer engineering student.",
        url: 'https://maziyar-isa.ir/blog',
        siteName: "MrRedox Portfolio",
        type: "website",
        images: [
            {
              url: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/blog.png',
              secureUrl: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/blog.png',
              width: 1200,
              height: 630,
              alt: 'Preview image for Blog',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://maziyar-isa.ir/blog',
        title: "Blog Page",
        description: "Full-Stack Developer and computer engineering student.",
        creator: '@maziyar-redox',
        images: {
            url: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/blog.png',
            alt: 'Preview image for Blog',
        }
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    );
};