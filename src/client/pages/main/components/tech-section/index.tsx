import { Container } from "@/client/components/zippystarter/container";

import { skills, techs } from "@/client/core/constants/skills";

import TechCard from "@/client/pages/main/components/tech-section/tech-card";

function TechSection() {
    return (
        <Container
            id="skills"
            component="section"
            wrapperClassName="py-24 bg-secondary/20 border-t border-border"
            className="mx-auto max-w-7xl flex-1"
        >
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-4xl font-display tracking-tighter mb-6">
                        TECH_STACK
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        My preferred weapons of choice for building digital products.
                        Always learning, always evolving.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {techs.map((items, index) => (
                            <TechCard
                                key={index}
                                text={items.text}
                                Icon={items.Icon}
                            />
                        ))}
                    </div>
                </div>

                <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <li
                                        key={sIdx}
                                        className="flex items-center justify-between group"
                                    >
                                        <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            {skill}
                                        </span>
                                        <div className="h-0.5 w-12 bg-secondary group-hover:bg-primary transition-colors" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default TechSection;