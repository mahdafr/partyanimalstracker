"use client"

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table"
import { Mission } from "./mission"
import { update, getProgress } from "./cookies"
import { Slider } from "@/components/ui/slider"

// format the table's columns
export const Columns: ColumnDef<Mission>[] = [
  {
    accessorKey: "progress",
    header: () => 
      <div className="text-center">Progress</div>,
    cell: ({ row }) => {
      const mission = row.original
      const cachedValue = getProgress(mission.id);
      const [val, setVal] = useState(cachedValue);
      return (
        <div>
          <Slider
            defaultValue={[cachedValue]}
            max={parseInt(mission.required.toString())}
            step={1}
            onValueChange = {(i) => setVal(i[0])}
            onValueCommit = {(i) => update(mission, i[0])}
          />
          <p>{val}</p>
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