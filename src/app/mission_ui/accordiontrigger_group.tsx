'use client'

import { sharedProgresses } from "./accordion_group";
import { Mission } from "../mission/mission"
import { Status, getMissionProgressStatus } from "../mission/progress"
import { BadgeGroupM } from "../mission_ui/badge_group"

import React from "react";
import { jua } from "../fonts"


interface TitleMGroupProps<TValue, TData> {
    title: string,
    missions: Mission[]
}


export function TitleMGroup<TValue, TData>({title, missions}: TitleMGroupProps<TValue, TData>){
    console.log(missions[0].id)
    console.log(sharedProgresses[missions[0].id])

    var m_done = 0
    missions.forEach((m) => {
        const {progress} = sharedProgresses[m.id]();
        m_done += ((getMissionProgressStatus(progress, m.required) != Status.COMPLETED ) ? 1 : 0);
    });

    return (
        <div className={jua.className + " accordion-group-trigger"}>
            <div>{title}</div>
            <BadgeGroupM missions={missions}></BadgeGroupM>
        </div>
    )
}