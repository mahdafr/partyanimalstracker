"use client"

import { useState } from "react"
import { useBetween } from "use-between"

import { ProgressM } from "./progress_mission"
import { SliderM } from "./slider_mission"
import { Mission } from "../mission/mission"
import { getProgress } from "../mission/cookies"


export let sharedProgresses: Record<string, any> = {}


interface LineMProps<Mission> {
    mission: Mission
}

export function LineM<TValue>({mission}: LineMProps<Mission>) {
    const useShareableState = () => {
        const [progress, setProgress] = useState(getProgress(mission.id));
        return {
            progress, setProgress
        }
    }
    const useSharedProgress = () => useBetween(useShareableState);
    sharedProgresses[mission.id] = useSharedProgress; 

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