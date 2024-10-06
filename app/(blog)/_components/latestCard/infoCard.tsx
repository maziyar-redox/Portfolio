export function InfoCard() {
    return (
        <>
            <ul className="flex flex-col md:flex-row items-start justify-between gap-y-4 md:gap-y-0 md:gap-x-3 border border-gray-12 w-full px-4 md:px-8 rounded-lg py-4">
                <li className="flex flex-col items-start justify-center gap-y-1 w-full border-b md:border-b-0 md:border-r border-gray-12 pb-4 md:pb-0">
                    <span className="text-white-50 text-sm font-light">
                        Read Time
                    </span>
                    <h5 className="text-white text-base font-normal">
                        6 minutes
                    </h5>
                </li>
                <li className="flex flex-col items-start justify-center gap-y-1 w-full border-b md:border-b-0 md:border-r border-gray-12 pb-4 md:pb-0">
                    <span className="text-white-50 text-sm font-light">
                        Author
                    </span>
                    <h5 className="text-white text-base font-normal">
                        Maziyar Isanezhad
                    </h5>
                </li>
                <li className="flex flex-col items-start justify-center gap-y-1 w-full border-b md:border-b-0 md:border-r border-gray-12 pb-4 md:pb-0">
                    <span className="text-white-50 text-sm font-light">
                        Published Date
                    </span>
                    <h5 className="text-white text-base font-normal">
                        10/6/2024
                    </h5>
                </li>
                <li className="flex flex-col items-start justify-center gap-y-1 w-full">
                    <span className="text-white-50 text-sm font-light">
                        Category
                    </span>
                    <h5 className="text-white text-base font-normal">
                        All
                    </h5>
                </li>
            </ul>
        </>
    );
};