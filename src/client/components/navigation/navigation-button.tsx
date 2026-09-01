import { Link } from "react-router";

import type { NavigationLinkProps } from "@/client/core/types/navigation";

import { cn } from "@/client/core/lib/utils";

import { useActiveSection } from "@/client/core/stores/useActiveSection";
import { ScrollToAnchor } from "@/client/core/lib/ScrollToAnchor";

function NavigationButton({
    href,
    text
}: NavigationLinkProps) {
    const { activeSection, setActiveSection } = useActiveSection((state) => state);
    return (
        <Link
            to={href}
            onClick={() => {
                ScrollToAnchor();
                setActiveSection(href.split("#")[1]);
            }}
            className={cn(
                "hover:text-primary transition-colors",
                ("/#" + activeSection) === href && "text-primary"
            )}
        >
            {text}
        </Link>
    );
};

export default NavigationButton;