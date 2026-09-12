import { AnimateIcon } from "@/client/components/animate-ui/icons/icon";
import { Binary } from "@/client/components/animate-ui/icons/binary";

import { Helmet } from "react-helmet-async";

export default function Loading() {
    return (
        <>
            <Helmet>
                <title>
                    Loading...
                </title>
            </Helmet>
            <div className="h-screen w-screen flex flex-col gap-y-7 justify-center items-center">
                <AnimateIcon animate animation="path-loop" loop loopDelay={1000}>
                    <Binary className="size-24" />
                </AnimateIcon>
                <h1 className="text-foreground font-mono text-3xl border-b-3 border-b-primary pb-5">
                    LOADING
                </h1>
                <p className="text-muted-foreground mb-8">
                    Fetching data please wait...
                </p>
            </div>
        </>
    );
};