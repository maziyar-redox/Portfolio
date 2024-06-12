import { SuccessCategoryItemProps } from "@/types/client-types";

export function CardTag({
    icon,
    head
}: SuccessCategoryItemProps) {
    return (
        <div className="flex flex-row items-center justify-center border border-gray-15 rounded-full px-3 py-2 sm:py-2.5 gap-x-2">
            <span className="flex items-center justify-center">
                {icon}
            </span>
            <h1 className=" font-medium text-white-55 text-xs md:text-sm">
                {head}
            </h1>
        </div>
    );
};