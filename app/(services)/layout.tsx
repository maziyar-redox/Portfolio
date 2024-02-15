import type { Metadata } from "next";

import { Wrapper } from "@/app/_components/wrapper";

export const metadata: Metadata = {
    title: "MrRedox Portolio | Services Page",
    description: "Web developer and computer engineering student",
};

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    );
};