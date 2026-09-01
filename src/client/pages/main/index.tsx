import HeroSection from "@/client/pages/main/components/hero-section";
import ProjectSection from "@/client/pages/main/components/projects-section";
import TechSection from "@/client/pages/main/components/tech-section";
import BlogsSection from "@/client/pages/main/components/blogs-section";
import ContactSection from "@/client/pages/main/components/contact-section";

function Component() {
    return (
        <>
            <HeroSection />
            <ProjectSection />
            <TechSection />
            <BlogsSection />
            <ContactSection />
        </>
    );
};

export {
    Component
};