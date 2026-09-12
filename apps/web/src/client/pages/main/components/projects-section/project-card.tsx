import { Link } from "react-router";

import {ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";

import { ProjectImage } from "@/client/components/project-image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/client/components/ui/card";
import { Badge } from "@/client/components/ui/badge";

import type { ProjectsProps } from "@/client/core/types/constants";

function ProjectCard({
    title,
    description,
    tags,
    image,
    link,
    repo,
}: ProjectsProps) {
    return (
        <Card
            className="pt-0 group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-none overflow-hidden grid grid-rows-subgrid row-span-3 content-start items-start"
        >
            <ProjectImage src={image} alt={title} />
            <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                    <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                        {title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="font-mono text-xs"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base">
                        {description}
                    </CardDescription>
                </CardContent>
            </div>
            <div className="flex justify-between pt-0 px-4">
                <Link
                    to={link}
                    className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                    LIVE DEMO <ArrowSquareOutIcon className="size-4" />
                </Link>
                <Link
                    to={repo}
                    className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                    CODE <GithubLogoIcon className="size-4" />
                </Link>
            </div>
        </Card>
    );
};

export default ProjectCard;