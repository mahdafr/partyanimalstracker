"use client"

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table"
import { Slider } from "@/components/ui/slider"
import { Mission } from "./mission/mission"
import { update, getProgress } from "./mission/cookies"
import { jua } from "./fonts";

// format the table's columns
export const Columns: ColumnDef<Mission>[] = [
  {
    accessorKey: "progress",
    header: () => 
      <div className="text-center"><div className={jua.className}>
        <h6>Progress</h6>
      </div></div>,
    cell: ({ row }) => {
      const mission = row.original
      const cachedValue = getProgress(mission.id);
      const [val, setVal] = useState(cachedValue);
      return (
        <div>
          <div className="navigation">
            <p className="text-xs"  style={{color:"hsl(var(--primary-progress))"}}>0</p>
            <Slider
              defaultValue={[cachedValue]}
              max={parseInt(mission.required.toString())}
              step={1}
              onValueChange = {(i) => setVal(i[0])}
              onValueCommit = {(i) => update(mission, i[0])}
            />
            <p className="text-xs" style={{color:"hsl(var(--primary-progress))"}}>{mission.required}</p>
          </div><p className="text-base">{val}</p></div>
      )
    }
  },
  {
    accessorKey: "prompt",
    header: () => <div className="text-left"><div className={jua.className}>
      <h6>Description</h6>
      </div></div>,
    cell: ({row}) => {
      return <div className="text-left font-small">{row.getValue("prompt")}</div>
    }
  },
  {
    accessorKey: "reward",
    header: () => <div className="text-center"><div className={jua.className}>
      <h6>Reward</h6>
    </div></div>,
    cell: ({row}) => {
      return <div className="text-center font-small">{row.getValue("reward")}</div>
    }
  },
]