export function InfoSection() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-y-3 md:gap-y-0">
            <div className="flex flex-row justify-center items-center gap-x-2">
                <img src="/img/4.jpg" className="w-10 h-10 rounded-full border border-gray-12 object-cover object-center" alt="programmer" />
                <span className="text-white font-light text-sm">
                    Jhon Smith
                </span>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <div className="border border-gray-12 rounded-full p-1">
                    <span className="text-white-55 text-sm font-light">
                        6 minutes
                    </span>
                </div>
                <div className="border border-gray-12 rounded-full p-1">
                    <span className="text-white-55 text-sm font-light">
                        6 minutes
                    </span>
                </div>
            </div>
        </div>
    );
};