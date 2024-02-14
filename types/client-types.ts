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
    category?: string;
    img?: string;
    time?: Date;
};

export interface IconSize {
    color?: string;
    size?: number;
};

export interface AccourditionType {
    data: {
        ac_header: string;
        ac_caption: string;
        ac_id: number;
    }[];
};