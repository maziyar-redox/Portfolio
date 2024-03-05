import { IconSize } from "@/types/client-types";

export function ChartBar({
    size = 20,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11.125C1 10.5037 1.50368 10 2.125 10H4.375C4.99632 10 5.5 10.5037 5.5 11.125V17.875C5.5 18.4963 4.99632 19 4.375 19H2.125C1.50368 19 1 18.4963 1 17.875V11.125Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.75 6.625C7.75 6.00368 8.25368 5.5 8.875 5.5H11.125C11.7463 5.5 12.25 6.00368 12.25 6.625V17.875C12.25 18.4963 11.7463 19 11.125 19H8.875C8.25368 19 7.75 18.4963 7.75 17.875V6.625Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5 2.125C14.5 1.50368 15.0037 1 15.625 1H17.875C18.4963 1 19 1.50368 19 2.125V17.875C19 18.4963 18.4963 19 17.875 19H15.625C15.0037 19 14.5 18.4963 14.5 17.875V2.125Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};