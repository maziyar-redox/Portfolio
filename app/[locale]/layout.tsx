import "@/app/globals.css";

import { Sora } from "next/font/google";
import type { Metadata } from "next";
import type { Viewport } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import { ThemeProvider } from "@/providers/theme-provider";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MrRedox Portolio | Home Page",
    description: "Full-Stack Developer and computer engineering student.",
    openGraph: {
        title: "Home Page",
        description: "Full-Stack Developer and computer engineering student.",
        url: "https://maziyar-isa.ir/",
        siteName: "MrRedox Portfolio",
        type: "website",
        images: [
            {
              url: "https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/home.png",
              secureUrl: "https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/home.png",
              width: 1200,
              height: 630,
              alt: "Preview image for home",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://maziyar-isa.ir/",
        title: "Home Page",
        description: "Full-Stack Developer and computer engineering student.",
        creator: "@maziyar-redox",
        images: {
            url: "https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/img/home.png",
            alt: "Preview image for home",
        },
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();
    return (
        <html className="scroll-smooth" suppressHydrationWarning lang={locale}>
            <body className={sora.className}>
                <ThemeProvider defaultTheme="dark" forcedTheme="dark" attribute="class" enableSystem>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};