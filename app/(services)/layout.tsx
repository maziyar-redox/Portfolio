import type { Metadata } from "next";

import { Wrapper } from "@/app/_components/wrapper";

export const metadata: Metadata = {
    title: "MrRedox Portolio | Service Page",
    description: "Full-Stack Developer and computer engineering student.",
    openGraph: {
        title: "Service Page",
        description: "Full-Stack Developer and computer engineering student.",
        url: 'https://maziyar-isa.ir/services',
        siteName: "MrRedox Portfolio",
        type: "website",
        images: [
            {
              url: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/services.png',
              secureUrl: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/services.png',
              width: 1200,
              height: 630,
              alt: 'Preview image for service',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://maziyar-isa.ir/services',
        title: "Service Page",
        description: "Full-Stack Developer and computer engineering student.",
        creator: '@maziyar-redox',
        images: {
            url: 'https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/services.png',
            alt: 'Preview image for service',
        }
    },
};

export default function ServicesLayout({
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