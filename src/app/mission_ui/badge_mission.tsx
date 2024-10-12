"use client"

import { sharedProgresses } from "./accordion_group";
import { Mission } from "../mission/mission"
import { getMissionProgressStatus } from "../mission/progress"

import { Badge } from "@/components/ui/badge"

import React from "react";
import { jua } from "../fonts";


interface BadgeProgressMProps<TValue> {
    mission: Mission
}

export function BadgeProgressM<TValue>({mission}: BadgeProgressMProps<Mission>) {
    const {progress} = sharedProgresses[mission.id]();
    const status = getMissionProgressStatus(progress, mission.required);

    return (
        <Badge className="badge-missionprog" style={{color:status.color}}>
            {status.icon}
            <div className={jua.className} style={{marginInlineStart:"5px"}}>
                {mission.reward}
            </div>
        </Badge>
    )
}