import { ThemeProvider } from "@/components/theme-provider";

import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={sora.className}>
        <ThemeProvider defaultTheme="dark" forcedTheme="dark" attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};