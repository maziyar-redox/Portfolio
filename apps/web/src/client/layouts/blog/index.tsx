import { markdownHighlightCss } from "@/client/core/lib/syntaxHighLighter";

function BlogLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <style>
                {markdownHighlightCss}
            </style>
            {children}
        </>
    );
};

export {
    BlogLayout
};