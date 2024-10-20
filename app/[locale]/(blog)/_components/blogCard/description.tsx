interface DescriptionProps {
    title: string;
    description: string;
};

export function Description({
    title,
    description
}: DescriptionProps) {
    return (
        <div className="flex flex-col justify-center items-start gap-y-2 w-full">
            <h1 className="font-normal text-white text-base md:text-lg">
                {title}
            </h1>
            <p className="text-white-shade-55 font-normal text-xs md:text-sm">
                {description}
            </p>
        </div>
    );
};