import { Cmd } from "@/components/svg/cmd";
import { DevicePhone } from "@/components/svg/device-phone";
import { CursorArrow } from "@/components/svg/cursor-arrow";
import { Bolt } from "@/components/svg/bolt";

import { TextAnimation } from "@/components/HoveringText";

import { CategoryButton } from "./category-button";

const item = [
    {
        id: 1,
        icon: <CursorArrow size={20} />,
        text: "Web Design",
        href: "design"
    },
    {
        id: 2,
        icon: <Cmd size={20} />,
        text: "Web Development",
        href: "development"
    },
    {
        id: 3,
        icon: <DevicePhone size={20} />,
        text: "App Development",
        href: "app"
    },
    {
        id: 4,
        icon: <Bolt size={20} />,
        text: "Digital Marketing",
        href: "digital"
    },
];

export function Categories() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-12 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
            <TextAnimation
                HighlightTextAnimation={{
                    opacity: 0,
                    y: 75
                }}
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    y: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    y: -75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    y: 0
                }}
                HighlightText="Categories Of"
                Text="Services"
                Caption="At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing."
            />
            <div className="flex flex-col md:flex-row justify-between items-start w-full">
                <div className="flex flex-col justify-center items-center space-y-2.5">
                    {item.map((items) => (
                        <CategoryButton
                            href={items.href}
                            key={items.id}
                            text={items.text}
                            icon={items.icon}
                        />
                    ))}
                </div>
                <div id="fff" className="flex flex-col justify-center items-center w-full md:mx-10 space-y-2.5">
                    <h1 className="font-semibold text-white text-xl text-start w-full">
                        Web Design
                    </h1>
                    <p className="text-white-55 text-xs text-start font-normal">
                        Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.
                    </p>
                </div>
            </div>
        </div>
    );
};