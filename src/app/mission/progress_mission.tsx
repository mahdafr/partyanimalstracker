"use client";

import { useShareableState } from "./line_missions";

import { useEffect } from "react";
import { useBetween } from "use-between";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { Check } from "lucide-react";


export const handleIncrement = (progress: any, req: number) => {
  return (parseInt(progress) === req) ? 100 : parseInt(progress)/req;
};


interface ProgressMProps<TValue> {
  req: number,
}

export function ProgressM<TValue>({req}: ProgressMProps<number>) {
  const {progress} = useBetween(useShareableState);

  useEffect(() => {
    handleIncrement(progress, req)
    // setProgress(handleIncrement(prog === req ? 100 : prog / req));
  }, []);

  return (
    (parseInt(progress) == req) ?
      <Check></Check>
      : 
      <AnimatedCircularProgressBar className="mission-item-row-left"
        max={req}
        min={0}
        value={parseInt(progress)}
        gaugePrimaryColor="hsl(var(--primary))"
        gaugeSecondaryColor="hsl(var(--secondary))"
      />
  );
}
