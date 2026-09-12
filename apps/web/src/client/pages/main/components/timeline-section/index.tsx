import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { Container } from "@/client/components/zippystarter/container";

import { Pattern } from "@/client/pages/main/components/timeline-section/pattern";
import { useActiveSection } from "@/client/core/stores/useActiveSection";

function TimeLineSection() {
    const { setActiveSection } = useActiveSection((state) => state);
    const { ref, inView } = useInView({
        threshold: 0.7, // Trigger when 30% of the element is visible
        triggerOnce: false, // Only trigger once (good for animations)
    });

    useEffect(() => {
        if (inView) {
            setActiveSection("timeline");
        };
    }, [inView]);
    return (
        <Container
            id="timeline"
            component="section"
            wrapperClassName="py-24 bg-secondary/20 border-t border-border"
            className="mx-auto max-w-7xl flex-1"
        >
            <div className="md:col-span-4">
                <h2 className="text-4xl font-display tracking-tighter mb-6">
                    WORK_EXPERIENCE
                </h2>
                <p className="text-muted-foreground mb-8">
                    My work and project experiences listed here.
                </p>
            </div>

            <div className="justify-center items-center flex" ref={ref}>
                <Pattern />
            </div>
        </Container>
    );
};

export default TimeLineSection;