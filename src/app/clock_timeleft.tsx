"use client"

import * as React from "react"

import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"


interface ClockCountdownProps<TValue> {
    daysLeft: boolean
}

export function ClockCountdown<TValue>({daysLeft} : ClockCountdownProps<TValue>) {
  const [progress, setProgress] = React.useState(new Date())
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
        setProgress(new Date());
    }, 1000); //every 1s

    return () => clearInterval(intervalId); //clear on unmount
  }, []);

  var nowUTC = new Date().getTime()
  const nowET = new Date(nowUTC - (4 * 60 * 1000)); // ET is 4 hours behind of UTC
  var days = (7 - nowET.getDay()) % 7
  var hrs = 23 - nowET.getHours()
  var mins = 59 - nowET.getMinutes()
  var secs = 59 - nowET.getSeconds()
  return (
    <div>
        <Label>Time Left:</Label>
            {daysLeft ?
                <Badge style={{backgroundColor:"hsl(var(--muted))"}}>
                    <Label className="text-lg"><h6><b>{days.toString()}</b></h6></Label>
                </Badge>
            : ""}
        {daysLeft ? <Label>days</Label> : ""}{"\t"}
        <Badge style={{backgroundColor:"hsl(var(--muted))"}}>
            <Label className="text-lg"><h6><b>{hrs.toString()}</b></h6></Label>
        </Badge>
        <Label>hrs</Label>{"\t"}
        <Badge style={{backgroundColor:"hsl(var(--muted))"}}>
            <Label className="text-lg"><h6><b>{mins.toString().padStart(2, '0')}</b></h6></Label>
        </Badge>
        <Label>mins</Label>{"\t"}
        <Badge style={{backgroundColor:"hsl(var(--muted))"}}>
            <Label className="text-lg"><h6><b>{secs.toString().padStart(2, '0')}</b></h6></Label>
        </Badge>
        <Label>sec</Label>{"\t"}
    </div>
  )
}
