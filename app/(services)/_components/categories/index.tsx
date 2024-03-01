import { Cmd } from "@/components/svg/cmd";
import { DevicePhone } from "@/components/svg/device-phone";
import { CursorArrow } from "@/components/svg/cursor-arrow";
import { Bolt } from "@/components/svg/bolt";

import { TextAnimation } from "@/components/HoveringText";

import { CategoryButton } from "./category-button";
import { CategoryContent } from "./category-content";

const item = [
    {
        id: 1,
        icon: <CursorArrow size={20} />,
        text: "Web Design",
        href: "design",
        caption: "Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.",
        features: [
            {
                Id: 1,
                Header: "Customized Design",
                Caption: "We craft bespoke designs tailored to match your brand personality and industry."
            },
            {
                Id: 2,
                Header: "Responsive Design",
                Caption: "Ensuring your website adapts seamlessly to different devices and screen sizes."
            },
            {
                Id: 3,
                Header: "User-Centric Approach",
                Caption: "Prioritizing ease of navigation and intuitive user experience."
            },
            {
                Id: 4,
                Header: "Visual Elements",
                Caption: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal."
            },
        ],
        process: [
            {
                Id: 1,
                Header: "Discovery & Planning",
                Caption: "We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy."
            },
            {
                Id: 2,
                Header: "Wireframing & Prototyping",
                Caption: "Creating wireframes and interactive prototypes to visualize the website's layout and user flow."
            },
            {
                Id: 3,
                Header: "Design & Development",
                Caption: "Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life."
            },
            {
                Id: 4,
                Header: "Testing & Review",
                Caption: "We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage."
            },
        ],
    },
    {
        id: 2,
        icon: <Cmd size={20} />,
        text: "Web Development",
        href: "development",
        caption: "Web Design is the art and science of creating. visually appealing and user-friendly websites that reflect your brand identity.",
        features: [
            {
                Id: 1,
                Header: "Customized Design",
                Caption: "We craft bespoke designs tailored to match your brand personality and industry."
            },
            {
                Id: 2,
                Header: "Responsive Design",
                Caption: "Ensuring your website adapts seamlessly to different devices and screen sizes."
            },
            {
                Id: 3,
                Header: "User-Centric Approach",
                Caption: "Prioritizing ease of navigation and intuitive user experience."
            },
            {
                Id: 4,
                Header: "Visual Elements",
                Caption: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal."
            },
        ],
        process: [
            {
                Id: 1,
                Header: "Discovery & Planning",
                Caption: "We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy."
            },
            {
                Id: 2,
                Header: "Wireframing & Prototyping",
                Caption: "Creating wireframes and interactive prototypes to visualize the website's layout and user flow."
            },
            {
                Id: 3,
                Header: "Design & Development",
                Caption: "Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life."
            },
            {
                Id: 4,
                Header: "Testing & Review",
                Caption: "We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage."
            },
        ],
    },
    {
        id: 3,
        icon: <DevicePhone size={20} />,
        text: "App Development",
        href: "app",
        caption: "Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website.",
        features: [
            {
                Id: 1,
                Header: "Customized Design",
                Caption: "We craft bespoke designs tailored to match your brand personality and industry."
            },
            {
                Id: 2,
                Header: "Responsive Design",
                Caption: "Ensuring your website adapts seamlessly to different devices and screen sizes."
            },
            {
                Id: 3,
                Header: "User-Centric Approach",
                Caption: "Prioritizing ease of navigation and intuitive user experience."
            },
            {
                Id: 4,
                Header: "Visual Elements",
                Caption: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal."
            },
        ],
        process: [
            {
                Id: 1,
                Header: "Discovery & Planning",
                Caption: "We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy."
            },
            {
                Id: 2,
                Header: "Wireframing & Prototyping",
                Caption: "Creating wireframes and interactive prototypes to visualize the website's layout and user flow."
            },
            {
                Id: 3,
                Header: "Design & Development",
                Caption: "Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life."
            },
            {
                Id: 4,
                Header: "Testing & Review",
                Caption: "We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage."
            },
        ],
    },
    {
        id: 4,
        icon: <Bolt size={20} />,
        text: "Digital Marketing",
        href: "digital",
        caption: "Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.",
        features: [
            {
                Id: 1,
                Header: "Customized Design",
                Caption: "We craft bespoke designs tailored to match your brand personality and industry."
            },
            {
                Id: 2,
                Header: "Responsive Design",
                Caption: "Ensuring your website adapts seamlessly to different devices and screen sizes."
            },
            {
                Id: 3,
                Header: "User-Centric Approach",
                Caption: "Prioritizing ease of navigation and intuitive user experience."
            },
            {
                Id: 4,
                Header: "Visual Elements",
                Caption: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal."
            },
        ],
        process: [
            {
                Id: 1,
                Header: "Discovery & Planning",
                Caption: "We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy."
            },
            {
                Id: 2,
                Header: "Wireframing & Prototyping",
                Caption: "Creating wireframes and interactive prototypes to visualize the website's layout and user flow."
            },
            {
                Id: 3,
                Header: "Design & Development",
                Caption: "Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life."
            },
            {
                Id: 4,
                Header: "Testing & Review",
                Caption: "We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage."
            },
        ],
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
            <div className="flex flex-col md:flex-row justify-between items-start space-y-20 md:space-y-0 w-full">
                <div className="flex flex-col justify-center items-center space-y-2.5 w-full md:w-auto">
                    {item.map((items) => (
                        <CategoryButton
                            href={items.href}
                            key={items.id}
                            text={items.text}
                            icon={items.icon}
                        />
                    ))}
                </div>
                {item.map((items) => (
                    <CategoryContent
                        key={items.id}
                        CategoryId={items.href}
                        CategoryHeader={items.text}
                        CategoryCaption={items.caption}
                        CategoryFeatures={items.features}
                        CategoryDProcess={items.process}
                    />
                ))}
            </div>
        </div>
    );
};