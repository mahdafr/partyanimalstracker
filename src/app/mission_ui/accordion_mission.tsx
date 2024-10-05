'use client'

import React, { useState } from "react"
import { useBetween } from "use-between"

import { LineM } from "./line_missions"
import { Mission } from "../mission/mission"
import { BadgeProgressM } from "./badge_mission"
import { getProgress } from "../mission/cookies"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { jua } from "../fonts"


export let sharedProgresses: Record<string, any> = {}


interface MissionsProps<Mission> {
    missions: Mission[]
}

export function Missions<TValue>({missions}: MissionsProps<Mission>) {
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
        <Accordion type="multiple" className="w-full"
                        defaultValue={missions.map(m => m.id)}>
            {missions.map(mission => (
                <div key={mission.id}>
                    <AccordionItem value={mission.id} className="accordion-item">
                        <AccordionTrigger className="accordion-trigger">
                            <React.Fragment>
                                <BadgeProgressM mission={mission}></BadgeProgressM>
                                <div className={jua.className}>
                                    {mission.reward}
                                </div>
                            </React.Fragment>
                        </AccordionTrigger>
                        <AccordionContent>
                            <LineM mission={mission}></LineM>
                        </AccordionContent>
                    </AccordionItem>
                </div>
            ))}
        </Accordion>
    )
}