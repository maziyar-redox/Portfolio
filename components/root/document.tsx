import "@/app/globals.css";
import { Sora } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

const sora = Sora({ subsets: ["latin"] });

export default function Document({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="scroll-smooth" lang="en" suppressHydrationWarning>
            <body className={sora.className}>
                <ThemeProvider defaultTheme="dark" forcedTheme="dark" attribute="class" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};