import type { Variant } from "framer-motion";
import type { AnimationControls } from "framer-motion";
import type { VariantProps as variantProps } from "class-variance-authority";
import type { buttonVariants } from "@/components/ui/button";

export interface ButtonProps {
    type: "INNER" | "OUTER"
    variant: variantProps<typeof buttonVariants>;
    href: string;
    children: React.ReactNode;
};

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
    price?: string
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

export interface FooterIconsProps {
    icon: React.ReactNode;
    href: string;
};

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

export interface CategoryContentProps {
    CategoryId: string;
    CategoryHeader: string;
    CategoryCaption: string;
    CategoryFeatures: {
        Id: number;
        Header: string;
        Caption: string;
    }[];
    CategoryDProcess: {
        Id: number;
        Header: string;
        Caption: string;
    }[];
};

export interface CategoryComponent {
    classNames?: string;
    children: React.ReactNode;
    isCaption: boolean;
    header: string;
    caption?: string;
    mainControls: AnimationControls;
    transition: number;
};

export interface SuccessCategoryItemProps {
    icon: React.ReactNode;
    head: string;
};

export interface SuccessCardProps {
    MainIcon: React.ReactNode;
    head: string;
    categoryCardItems: SuccessCategoryItemProps[];
    href: string;
    challengeCaption: string;
    SolutionCaption: string;
};