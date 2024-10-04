"use client"

import { useState } from "react";

import { Slider } from "@/components/ui/slider"
import { Mission } from "./../mission"
import { useShareableState } from "./line_missions";
import { handleIncrement } from "./progress_mission";
import { update, getProgress } from "./../cookies"
import { jua } from "./../fonts";
import { useBetween } from "use-between";

interface SliderMProps {
    mission: Mission,
}

export function SliderM({mission}: SliderMProps) {
    const cachedValue = getProgress(mission.id);
    const [val, setVal] = useState(cachedValue);
    const {progress, setProgress} = useBetween(useShareableState);
    
    const handleChange = (mission: Mission, prog: number) => {
        setProgress(progress);
        update(mission, prog)
        handleIncrement(progress, mission.required)
    }
    return (
        <div>
            <div className="inline">
                <p className={jua.className} style={{color:"hsl(var(--primary-progress))", fontSize:"small"}}>
                    0
                </p>
                <Slider
                    defaultValue={[cachedValue]}
                    max={mission.required}
                    step={mission.required > 50 ? 50 : 1}
                    onValueChange = {(i) => setVal(i[0])}
                    onValueCommit = {(i) => handleChange(mission, i[0])}
                />
                <p className={jua.className} style={{color:"hsl(var(--primary-progress))", fontSize:"small"}}>
                    {mission.required}
                </p>
            </div>
        <p className={jua.className} style={{fontSize:"large"}}>{val}</p>
    </div>
    )
}
