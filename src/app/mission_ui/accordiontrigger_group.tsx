'use client'

import { Mission } from "../mission/mission_struct"
import { BadgeGroupM } from "../mission_ui/badge_group"

import React from "react";
import { jua } from "../fonts"


interface TitleMGroupProps<TValue, TData> {
    title: string,
    missions: Mission[]
}


export function TitleMGroup<TValue, TData>({title, missions}: TitleMGroupProps<TValue, TData>){
    return (
        <div className={jua.className + " accordion-group-trigger"}>
            <div>{title}</div>
            <BadgeGroupM missions={missions}></BadgeGroupM>
        </div>
    )
}