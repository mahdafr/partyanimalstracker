"use client"

import * as React from "react"

import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { jua } from "../fonts"

import { getDaysTil, mod } from "./time_utils"


interface ClockCountdownProps<TValue> {
    daysLeft: boolean,
    dueDay: number
}

export function ClockCountdown<TValue>({daysLeft, dueDay} : ClockCountdownProps<TValue>) {
  const [_, setProgress] = React.useState(new Date())
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
        setProgress(new Date());
    }, 1000); //every 1s

    return () => clearInterval(intervalId); //clear on unmount
  }, []);

  const now = new Date();
  var days = getDaysTil(now, dueDay)
  var hrs = 23 - mod(now.getUTCHours() - 4, 24) // ET is 4 hours behind of UTC
  var mins = 59 - now.getUTCMinutes()
  var secs = 59 - now.getUTCSeconds()

  return (
    <div className="clock">
      <Clock className="clock-icon"></Clock>
      <Badge className="badge-clock">
          {daysLeft ?
            <>
              <Label className="clock_text_num"><div className={jua.className}>{days.toString()}</div></Label>
              <Label className="clock_text_char">d</Label>
            </>
            :
            <></>
          }
          <>
            <Label className="clock_text_num"><div className={jua.className}>{hrs.toString()}</div></Label>
            <Label className="clock_text_char">h</Label>
            <Label className="clock_text_num"><div className={jua.className}>{mins.toString()}</div></Label>
            <Label className="clock_text_char">m</Label>
            <Label className="clock_text_num"><div className={jua.className}>{secs.toString()}</div></Label>
            <Label className="clock_text_char" style={{marginInlineEnd:"0px"}}>s</Label>
          </>
        </Badge>
    </div>
  )
}
