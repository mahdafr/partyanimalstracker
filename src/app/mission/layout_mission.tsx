'use client'

import { ProgressM } from "./progress_mission"
import { SliderM } from "./slider_mission"
import { Mission } from "../mission"

import { Separator } from "@/components/ui/separator"


interface LineMProps<Mission> {
    missions: Mission[]
}

export function LineM<TValue>({missions}: LineMProps<Mission>) {
    return (
        <div>
            <ProgressM progress={missions[0].progress} required={missions[0].required}></ProgressM>
            <SliderM mission={missions[0]}></SliderM>
            <Separator className="my-3" />
            
            <ProgressM progress={missions[1].progress} required={missions[1].required}></ProgressM>
            <Separator className="my-3" />

            <ProgressM progress={missions[2].progress} required={missions[2].required}></ProgressM>
            
            {missions.length == 4 ? <Separator className="my-3" /> : ""}
            {missions.length == 4 ? <ProgressM progress={missions[3].progress} required={missions[3].required}></ProgressM> : ""}
        </div>
    )
}