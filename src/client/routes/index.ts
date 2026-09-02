import { createBrowserRouter } from "react-router";

import Loading from "@/client/components/loading";

import ErrorLayout from "@/client/layouts/error";

const MainLayout = import("@/client/layouts/main");

const MainPage = import("@/client/pages/main");
const BlogListPage = import("@/client/pages/blog-list");

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
    {
        path: "/blog-list",
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                lazy: () => BlogListPage
            }
        ],
    },
]);

export {
    router
};