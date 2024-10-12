import { CircleSlash, CircleEllipsis, CircleCheck } from "lucide-react"

export const Status = Object.freeze({
    NOT_STARTED : { id: 0, icon: <CircleSlash></CircleSlash>, color:"hsl(var(--foreground-badge-mission-not-started))"},
    IN_PROGRESS : { id: 1, icon: <CircleEllipsis></CircleEllipsis>, color:"hsl(var(--foreground))"},
    COMPLETED : { id: 2, icon: <CircleCheck></CircleCheck>, color:"hsl(var(--foreground-badge-mission-completed))"},
})


export function getMissionProgressStatus(progress: number, required: number) {
    if ( progress === 0 )
        return Status.NOT_STARTED
    if ( progress < required )
        return Status.IN_PROGRESS
    return Status.COMPLETED
}
