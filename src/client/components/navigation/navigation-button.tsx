import { Link } from "react-router";

import type { NavigationLinkProps } from "@/client/core/types/navigation";

function NavigationButton({
    href,
    text
}: NavigationLinkProps) {
    return (
        <Link
            to={href}
            className="hover:text-primary transition-colors"
        >
            {text}
        </Link>
    );
};

export default NavigationButton;