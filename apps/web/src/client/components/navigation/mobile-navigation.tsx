import { ListIcon } from "@phosphor-icons/react";

import { NavigationLinks } from "@/client/core/constants/navigation-links";

import { Sheet, SheetContent, SheetTrigger } from "@/client/components/ui/sheet";
import { buttonVariants } from "@/client/components/ui/button";

import { cn } from "@/client/core/lib/utils";

import { ScrollToAnchor } from "@/client/core/lib/ScrollToAnchor";

import { Link } from "react-router";

import { useActiveTopScroll } from "@/client/core/stores/useActiveTopScroll";

function MobileNavigation() {
    const { setActiveElement } = useActiveTopScroll((state) => state);

    return (
        <Sheet onOpenChangeComplete={(e) => setActiveElement(!e)}>
            <SheetTrigger className={cn(
                buttonVariants({ variant: "outline", size: "icon-lg" }),
                "flex md:hidden"
            )}>
                <ListIcon className="text-primary" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-start items-center w-full px-11 pt-16">
                {NavigationLinks.map((items, index) => (
                    <Link
                        key={index}
                        to={items.href}
                        onClick={() => {
                            ScrollToAnchor();
                        }}
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "w-full"
                        )}
                    >
                        {items.text}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavigation;