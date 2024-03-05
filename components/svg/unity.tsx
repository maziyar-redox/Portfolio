import { IconSize } from "@/types/client-types";

export function Unity({
    size = 26,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size} viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 17.3333L15.2917 19.5V15.1667L19.0833 13L15.2917 10.8333V6.5L11.5 8.66667L7.70833 6.5V10.8333L3.91667 13L7.70833 15.1667V19.5L11.5 17.3333Z" fill={color}/>
            <path d="M22.875 10.8333L19.0833 13V8.66667L15.2917 6.5L19.0833 4.33333L22.875 6.5V10.8333Z" fill={color}/>
            <path d="M22.875 15.1667L19.0833 13V17.3333L15.2917 19.5L19.0833 21.6667L22.875 19.5V15.1667Z" fill={color}/>
            <path d="M7.70833 23.8333V19.5L11.5 21.6667L15.2917 19.5V23.8333L11.5 26L7.70833 23.8333Z" fill={color}/>
            <path d="M0.125 15.1667L3.91667 13V17.3333L7.70833 19.5L3.91667 21.6667L0.125 19.5V15.1667Z" fill={color}/>
            <path d="M0.125 10.8333L3.91667 13V8.66667L7.70833 6.5L3.91667 4.33333L0.125 6.5V10.8333Z" fill={color}/>
            <path d="M7.70833 2.16667V6.5L11.5 4.33333L15.2917 6.5V2.16667L11.5 0L7.70833 2.16667Z" fill={color}/>
        </svg>
    );
};