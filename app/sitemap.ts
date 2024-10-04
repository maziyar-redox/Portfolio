import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://maziyar-isa.ir/blog",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://maziyar-isa.ir/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://maziyar-isa.ir/services",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://maziyar-isa.ir/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://maziyar-isa.ir/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
};