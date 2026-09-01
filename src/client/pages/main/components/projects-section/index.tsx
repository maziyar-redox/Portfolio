import { Container } from "@/client/components/zippystarter/container";
import { projects } from "@/client/core/constants/projects";
import { useActiveSection } from "@/client/core/stores/useActiveSection";

import ProjectCard from "@/client/pages/main/components/projects-section/project-card";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ProjectSection() {
    const { setActiveSection } = useActiveSection((state) => state);
    const { ref, inView } = useInView({
        threshold: 0.7, // Trigger when 30% of the element is visible
        triggerOnce: false, // Only trigger once (good for animations)
    });

    useEffect(() => {
        if (inView) {
            setActiveSection("projects");
        };
    }, [inView]);
    return (
        <Container
            id="projects"
            component="section"
            wrapperClassName="py-24 border-t border-border"
            className="mx-auto max-w-7xl flex-1"
        >

            <div className="grid justify-between items-end mb-16 gap-4">
                <div>
                    <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-4">
                        SELECTED
                        <br />
                        WORKS
                    </h2>
                    <div className="h-1 w-24 bg-primary" />
                </div>
                <p className="text-muted-foreground max-w-sm text-left">
                    A collection of experiments, production apps, and open source
                    contributions.
                </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] grid-rows-[repeat(3,auto)] gap-6" ref={ref}>
                {projects.map((items, index) => (
                    <ProjectCard
                        key={index}
                        title={items.title}
                        description={items.description}
                        tags={items.tags}
                        image={items.image}
                        link={items.link}
                        repo={items.repo}
                    />
                ))}
            </div>
        </Container>
    );
};

export default ProjectSection;