"use client"

import { useState } from "react"
import { useBetween } from "use-between"

import { ProgressM } from "./progress_mission"
import { SliderM } from "./slider_mission"
import { Mission } from "../mission"


export const useShareableState = () => {
    const [progress, setProgress] = useState('LineM');
    return {
        progress, setProgress
    }
}


interface LineMProps<Mission> {
    mission: Mission
}

export function LineM<TValue>({mission}: LineMProps<Mission>) {

    return (
        <div className="mission-item">
            <div className="mission-item-row-left">
                <ProgressM req={mission.required}></ProgressM>
            </div>
            <div className="mission-item-row-right">
                <h4>{mission.prompt}</h4>
                <SliderM mission={mission}></SliderM>
            </div>
        </div>
    )
}