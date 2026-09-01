import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import "@/client/index.css";

// import App from "@/client/App";

import { ThemeProvider } from "@/client/components/providers/theme-provider";

import { router } from "@/client/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);