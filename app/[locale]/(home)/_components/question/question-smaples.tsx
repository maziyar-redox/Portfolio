import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordition";

import type { AccourditionType } from "@/types";

export function QuestionSmaples(AccordionContentData: AccourditionType) {
    return (
        <Accordion type="multiple">
            {AccordionContentData.data.map((items) => (
                <AccordionItem value={`item-${items.ac_id}`} key={items.ac_id}>
                    <AccordionTrigger className="text-xs lg:text-base">
                        {items.ac_header}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-[500px]">
                        {items.ac_caption}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};