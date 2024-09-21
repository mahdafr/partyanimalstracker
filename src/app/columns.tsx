"use client"

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table"
import { Mission, update } from "./mission"
import { Slider } from "@/components/ui/slider"
import { setCookie } from 'cookies-next';

// function update(missionId: string, progress: number) : void {
//   console.log('new progress', progress)
//   setCookie(mission.id, mission.progress.toString())
// }

// return the greater of the 2 numbers
function greater(a: number, b: number) : number {
  return (a>=b) ? a : b
}

// format the table's columns
export const Columns: ColumnDef<Mission>[] = [
  {
    accessorKey: "progress",
      header: () => 
        <div className="text-center">Progress</div>,
    cell: ({ row }) => {
      const [val, setVal] = useState(0);
      const mission = row.original
      return (
        <div>
          <Slider
            defaultValue={[parseInt(mission.progress.toString())]}
            max={parseInt(mission.required.toString())}
            step={1}
            onValueChange = {(i) => setVal(i[0])}
            onValueCommit = {(i) => update(mission, i[0]) }
          />
          <p>{greater(parseInt(mission.progress.toString()), val)}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "prompt",
    header: () => <div className="text-left">Description</div>,
    cell: ({row}) => {
      return <div className="text-left font-small">{row.getValue("prompt")}</div>
    }
  },
  {
    accessorKey: "reward",
    header: () => <div className="text-center">Reward</div>,
    cell: ({row}) => {
      return <div className="text-center font-small">{row.getValue("reward")}</div>
    }
  },
]