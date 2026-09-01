import { Helmet } from "react-helmet-async";

import HeroSection from "@/client/pages/main/components/hero-section";
import ProjectSection from "@/client/pages/main/components/projects-section";
import TechSection from "@/client/pages/main/components/tech-section";
import BlogsSection from "@/client/pages/main/components/blogs-section";
import ContactSection from "@/client/pages/main/components/contact-section";

import { HomePageMetaData } from "@/client/core/constants/metadata";

function Component() {
    return (
        <>
            <Helmet>
                <title>
                    {HomePageMetaData.title}
                </title>
                <meta name="description" content={HomePageMetaData.description} />
                <meta name="keywords" content={HomePageMetaData.keywords.join(" ,")} />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Maziyar Isanezhad" />
            </Helmet>
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