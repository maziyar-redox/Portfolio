import { InfoCard } from "./infoCard";

export function Info() {
    return (
        <>
            <div className="flex flex-col justify-center items-start gap-y-5">
                <h1 className="text-white font-medium text-lg md:text-xl">
                    Web Design Trends Shaping 2023
                </h1>
                <p className="text-white-55 font-light text-xs md:text-base">
                    Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond {" "}
                    <button className="text-white">
                        Read More...
                    </button>
                </p>
                <InfoCard />
            </div>
        </>
    );
};