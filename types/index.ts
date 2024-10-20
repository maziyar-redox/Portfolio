import type { Variant } from "framer-motion";

export interface FooterLinksType {
    data : {
        Header_id: number;
        text: string;
        links: {
            Link_id: number;
            text: string;
            href: string;
        }[];
    }[];
};

export interface VariantProps {
    VisibleHighlightTextAnimation: Variant;
    VisibleCaptionAnimation: Variant;
    HighlightTextAnimation: Variant;
    CaptionAnimation: Variant;
    Text: string;
    HighlightText: string;
    Caption: string;
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
    price?: string
};

export interface ButtonProps {
    href: string;
    children: React.ReactNode;
};

export interface AccourditionType {
    data: {
        ac_header: string;
        ac_caption: string;
        ac_id: number;
    }[];
};