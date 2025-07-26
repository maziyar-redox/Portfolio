"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const NextThemeProvider = dynamic(
  () => import("@/providers/theme-provider").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  }
);

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </NextThemeProvider>
    );
};