// the Mission object
export type Mission = {
    id: string
    prompt: string
    progress: number
    required: number
    reward: string
    date: Date
    due: Date
}

type JSONMission = {
    required: number
    prompt: string
    reward: string
    dueDate: number
}
