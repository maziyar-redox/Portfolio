import { useEffect, useState } from "react";

import { Outlet } from "react-router";

import Navigation from "@/client/components/navigation";
import Loading from "@/client/components/loading";
import Footer from "@/client/components/footer";
import ScrollToTop from "@/client/components/scrollToTop";
import { useIsMounted } from "usehooks-ts";

function Component() {

    const [loading, setLoading] = useState<boolean>(true);
    const isMounted = useIsMounted();

    useEffect(() => {
        if (isMounted()) {
            setLoading(false);
        };

        return () => undefined;
    }, [isMounted]);

    if (loading) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
                <Navigation />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export {
    Component
};