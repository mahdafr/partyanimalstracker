"use client"

import React, { useState } from "react";

import { Slider } from "@/components/ui/slider"
import { Mission } from "./../mission"
import { update, getProgress } from "./../cookies"
import { jua } from "./../fonts";

interface SliderMProps {
    mission: Mission,
}

export function SliderM({mission}: SliderMProps) {
    const cachedValue = getProgress(mission.id);
    const [val, setVal] = useState(cachedValue);
    return (
        <div>
            <div className="navigation" style={{marginInline:"0px", padding:"0px"}}>
            <p className={jua.className} style={{color:"hsl(var(--primary-progress))", fontSize:"x-small"}}>
                0
            </p>
            <Slider
                defaultValue={[cachedValue]}
                max={parseInt(mission.required.toString())}
                step={1}
                onValueChange = {(i) => setVal(i[0])}
                onValueCommit = {(i) => update(mission, i[0])}
            />
            <p className={jua.className} style={{color:"hsl(var(--primary-progress))", fontSize:"x-small"}}>
                {mission.required}
            </p>
        </div>
        <p className={jua.className}>{val}</p>
    </div>
    )
}