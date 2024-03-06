import { SuccessCategoryItemProps } from "@/types/client-types";

export function CategoryCard({
    icon,
    head
}: SuccessCategoryItemProps) {
    return (
        <div className="flex flex-row items-center justify-center border border-gray-15 rounded-full pl-1 pr-2.5 py-1 gap-x-2">
            <div className="flex items-center justify-center p-2 md:p-2.5 bg-gray-10 rounded-full border border-gray-15">
                {icon}
            </div>
            <h1 className="font-extralight text-white text-xs md:text-sm">
                {head}
            </h1>
        </div>
    );
};