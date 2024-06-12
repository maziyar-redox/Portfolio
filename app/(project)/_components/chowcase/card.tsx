export function Card({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl w-full px-3 sm:px-9 pt-3 sm:pt-8 mt-2 sm:mt-9">
            {children}
        </div>
    );
};