"use client";

import { sharedProgresses } from "./accordion_mission";
import { Mission } from "../mission/mission";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";


interface ProgressMProps<TValue> {
  mission: Mission,
}

export function ProgressM<TValue>({mission}: ProgressMProps<Mission>) {
  const {progress} = sharedProgresses[mission.id]();

  return (
    <ProgressBarM style={"mission-item-row-left"} max={mission.required} curr={progress}></ProgressBarM>
  )
}


interface ProgressBarMProps {
  style: string,
  max: number,
  curr: number
}

export function ProgressBarM({style, max, curr}: ProgressBarMProps) {
  return (
    <AnimatedCircularProgressBar className={style}
      max={max}
      min={0}
      value={curr}
      gaugePrimaryColor="hsl(var(--primary))"
      gaugeSecondaryColor="hsl(var(--secondary))"
    />
  )
}
