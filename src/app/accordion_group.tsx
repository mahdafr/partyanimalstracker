import React from "react"
import { jua } from "./fonts"

import { Missions } from "./mission_ui/accordion_mission"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionMGroupProps<TValue, TData> {
    title: string,
    data: any,
}

export function AccordionMGroup<TValue, TData>({title, data}: AccordionMGroupProps<TValue, TData>){
    return (
        <Accordion type="single" collapsible className="w-full" >
            <AccordionItem value={"mission-group-" + title} className="accordion-mission-group" >
                <AccordionTrigger>
                    <div className={jua.className}>{title}</div>
                </AccordionTrigger>
                <AccordionContent>
                    <Missions missions={data}></Missions>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
