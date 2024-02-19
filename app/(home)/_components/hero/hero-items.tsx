import { Button } from "@/components/ui/button";

import Link from "next/link";

export function HeroItems() {
    return (
        <div className="w-fit mx-auto">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-2.5 mx-5 lg:mx-0">
                <div className="max-w-[600px]">
                    <h1 className="font-semibold text-2xl lg:text-4xl text-center lg:text-start">
                        Experiensed <span className="text-red-600">Full-Stack Developer</span>
                    </h1>
                </div>
                <div className="max-w-[500px]">
                    <p className="text-xs text-white-65 text-center lg:text-start">
                        At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.
                    </p>
                </div>
                <h6 className="font-normal text-white text-sm pt-6">
                    Unlock Your Digital Potential Today
                </h6>
                <div className="flex flex-row space-x-2.5">
                    <Button asChild size="default" className="rounded-full font-normal" variant="default">
                        <Link href="/services">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild size="default" className="font-normal" variant="selected">
                        <Link href="/about">
                            Contact me
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};