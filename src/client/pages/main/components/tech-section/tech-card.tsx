import type { TechCardProps } from "@/client/core/types/constants";

function TechCard({
    text,
    Icon,
}: TechCardProps) {
    return (
        <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
            <Icon className="h-8 w-8 mb-2 text-primary" />
            <span className="font-mono text-xs uppercase">
                {text}
            </span>
        </div>
    );
};

export default TechCard;