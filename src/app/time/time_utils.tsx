export const DueDay = Object.freeze({
    SUNDAY : { id: 0},
    WEDNESDAY : { id: 3},
    NONE : { id: -1},
})

export function getDueDayEnum(dueDay: number) {
    if ( dueDay === 0 )
        return DueDay.SUNDAY
    if ( dueDay === 3 )
        return DueDay.WEDNESDAY
    return DueDay.NONE
}

export function dayInET(now: Date) {
    return now.getUTCDay() - (((now.getUTCHours() - 4) < 0) ? 1 : 0)
}


export function getDays(now: Date, dueDay: number) {
    return mod(6 - dayInET(now) + dueDay, 7)
}


export function mod(n: number, m: number) {
    return ((n % m) + m) % m
}
