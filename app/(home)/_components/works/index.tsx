import { ReactIcon } from "@/components/svg/react-icon";
import { Card } from "./cards";
import { TextItems } from "./text-items";
import { ProjectDetail } from "./project-detail";

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
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
            <TextItems />
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
            <ProjectDetail
                text="View All Projects"
                href="/"
            />
        </div>
    );
};