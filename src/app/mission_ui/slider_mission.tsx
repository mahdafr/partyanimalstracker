"use client"

import { Slider } from "@/components/ui/slider"
import { Mission } from "../mission/mission_struct"
import { sharedProgresses } from "./accordion_group";
import { update } from "../mission/cookies"
import { jua } from "../fonts";
import React from "react";


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
        <React.Fragment>
            <div className="navigation-slider">
                <div className={jua.className}><div className="slider-text-limits">0</div></div>
                <div className="slider-m">
                    <Slider
                        defaultValue={[progress]}
                        max={mission.required}
                        step={mission.required >= 75 ? 50 : 1}
                        onValueChange = {(i) => setProgress(i[0])}
                        onValueCommit = {(i) => handleChange(mission, i[0])}
                    />
                </div>
                <div className={jua.className}><div className="slider-text-limits">{mission.required}</div></div>
            </div>
        <div className={jua.className}><div className="slider-text-value">{progress}</div></div>
    </React.Fragment>
    )
}
