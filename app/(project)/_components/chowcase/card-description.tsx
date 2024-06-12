export function CardDescription({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className="flex flex-col justify-center items-start border border-gray-12 rounded-xl w-full px-3 sm:px-9 pt-3 sm:pt-8 mt-2 sm:mt-9">
            <div className="flex flex-col justify-center items-start gap-y-3">
                <h1 className="font-normal text-base text-white">
                    Project Description
                </h1>
                <p className="text-sm font-light text-white-55">
                    A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.
                </p>
            </div>
            {children}
        </div>
    );
};