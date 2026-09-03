import { createBrowserRouter, redirect, RouterContextProvider, type LoaderFunctionArgs } from "react-router";

import Loading from "@/client/components/loading";

import ErrorLayout from "@/client/layouts/error";

const MainLayout = import("@/client/layouts/main");

const MainPage = import("@/client/pages/main");
const BlogListPage = import("@/client/pages/blog-list");
const BlogPage = import("@/client/pages/blog");

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
    {
        path: "/blog",
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                loader: (e: LoaderFunctionArgs<Readonly<RouterContextProvider>>) => {
                    throw redirect("/");
                },
            },
            {
                path: ":id",
                lazy: () => BlogPage
            },
        ],
    },
]);

export {
    router
};