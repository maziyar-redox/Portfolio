import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

import Image from "next/image";

export function DigitalCard() {
    return (
        <div className="border border-gray-shade-15 bg-gray-shade-12/25 flex flex-col justify-center items-center space-y-5 rounded-2xl px-5 md:px-40 pt-16 mx-0 md:mx-10">
            <h1 className="text-3xl text-foreground font-semibold text-center">
                Ready to Transform Your Digital Presence?
            </h1>
            <p className=" text-xs md:text-sm text-caption text-center">
                Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we&apos;ve got you covered. Let&apos;s embark on this transformative journey together.
            </p>
            <div className="flex flex-col space-y-2">
                <h6 className="font-normal text-foreground text-sm pt-6">
                    Unlock Your Digital Potential Today
                </h6>
                <div className="flex flex-row space-x-2.5">
                    <Button asChild variant="secondary">
                        <Link href="#">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="#">
                            Contact me
                        </Link>
                    </Button>
                </div>
            </div>
            <Image
                src="https://raw.githubusercontent.com/maziyar-redox/my-blog-posts/refs/heads/main/logo/logo.png"
                width={690}
                height={690}
                alt="mrRedox Logo"
                className="object-center object-cover"
            />
        </div>
    );
};