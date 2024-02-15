import type { Metadata } from "next";

import { Wrapper } from "@/app/_components/wrapper";

export const metadata: Metadata = {
    title: "MrRedox Portolio | Home Page",
    description: "Web developer and computer engineering student",
};

export default function HomeLayout({
    children
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