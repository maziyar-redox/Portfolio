import type { Metadata } from "next";

import { Sidebar } from "./_components/sidebar";
import { Wrapper } from "./_components/wrapper";

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
            <Sidebar />
            <Wrapper>
                {children}
            </Wrapper>
        </>
    );
};