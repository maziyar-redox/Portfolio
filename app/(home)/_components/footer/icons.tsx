import { FooterIconsProps } from "@/types/client-types";
import Link from "next/link";

export function FooterIcons({
    icon,
    href
}: FooterIconsProps) {
    return (
        <Link href={href} className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-12 bg-gray-10">
            {icon}
        </Link>
    );
};