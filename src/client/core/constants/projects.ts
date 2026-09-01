import type { ProjectsProps } from "@/client/core/types/constants";

import IMG1 from "@/client/assets/project-placeholder-1.jpg";
import IMG2 from "@/client/assets/project-placeholder-2.jpg";
import IMG3 from "@/client/assets/project-placeholder-3.jpg";

const projects: ProjectsProps[] = [
    {
        title: "Nebula Dashboard",
        description:
            "Real-time analytics platform for distributed systems. Built with React, WebSocket, and Go.",
        tags: ["React", "Go", "WebSocket", "D3.js"],
        image: IMG1,
        link: "#",
        repo: "#",
    },
    {
        title: "Void Chain",
        description:
            "Decentralized identity verification protocol. Smart contracts written in Solidity.",
        tags: ["Solidity", "Ethereum", "Web3.js", "Node.js"],
        image: IMG2,
        link: "#",
        repo: "#",
    },
    {
        title: "Cyber Construct",
        description:
            "3D architectural visualization tool running in the browser using WebGL.",
        tags: ["Three.js", "WebGL", "Vue", "Python"],
        image: IMG3,
        link: "#",
        repo: "#",
    },
];

export {
    projects
}