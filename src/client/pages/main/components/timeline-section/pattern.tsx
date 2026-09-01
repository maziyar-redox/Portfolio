import {
    Timeline,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/client/components/reui/timeline";

import { milestones } from "@/client/core/constants/milestones";

import { cn } from "@/client/core/lib/utils";

export function Pattern() {
  return (
    <Timeline defaultValue={5} className="w-full max-w-md">
        {milestones.map((item) => (
            <TimelineItem
                key={item.id}
                step={item.id}
                className={cn(
                    "w-[calc(50%-1.5rem)] odd:ms-auto even:me-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8",
                    "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:-right-6 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:left-auto",
                    "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:-right-6",
                    "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:left-auto even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:translate-x-1/2"
                )}
            >
                <TimelineHeader>
                    <TimelineSeparator />
                    <TimelineDate>
                        {item.date}
                    </TimelineDate>
                    <TimelineTitle>
                        {item.title}
                    </TimelineTitle>
                    <TimelineIndicator />
                </TimelineHeader>
            </TimelineItem>
        ))}
    </Timeline>
  )
}