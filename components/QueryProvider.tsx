"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const NextThemeProvider = dynamic(
    () => import("next-themes").then((mod) => mod.ThemeProvider),
    {
        ssr: false,
    }
);

const queryClient = new QueryClient();

export function QueryProviders({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};