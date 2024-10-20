import { TextAnimation } from "@/components/animatedText";
import { ProjectCard } from "@/components/projectCard";
import { Button } from "@/components/ui/button";

import { IoMdArrowForward } from "react-icons/io";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { Link } from "@/i18n/routing";

/* TODO : THIS SECTION IS MUST FETCH FROM DATA BASE */
const projects = [
    {
        id: 1,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <FaReact size={50} />,
        img: "/img/2.jpg",
        href: "/"
    },
    {
        id: 2,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <RiNextjsFill size={50} />,
        img: "/img/2.jpg",
        href: "/"
    },
    {
        id: 3,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <FaPython size={50} />,
        img: "/img/2.jpg",
        href: "/"
    },
    {
        id: 4,
        header: "Innovative E-commerce Platform",
        caption: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
        category: "Web Development",
        time: new Date(),
        icon: <BiLogoPostgresql size={50} />,
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
                    <ProjectCard
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
            <Button variant="border" asChild>
                <Link href="/projects" className="font-extralight text-xs gap-x-2">
                    <span>
                        View Project Detail
                    </span>
                    <IoMdArrowForward size={15} />
                </Link>
            </Button>
        </div>
    );
};