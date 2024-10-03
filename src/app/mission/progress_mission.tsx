import { Check } from "lucide-react"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


interface ProgressMProps {
  progress: number,
  required: number
}

export function ProgressM({progress, required}: ProgressMProps) {
  const chartData = [{
    "progress": progress, fill: "hsl(var(--primary))"
  }]
  
  const chartConfig = {
    progress: {
      label: "Progress",
      color: "hsl(var(--primary-progress))",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto">
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={360}
          innerRadius={30}
          outerRadius={42}
        >
        <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-primary-progress last:fill-primary-progress"
            polarRadius={[86, 74]}
            style={{backgroundColor:"hsl(var(--primary))"}}
        />
        <RadialBar dataKey="progress" background cornerRadius={5} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                <tspan
                  x={viewBox.cx}
                  y={(viewBox.cy || 0) - 5}
                  className="fill-foreground text-lg font-bold"
                >
                  {progress < required ? progress/required + "%": <Check></Check>}
                </tspan>
                <tspan
                  x={viewBox.cx}
                  y={(viewBox.cy || 0) + 11}
                  style={{fontSize:"75%", fill:"hsl(var(--muted-foreground))"}}
                >
                  {progress < required ? "completed": ""}
                </tspan>
              </text>
            )}}}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}