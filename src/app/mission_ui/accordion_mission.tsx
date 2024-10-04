'use client'

import React from "react"

import { LineM } from "./line_missions"
import { Mission } from "../mission/mission"
import { BadgeM, Status } from "./badge_mission"

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
                        defaultValue={missions.map(m => m.id)}>
            {missions.map(mission => (
                <div key={mission.id}>
                    <AccordionItem value={mission.id} className="accordion-item">
                        <AccordionTrigger className="accordion-trigger">
                            <React.Fragment>
                                <BadgeM mission={mission}></BadgeM>
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