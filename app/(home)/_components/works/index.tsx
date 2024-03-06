import { ReactIcon } from "@/components/svg/react-icon";

import { TextAnimation } from "@/components/HoveringText";

import { Card } from "./cards";

import { CardButton } from "@/app/_components/card-button";

/* TODO : THIS SECTION IS MUST FETCH FROM DATA BASE */
const projects = [
    {
        id: 1,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <ReactIcon />,
        img: "/img/2.jpg",
        href: "/"
    },
    {
        id: 2,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <ReactIcon />,
        img: "/img/2.jpg",
        href: "/"
    },
    {
        id: 3,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <ReactIcon />,
        img: "/img/2.jpg",
        href: "/"
    },
    {
        id: 4,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <ReactIcon />,
        img: "/img/2.jpg",
        href: "/"
    },
];

export function Works() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 md:mt-0 space-y-8 lg:space-y-16">
            <TextAnimation
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    y: 0
                }}
                HighlightTextAnimation={{
                    opacity: 0,
                    y: -75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    y: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    y: 75
                }}
                HighlightText="My"
                Text="Works"
                Caption="Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we&apos;ve had with diverse clients across various industries. Let our work speak for itself."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {projects.map((items) => (
                    <Card
                        id={items.id}
                        key={items.id}
                        icon={items.icon}
                        header={items.header}
                        href={items.href}
                        caption={items.caption}
                        category={items.category}
                        time={items.time}
                        img={items.img}
                    />
                ))}
            </div>
            <CardButton type="OUTER" variant={{
                variant: "projectDetail"
            }} href="/">
                View All Project
            </CardButton>
        </div>
    );
};