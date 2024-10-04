"use client";

import { sharedProgresses } from "./line_missions";
import { getProgress } from "../cookies";

import { useEffect } from "react";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { Check } from "lucide-react";


export const handleIncrement = (progress: any, req: number) => {
  return (parseInt(progress) === req) ? 100 : parseInt(progress)/req;
};


interface ProgressMProps<TValue> {
  mission: Mission,
}

export function ProgressM<TValue>({mission}: ProgressMProps<Mission>) {
  // const {progress} = useBetween(useShareableState);
  const cachedValue = getProgress(mission.id);
  // const {progress, setProgress} = sharedProgresses[mission.id]();
  const {progress} = sharedProgresses[mission.id]();

  useEffect(() => {
    handleIncrement(cachedValue, mission.required)
    // setProgress(handleIncrement(prog === req ? 100 : prog / req));
  }, []);

  return (
    (progress == mission.required) ?
      <div className="mission-item-row-left-inherit">
        <ProgressBarM style={"mission-item-row-left-complete-base"} max={mission.required} curr={progress}></ProgressBarM>
        <Check className="mission-item-row-left-complete-overlay"></Check>
      </div>
      :
        <ProgressBarM style={"mission-item-row-left"} max={mission.required} curr={progress}></ProgressBarM>
  );
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
  />)
}
