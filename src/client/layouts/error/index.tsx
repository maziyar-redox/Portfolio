// Importing error objects and hooks to catching error and logging them
import { isRouteErrorResponse, useRouteError } from "react-router";

import { useEffect, useState } from "react";

// Importing custom error pages
import NotFoundPage from "@/client/pages/errors/not-found";
import ForbiddenErrorPage from "@/client/pages/errors/forbidden-error";
import InternalErrorPage from "@/client/pages/errors/internal-error";

// Importing navigation
import Navigation from "@/client/components/navigation";
import Loading from "@/client/components/loading";
import Footer from "@/client/components/footer";
import ScrollToTop from "@/client/components/scrollToTop";

// This function or component is for customizing error ui
function RootErrorLayout() {
    const routeError = useRouteError();
    if (isRouteErrorResponse(routeError)) {
        if (routeError.status === 404) {
            return (
                <NotFoundPage />
            );
        };

        if (routeError.status === 403) {
            return (
                <ForbiddenErrorPage />
            );
        };
    } else if (routeError instanceof Error) {
        return (
            <InternalErrorPage />
        );
    } else {
        return (
            <InternalErrorPage />
        );
    };
    return <InternalErrorPage />
};

function ErrorLayout() {
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        return () => setLoading(false)
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden flex flex-col justify-between items-center pt-24 md:pt-48 gap-y-12">
                <Navigation />
                <RootErrorLayout />
                <Footer />
            </div>
        </>
    );
};

export default ErrorLayout;