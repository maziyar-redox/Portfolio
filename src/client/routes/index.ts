import { createBrowserRouter } from "react-router";

import Loading from "@/client/components/loading";

const MainLayout = import("@/client/layouts/main");

const MainPage = import("@/client/pages/main");

const router = createBrowserRouter([
    {
        path: "/",
        HydrateFallback: Loading,
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