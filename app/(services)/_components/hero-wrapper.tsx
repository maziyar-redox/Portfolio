export function HeroWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="px-2.5 bg-gray-6">
            {children}
        </div>
    );
};