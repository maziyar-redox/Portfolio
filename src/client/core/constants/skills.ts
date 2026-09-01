import { CodeIcon, CpuIcon, DatabaseIcon, TerminalIcon } from "@phosphor-icons/react";

import type { SkillsProps, TechCardProps } from "@/client/core/types/constants";

const skills: SkillsProps[] = [
    {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Next.js"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Go", "PostgreSQL", "Redis", "Docker"],
    },
    {
        category: "Tools",
        items: ["Git", "Linux", "AWS", "Kubernetes", "Figma"],
    },
];

const techs: TechCardProps[] = [
    {
        text: "CLEAN_CODE",
        Icon: CodeIcon,
    },
    {
        text: "SCALABLE_DB",
        Icon: DatabaseIcon,
    },
    {
        text: "PERFORMANCE",
        Icon: CpuIcon,
    },
    {
        text: "DEVOPS",
        Icon: TerminalIcon,
    },
];

export {
    skills,
    techs
};