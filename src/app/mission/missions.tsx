'use client'

import { LineM } from "./line_missions"
import { Separator } from "@/components/ui/separator"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { jua } from "../fonts"


interface MissionsProps<Mission> {
    missions: Mission[]
}

export function Missions<TValue>({missions}: MissionsProps<Mission>) {
    return (
        <Accordion type="multiple" className="w-full"
                        style={{strokeWidth:"2px"}}
                        defaultValue={["item-1", "item-2", "item-3", missions.length == 4 ? "item-4" : ""]}>
            <AccordionItem value="item-1" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">{missions[0].reward}</AccordionTrigger>
                <AccordionContent>
                    <LineM mission={missions[0]}></LineM>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">{missions[1].reward}</AccordionTrigger>
                <AccordionContent>
                    <LineM mission={missions[1]}></LineM>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">{missions[2].reward}</AccordionTrigger>
                <AccordionContent>
                    <LineM mission={missions[2]}></LineM>
                </AccordionContent>
            </AccordionItem>
            
            {missions.length == 4 ?
                <AccordionItem value="item-4" className="accordion-item">
                    <AccordionTrigger className="accordion-trigger">{missions[3].reward}</AccordionTrigger>
                    <AccordionContent>
                        <LineM mission={missions[3]}></LineM>
                    </AccordionContent>
                </AccordionItem>
            : ""}
        </Accordion>
    )
}