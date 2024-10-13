"use client"

import { sharedProgresses } from "./accordion_group";
import { Mission } from "../mission/mission_struct"
import { getMissionProgressStatus, Status } from "../mission/progress"

import { Badge } from "@/components/ui/badge"

import React from "react";
import { jua } from "../fonts";


interface BadgeGroupMProps<TValue> {
    missions: Mission[]
}

export function BadgeGroupM<TValue>({missions}: BadgeGroupMProps<Mission>) {
    var completed = 0
    var inprogress = 0
    missions.forEach((mission) => {
        const {progress} = sharedProgresses[mission.id]();
        completed += (getMissionProgressStatus(progress, mission.required) == Status.COMPLETED) ? 1 : 0
        inprogress += (getMissionProgressStatus(progress, mission.required) == Status.IN_PROGRESS) ? 1 : 0
    });
    var color = ((inprogress > 0) || (completed > 0)) ? Status.IN_PROGRESS.color : Status.NOT_STARTED.color
    color = (completed == missions.length)  ? Status.COMPLETED.color : color

    return (
        <Badge className="badge-groupprog" style={{color:color}}>
            <div className={jua.className}>
                {completed + "/" + missions.length + " done"}
            </div>
        </Badge>
    )
}