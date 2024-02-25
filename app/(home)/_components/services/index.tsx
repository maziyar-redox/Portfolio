import { Cmd } from "@/components/svg/cmd";
import { DevicePhone } from "@/components/svg/device-phone";
import { CursorArrow } from "@/components/svg/cursor-arrow";
import { Bolt } from "@/components/svg/bolt";

import { Card } from "./cards";

import { TextAnimation } from "@/components/HoveringText";

const items = [
    {
        id: 1,
        header: "Web Development",
        caption: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.",
        icon: <Cmd size={30} />,
        href: "/services"
    },
    {
        id: 2,
        header: "Mobile App Development",
        caption: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
        icon: <DevicePhone size={30} />,
        href: "/services"
    },
    {
        id: 3,
        header: "Web Design",
        caption: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
        icon: <CursorArrow size={30} />,
        href: "/services"
    },
    {
        id: 4,
        header: "Digital Marketing",
        caption: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
        icon: <Bolt size={30} />,
        href: "/services"
    },
];

export function Services() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 md:mt-0 space-y-8 lg:space-y-16">
            <TextAnimation
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    x: 0
                }}
                HighlightTextAnimation={{
                    opacity: 0,
                    x: -75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    x: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    x: 75
                }}
                HighlightText="My"
                Text="Services"
                Caption="Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you&apos;re a startup or an established enterprise, our experts will craft solutions that drive results."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {items.map((item) => (
                    <Card
                        id={item.id}
                        header={item.header}
                        icon={item.icon}
                        caption={item.caption}
                        href={item.href}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};