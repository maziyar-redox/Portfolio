import { IconSize } from "@/types/client-types";

export function ArrowSmallRight({
    size = 18,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size - 2} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.75 8C0.75 7.58579 1.08579 7.25 1.5 7.25L14.6893 7.25L9.21967 1.78033C8.92678 1.48744 8.92678 1.01256 9.21967 0.71967C9.51256 0.426777 9.98744 0.426777 10.2803 0.71967L17.0303 7.46967C17.3232 7.76256 17.3232 8.23744 17.0303 8.53033L10.2803 15.2803C9.98744 15.5732 9.51256 15.5732 9.21967 15.2803C8.92678 14.9874 8.92678 14.5126 9.21967 14.2197L14.6893 8.75L1.5 8.75C1.08579 8.75 0.75 8.41421 0.75 8Z" fill={color}/>
        </svg>
    );
};