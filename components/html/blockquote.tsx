export function Blockquote({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <blockquote className="border border-l-gray-shade-25 border-l-4 bg-gray-shade-20/20 border-b-transparent border-t-transparent border-r-transparent rounded-r italic">
            <p className="before:hidden after:hidden">
                {children}
            </p>
        </blockquote>
    );
};