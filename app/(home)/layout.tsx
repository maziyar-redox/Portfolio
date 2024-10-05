import type { Metadata } from "next";

import { Wrapper } from "@/app/_components/wrapper";

export const metadata: Metadata = {
    title: "MrRedox Portolio | Home Page",
    description: "Full-Stack Developer and computer engineering student.",
    openGraph: {
        title: "Home Page",
        description: "Full-Stack Developer and computer engineering student.",
        url: 'https://maziyar-isa.ir/',
        siteName: "MrRedox Portfolio",
        type: "website",
        images: [
            {
              url: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/home.png',
              secureUrl: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/home.png',
              width: 1200,
              height: 630,
              alt: 'Preview image for home',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://maziyar-isa.ir/',
        title: "Home Page",
        description: "Full-Stack Developer and computer engineering student.",
        creator: '@maziyar-redox',
        images: {
            url: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/home.png',
            alt: 'Preview image for home',
        }
    },
};

export default function HomeLayout({
    children
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