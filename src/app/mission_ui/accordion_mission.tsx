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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


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
        <Accordion type="multiple" className="space-y-3" >
            {missions.map(mission => (
                <div key={mission.id} >
                    <Card className="justify-center card card-mission" >
                        <CardContent className="card-mission-content" >
                            <AccordionItem value={mission.id} className="accordion-mission-item" >
                                <AccordionTrigger className="accordion-mission-trigger" >
                                    <React.Fragment>
                                        <BadgeProgressM mission={mission}></BadgeProgressM>
                                    </React.Fragment>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <LineM mission={mission}></LineM>
                                </AccordionContent>
                            </AccordionItem>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </Accordion>
    )
}