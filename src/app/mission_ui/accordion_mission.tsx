import { LineM } from "./line_missions"
import { Mission } from "../mission/mission"
import { BadgeProgressM } from "./badge_mission"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, } from "@/components/ui/card"

interface MissionsProps<Mission> {
    missions: Mission[]
}

export function Missions<TValue>({missions}: MissionsProps<Mission>) {

    return (
        <Accordion type="multiple" className="space-y-3" >
            {missions.map(mission => (
                <div key={mission.id} >
                    <Card className="justify-center card card-mission" >
                        <CardContent className="card-mission-content" >
                            <AccordionItem value={mission.id} className="accordion-mission-item" >
                                <AccordionTrigger className="accordion-mission-trigger" >
                                        <BadgeProgressM mission={mission}></BadgeProgressM>
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