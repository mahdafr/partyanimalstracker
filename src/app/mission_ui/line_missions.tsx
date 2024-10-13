"use client"

import { ProgressM } from "./progress_mission"
import { SliderM } from "./slider_mission"
import { Mission } from "../mission/mission_struct"


interface LineMProps<Mission> {
    mission: Mission
}

export function LineM<TValue>({mission}: LineMProps<Mission>) {
    return (
        <div className="mission-item">
            <div className="mission-item-row-left">
                <ProgressM mission={mission}></ProgressM>
            </div>
            <div className="mission-item-row-right">
                <h4>{mission.prompt}</h4>
                <SliderM mission={mission}></SliderM>
            </div>
        </div>
    )
}