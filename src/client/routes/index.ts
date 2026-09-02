import { createBrowserRouter } from "react-router";

import Loading from "@/client/components/loading";

import ErrorLayout from "@/client/layouts/error";

const MainLayout = import("@/client/layouts/main");

const MainPage = import("@/client/pages/main");

const router = createBrowserRouter([
    {
        path: "/",
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                lazy: () => MainPage
            }
        ],
    },
]);

export {
    router
};