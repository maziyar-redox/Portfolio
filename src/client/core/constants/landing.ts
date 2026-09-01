import type { SocialButtonProps } from "@/client/core/types/landing";

import { GithubLogoIcon, LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react";

const LandingSocialButton: SocialButtonProps[] = [
    {
        href: "#",
        Icon: GithubLogoIcon
    },
    {
        href: "#",
        Icon: LinkedinLogoIcon
    },
    {
        href: "#",
        Icon: MailboxIcon
    },
];

export {
    LandingSocialButton
};