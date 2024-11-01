'use client'

import React, { useState } from "react"
import { useBetween } from "use-between"

import { Missions } from "./accordion_mission"
import { TitleMGroup } from "./accordiontrigger_group"
import { getProgress } from "../mission/cookies"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export let sharedProgresses: Record<string, any> = {}


interface AccordionMGroupProps<TValue, TData> {
    title: string,
    missions: any,
}

export function AccordionMGroup<TValue, TData>({title, missions}: AccordionMGroupProps<TValue, TData>){
    for (const mission of missions){
        const useShareableState = () => {
            const [progress, setProgress] = useState(getProgress(mission.id));
            return {
                progress, setProgress
            }
        }
        const useSharedProgress = () => useBetween(useShareableState);
        sharedProgresses[mission.id] = useSharedProgress; 
    }

    return (
        <Accordion type="single" collapsible className="w-full" defaultValue={"mission-group-" + title} >
            <AccordionItem value={"mission-group-" + title} className="accordion-mission-group" >
                <AccordionTrigger className="accordion-group-trigger">
                    <TitleMGroup title={title} missions={missions} />
                </AccordionTrigger>
                <AccordionContent>
                    <Missions missions={missions}></Missions>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
