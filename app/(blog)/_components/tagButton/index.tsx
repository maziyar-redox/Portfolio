import { Button } from "@/components/ui/button";

import { tag_data } from "@/data/data";

export function TagButton() {
    return (
        <div className="flex items-center justify-center py-16">
            <ul className="flex flex-row justify-center gap-x-2 border-white border rounded-full p-1.5 overflow-hidden">
                {tag_data.map(items => (
                    <Button key={items.id} size="default" className="font-normal" variant="selected">
                        {items.text}
                    </Button>
                ))}
            </ul>
        </div>
    );
};