"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import dynamic from "next/dynamic";
import { Loader } from "@/components/LoadingPage";
import { ThemeProvider } from "@/providers/theme-provider";

//const NextThemeProvider = dynamic(
//    () => import("@/providers/theme-provider").then((mod) => mod.ThemeProvider),
//    {
//        ssr: false,
//    }
//);

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
        >
            <QueryClientProvider client={queryClient}>
                <Loader>
                    {children}
                </Loader>
            </QueryClientProvider>
        </ThemeProvider>
    );
};