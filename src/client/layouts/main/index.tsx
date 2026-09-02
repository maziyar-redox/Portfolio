import { useEffect, useState } from "react";

import { Outlet } from "react-router";

import Navigation from "@/client/components/navigation";
import Loading from "@/client/components/loading";
import Footer from "@/client/components/footer";
import ScrollToTop from "@/client/components/scrollToTop";

function Component() {

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