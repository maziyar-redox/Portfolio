import { useState } from "react";

import { cn } from "@/client/core/lib/utils";

interface ProjectImageProps {
    src: string;
    alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
        className={cn(
            "bg-primary relative aspect-square overflow-hidden border-b border-border transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
        )}
        >
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale mix-blend-luminosity dark:mix-blend-darken"
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
}