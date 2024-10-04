import { Mission } from "../mission/mission"
import { sharedProgresses } from "./line_missions";

import { Badge } from "@/components/ui/badge"
import { CircleSlash, CircleEllipsis, CircleCheck } from "lucide-react"


const Status = Object.freeze({
    NOT_STARTED : { id: 0, icon: <CircleSlash></CircleSlash>},
    IN_PROGRESS : { id: 1, icon: <CircleEllipsis></CircleEllipsis>},
    COMPLETED : { id: 2, icon: <CircleCheck></CircleCheck>},
})

function getStatusEnum(mission: Mission) {
    if ( mission.progress === 0 )
        return Status.NOT_STARTED
    if ( mission.progress === mission.required )
        return Status.COMPLETED
    return Status.IN_PROGRESS
}


interface BadgeMProps<Status> {
    mission: Mission
}

export function BadgeM<TValue>({mission}: BadgeMProps<Mission>) {
    const {progress} = sharedProgresses[mission.id]();
    
    return (
        <Badge style={{backgroundColor:"hsl(var(--primary-foreground))", color:"hsl(var(--primary))"}}>
            {getStatusEnum(mission).icon}
        </Badge>
    )
}