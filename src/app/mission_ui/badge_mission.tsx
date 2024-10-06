"use client"

import { sharedProgresses } from "./accordion_mission";
import { Mission } from "../mission/mission"

import { Badge } from "@/components/ui/badge"
import { CircleSlash, CircleEllipsis, CircleCheck } from "lucide-react"

import React from "react";
import { jua } from "../fonts";


const Status = Object.freeze({
    NOT_STARTED : { id: 0, icon: <CircleSlash></CircleSlash>, color:"hsl(var(--foreground-badge-mission-not-started))"},
    IN_PROGRESS : { id: 1, icon: <CircleEllipsis></CircleEllipsis>, color:""},
    COMPLETED : { id: 2, icon: <CircleCheck></CircleCheck>, color:"hsl(var(--foreground-badge-mission-completed))"},
})

function getStatusEnum(progress: number, required: number) {
    if ( progress === 0 )
        return Status.NOT_STARTED
    if ( progress === required )
        return Status.COMPLETED
    return Status.IN_PROGRESS
}


interface BadgeProgressMProps<TValue> {
    mission: Mission
}

export function BadgeProgressM<TValue>({mission}: BadgeProgressMProps<Mission>) {
    const {progress} = sharedProgresses[mission.id]();
    
    const status = getStatusEnum(progress, mission.required);

    return (
        <Badge className="badge-missionprog" style={{color:status.color}}>
            {status.icon}
            <div className={jua.className} style={{marginInlineStart:"5px"}}>
                {mission.reward}
            </div>
        </Badge>
    )
}