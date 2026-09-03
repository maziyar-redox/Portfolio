import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router";

import "@/client/core/styles/index.css";

import { ThemeProvider } from "@/client/components/providers/theme-provider";

import { Toaster } from "@/client/components/ui/sonner";

import { router } from "@/client/routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <RouterProvider router={router} />
                    <Toaster />
                </ThemeProvider>
            </HelmetProvider>
        </QueryClientProvider> 
    </StrictMode>,
);