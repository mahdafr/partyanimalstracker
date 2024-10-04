"use client"

import { Slider } from "@/components/ui/slider"
import { Mission } from "../mission/mission"
import { sharedProgresses } from "./accordion_mission";
import { update } from "../mission/cookies"
import { jua } from "../fonts";


interface SliderMProps {
    mission: Mission,
}

export function SliderM({mission}: SliderMProps) {
    const {progress, setProgress} = sharedProgresses[mission.id]();
    
    const handleChange = (mission: Mission, prog: number) => {
        setProgress(prog);
        update(mission, prog);
    }

    return (
        <div>
            <div className="inline gap-2 -space-x-4">
                <p className={jua.className} style={{color:"hsl(var(--primary-progress))", fontSize:"small"}}>
                    0
                </p>
                <Slider
                    defaultValue={[progress]}
                    max={mission.required}
                    step={mission.required > 50 ? 50 : 1}
                    onValueChange = {(i) => setProgress(i[0])}
                    onValueCommit = {(i) => handleChange(mission, i[0])}
                />
                <p className={jua.className} style={{color:"hsl(var(--primary-progress))", fontSize:"small"}}>
                    {mission.required}
                </p>
            </div>
        <p className={jua.className} style={{fontSize:"large"}}>{progress}</p>
    </div>
    )
}
