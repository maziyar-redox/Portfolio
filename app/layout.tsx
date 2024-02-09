import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MrRedox Portolio | Home Page",
  description: "MrRedox Portolio | Web developer and computer engineering student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider defaultTheme="dark" forcedTheme="dark" attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};