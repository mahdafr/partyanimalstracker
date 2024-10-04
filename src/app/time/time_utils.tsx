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


export function getDays(now: Date, dueDay: number) {
    return mod(7 - dueDay - (now.getUTCDay()+(((now.getUTCHours() - 4)<7) ? 1 : 7)), 7)
}


export function mod(n: number, m: number) {
    return ((n % m) + m) % m
}
