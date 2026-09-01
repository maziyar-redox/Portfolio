import { ArrowRightIcon } from "@phosphor-icons/react";

import { Link } from "react-router";

import { buttonVariants } from "@/client/components/ui/button";

import { Container } from "@/client/components/zippystarter/container";

import { cn } from "@/client/core/lib/utils";

import { LandingSocialButton } from "@/client/core/constants/landing";

import SocialButton from "@/client/pages/main/components/hero-section/social-button";

function HeroSection() {
    return (
        <Container
            wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
            className="mx-auto max-w-7xl flex-1"
        >

            <div className="absolute inset-0 z-0">
                <div className="relative w-screen h-screen bg-background overflow-hidden">
                    <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/hero-bg.jpg)] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color`} />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        SYSTEM ONLINE // AVAILABLE FOR HIRE
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display tracking-tighter leading-[0.9]">
                        FULL
                        <br />
                        STACK
                        <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-foreground">
                            DEV_
                        </span>
                    </h1>
                    <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
                        Architecting digital voids and crafting high-performance web
                        experiences. Specialized in scalable distributed systems and
                        interactive 3D interfaces.
                    </p>
                    <div className="flex gap-4 pt-4 items-center">
                        <Link
                            to="#projects"
                            className={cn("uppercase pt-1", buttonVariants({ size: "lg" }), "h-11")}
                        >
                            View projects <ArrowRightIcon className="size-4" />
                        </Link>
                        <div className="flex gap-2">
                            {LandingSocialButton.map((items, index) => (
                                <SocialButton
                                    key={index}
                                    href={items.href}
                                    Icon={items.Icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Abstract Element */}
                <div className="hidden md:block relative h-125 w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
                    <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary" />

                    <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
                        <div className="flex justify-between">
                            <span>SYS.STATUS: NORMAL</span>
                            <span>UPTIME: 99.9%</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-1 w-full bg-secondary overflow-hidden">
                                <div className="h-full bg-primary w-[75%]" />
                            </div>
                            <div className="flex justify-between">
                                <span>CPU_LOAD</span>
                                <span>75%</span>
                            </div>
                            <div className="h-1 w-full bg-secondary overflow-hidden">
                                <div className="h-full bg-primary w-[42%]" />
                            </div>
                            <div className="flex justify-between">
                                <span>MEM_USAGE</span>
                                <span>42%</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="block text-4xl font-bold text-foreground">
                                03
                            </span>
                            <span>ACTIVE_PROJECTS</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;