"use client"

import * as React from "react"

import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"


interface ClockCountdownProps<TValue> {
    daysLeft: boolean
}

function mod(n: number, m: number) {
    return ((n % m) + m) % m
}

export function ClockCountdown<TValue>({daysLeft} : ClockCountdownProps<TValue>) {
  const [progress, setProgress] = React.useState(new Date())
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
        setProgress(new Date());
    }, 1000); //every 1s

    return () => clearInterval(intervalId); //clear on unmount
  }, []);

  const now = new Date();
  var days = now.getUTCDay()+(((now.getUTCHours() - 4)<0) ? 1 : 0)
  var hrs = 23 - mod(now.getUTCHours() - 4, 24) // ET is 4 hours behind of UTC
  var mins = 59 - now.getUTCMinutes()
  var secs = 59 - now.getUTCSeconds()
  return (
    <div style={{textAlign:"center", display:"inline-flex", marginLeft:"auto", marginRight:"auto"}}>
        <Clock style={{color:"hsl(var(--secondary-foreground))", marginInline:"5px", marginTop:"4%"}}></Clock>
        <Badge style={{backgroundColor:"hsl(var(--muted))"}}>
            {daysLeft ? <Label className="text-lg" style={{color:"hsl(var(--secondary))", marginInlineEnd:"1px"}}><h6><b>
              {days.toString()}</b></h6></Label>
            : ""}
            {daysLeft ? <Label style={{color:"hsl(var(--primary-progress))", marginInlineEnd:"5px", fontSize:"small"}}>
              d</Label>
            : ""}
            
            <Label className="text-lg" style={{marginInlineEnd:"1px"}}><h6><b>{hrs.toString()}</b></h6></Label>
            <Label style={{color:"hsl(var(--primary-progress))", marginInlineEnd:"5px", fontSize:"small"}}>h</Label>
            <Label className="text-lg" style={{marginInlineEnd:"1px"}}><h6><b>{mins.toString()}</b></h6></Label>
            <Label style={{color:"hsl(var(--primary-progress))", marginInlineEnd:"5px", fontSize:"small"}}>m</Label>
            <Label className="text-lg" style={{marginInlineEnd:"1px"}}><h6><b>{secs.toString()}</b></h6></Label>
            <Label style={{color:"hsl(var(--primary-progress))", marginInlineEnd:"5px", fontSize:"small"}}>s</Label>
        </Badge>
    </div>
  )
}
