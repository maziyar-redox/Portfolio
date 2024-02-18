import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DigitalCard() {
    return (
        <div className="border border-gray-10 bg-gray-12/20 flex flex-col justify-center items-center space-y-5 rounded-2xl px-5 md:px-40 pt-16 mt-10 mx-0 md:mx-10">
            <h1 className="text-3xl text-white font-semibold text-center">
                Ready to Transform Your Digital Presence?
            </h1>
            <p className=" text-xs md:text-sm text-white-50 text-center">
                Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we&apos;ve got you covered. Let&apos;s embark on this transformative journey together.
            </p>
            <div className="flex flex-col space-y-2">
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
            {/* eslint-disable-next-line */}
            <img
                src="/img/logo.png"
                className="object-cover object-center w-96 h-96"
            />
        </div>
    );
};