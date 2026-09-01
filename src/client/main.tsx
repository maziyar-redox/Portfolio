import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router";

import "@/client/index.css";

import { ThemeProvider } from "@/client/components/providers/theme-provider";

import { router } from "@/client/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>,
);