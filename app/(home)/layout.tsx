import type { Metadata } from "next";

import { Wrapper } from "@/app/_components/wrapper";

export const metadata: Metadata = {
    title: "MrRedox Portolio | Home Page",
    description: "Full-Stack Developer and computer engineering student.",
    openGraph: {
        title: "MrRedox Portolio | Home Page",
        description: "Full-Stack Developer and computer engineering student.",
        url: 'https://maziyar-isa.ir/',
        siteName: "MrRedox Portfolio",
        type: "website",
        images: [
            {
              url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
              secureUrl: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
              width: 1200,
              height: 630,
              alt: 'Preview image for MrRedox',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@yesdavidgray',
        title: "MrRedox",
        description: "Hello, I'm Dave. 👋 I teach coding and web development skills.",
        creator: '@yesdavidgray',
        images: {
            url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
            alt: 'Preview image for MrRedox',
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