import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/80 border border-gray-shade-15",
                secondary: "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80",
                selected: "text-white border border-gray-shade-12 bg-gray-shade-10 rounded-3xl 3xl:rounded-full",
                not_selected: "text-white-shade-90 hover:text-white border-transparent hover:border-gray-shade-12 hover:bg-gray-shade-10 rounded-3xl",
                destructive: "bg-gray-shade-12 text-destructive-foreground shadow-sm hover:bg-destructive",
                scale: "bg-gray-shade-12 hover:bg-red-shade-2 hover:scale-105 hover:border-none transition-all border border-gray-shade-15 rounded-full",
                border: "bg-gray-shade-10 border border-gray-shade-12 hover:border-white transition-all rounded-full",
                outline: "text-white border border-gray-shade-12 bg-transparent shadow-sm hover:bg-gray-shade-15",
                ghost: "hover:bg-gray-shade-15 text-white",
            },
            size: {
                default: "h-10 px-4 py-2",
                icon: "h-10 w-10",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };