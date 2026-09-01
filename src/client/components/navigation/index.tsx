import { NavigationLinks } from "@/client/core/constants/navigation-links";

import { Container } from "@/client/components/zippystarter/container";

import Logo from "@/client/components/navigation/logo";
import NavigationButton from "@/client/components/navigation/navigation-button";
import ResumeButton from "@/client/components/navigation/resume-button";

function Navigation() {
    return (
        <Container
            component="header"
            wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
            className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
        >
            <Logo />
            <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground ">
                {NavigationLinks.map((items, index) => (
                    <NavigationButton
                        key={index}
                        text={items.text}
                        href={items.href}
                    />
                ))}
            </nav>
            <ResumeButton />
        </Container>
    );
};

export default Navigation;