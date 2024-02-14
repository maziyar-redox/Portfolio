import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccourditionType } from "@/types/client-types";

export function QuestionSmaples(AccordionContentData: AccourditionType) {
    return (
        <Accordion type="multiple">
            {AccordionContentData.data.map((items) => (
                <AccordionItem value={`item-${items.ac_id}`} key={items.ac_id}>
                    <AccordionTrigger>
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