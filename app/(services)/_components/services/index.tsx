import { Cmd } from "@/components/svg/cmd";
import { DevicePhone } from "@/components/svg/device-phone";
import { CursorArrow } from "@/components/svg/cursor-arrow";
import { Bolt } from "@/components/svg/bolt";

import { Card } from "./cards";

import { TextAnimation } from "@/components/HoveringText";

import { NumberToCurrency } from "@/lib/currency";

const items = [
    {
        id: 1,
        header: "Web Design",
        caption: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
        icon: <CursorArrow size={30} />,
        price: NumberToCurrency(1500),
        href: "/services"
    },
    {
        id: 2,
        header: "Web Development",
        caption: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build dynamic and scalable websites that cater to your business objectives.",
        icon: <Cmd size={30} />,
        price: NumberToCurrency(1800),
        href: "/services"
    },
    {
        id: 3,
        header: "Mobile App Development",
        caption: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
        icon: <DevicePhone size={30} />,
        price: NumberToCurrency(1100),
        href: "/services"
    },
    {
        id: 4,
        header: "Digital Marketing",
        caption: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility, attract targeted traffic, and boost conversions. From SEO and PPC campaigns to social media marketing, we've got your digital marketing needs covered.",
        icon: <Bolt size={30} />,
        price: NumberToCurrency(1200),
        href: "/services"
    },
];

export function Services() {
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
                HighlightText="Our"
                Text="Services"
                Caption="At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {items.map((item) => (
                    <Card
                        id={item.id}
                        header={item.header}
                        icon={item.icon}
                        caption={item.caption}
                        href={item.href}
                        price={item.price}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};