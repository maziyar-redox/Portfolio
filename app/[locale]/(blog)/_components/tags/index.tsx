"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";

type TagButtonProps = {
    tags: string[];
};

export function TagButton({
    tags
}: TagButtonProps) {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center py-16">
            <ul className="flex flex-wrap flex-row justify-center gap-2 border-gray-shade-15 border rounded-full p-1.5 overflow-hidden">
                {tags.map(items => (
                    <Button key={items} size="default" className="font-normal" variant="outline" onClick={() => {
                        router.push("tags" + items);
                    }}>
                        {items}
                    </Button>
                ))}
            </ul>
        </div>
    );
};