"use client"

import { sharedProgresses } from "./accordion_mission";
import { Mission } from "../mission/mission"

import { Badge } from "@/components/ui/badge"
import { CircleSlash, CircleEllipsis, CircleCheck } from "lucide-react"

import React from "react";


const Status = Object.freeze({
    NOT_STARTED : { id: 0, icon: <CircleSlash></CircleSlash>, color:"hsl(var(--secondary))"},
    IN_PROGRESS : { id: 1, icon: <CircleEllipsis></CircleEllipsis>, color:"hsl(var(--primary-progress))"},
    COMPLETED : { id: 2, icon: <CircleCheck></CircleCheck>, color:"hsl(var(--accent-foreground))"},
})

function getStatusEnum(progress: number, required: number) {
    if ( progress === 0 )
        return Status.NOT_STARTED
    if ( progress === required )
        return Status.COMPLETED
    return Status.IN_PROGRESS
}


interface BadgeMProps<TValue> {
    mission: Mission
}

export function BadgeM<TValue>({mission}: BadgeMProps<Mission>) {
    const {progress} = sharedProgresses[mission.id]();
    
    const status = getStatusEnum(progress, mission.required);

    return (
        <Badge style={{backgroundColor:"transparent", color:status.color}}>
            {status.icon}
        </Badge>
    )
}