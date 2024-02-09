import { Sidebar } from "./_components/sidebar";
import { Wrapper } from "./_components/wrapper";

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