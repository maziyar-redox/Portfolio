import type { Metadata } from "next";

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
            {children}
        </>
    );
};