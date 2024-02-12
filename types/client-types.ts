export interface NavbarLinkContainerProps {
    href: string;
    text: string;
};

export interface CardProps {
    id: number;
    href: string;
    icon: React.ReactNode;
    header: string;
    caption: string;
};

export interface IconSize {
    color?: string;
    size?: number;
};