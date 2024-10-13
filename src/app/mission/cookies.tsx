"use client"

import { Mission } from './mission_struct'
import { getCookie, setCookie, hasCookie } from 'cookies-next';

// load from cookies; if CNF, progress is 0
export function getProgress(id: string) : number {
    return ( hasCookie(id) ) ? parseInt(getCookie(id)!) : 0
}

// bake a cookie with this new info
export function update(mission: Mission, progress: number) : void {
    mission.progress = progress
    setCookie(mission.id, mission.progress.toString(), {maxAge : 604800})
}