import type { SocialButtonProps } from "@/client/core/types/landing";

import { GithubLogoIcon, LinkedinLogoIcon, TelegramLogoIcon } from "@phosphor-icons/react";

const LandingSocialButton: SocialButtonProps[] = [
    {
        href: "https://github.com/maziyar-redox",
        Icon: GithubLogoIcon
    },
    {
        href: "https://linkedin.com/in/maziyar-isanezhad",
        Icon: LinkedinLogoIcon
    },
    {
        href: "https://t.me/sys_127",
        Icon: TelegramLogoIcon
    },
];

export {
    LandingSocialButton
};