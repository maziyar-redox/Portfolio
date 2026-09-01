import { Link } from "react-router";

import { cn } from "@/client/core/lib/utils";

import type { SocialButtonProps } from "@/client/core/types/landing";

import { buttonVariants } from "@/client/components/ui/button";

function SocialButton({
    href,
    Icon
}: SocialButtonProps) {
    return (
        <Link
            to={href}
            className={cn(
                buttonVariants({ variant: "ghost", size: "icon-lg" }),
                "hover:text-primary dark:hover:bg-muted size-10"
            )}
        >
            <Icon className="size-5.5" />
        </Link>
    );
};

export default SocialButton;