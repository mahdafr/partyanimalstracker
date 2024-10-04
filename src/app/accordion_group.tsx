import React from "react"
import { jua } from "./fonts"

import { Missions } from "./mission_ui/accordion_mission"
import { ClockCountdown } from "./time/clock_timeleft"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionMGroupProps<TValue, TData> {
    title: string,
    data: any,
    daysBadge: boolean,
    dueDay: number
}

export function AccordionMGroup<TValue, TData>({title, data, daysBadge, dueDay}: AccordionMGroupProps<TValue, TData>){
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="accordion-item-group">
                <AccordionTrigger className="accordion-trigger-full">
                    <React.Fragment>
                        <div className={jua.className}>{title}</div>
                        { daysBadge ? <ClockCountdown daysLeft={true} dueDay={dueDay} /> : ""}
                    </React.Fragment>
                </AccordionTrigger>
                <AccordionContent>
                    <Missions missions={data}></Missions>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
