import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "MrRedox Portfolio",
        short_name: "portfolio",
        description: "Full-Stack Developer and computer engineering student",
        start_url: "/",
        display: "standalone",
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
};