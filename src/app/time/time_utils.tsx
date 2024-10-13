// returns the date of the next dueDay
export function getDueDay(dueBy: number) : Date {
    var todayET = dateInET(new Date());
    if ( dueBy < 0 )
        return new Date(todayET)
    return getNext(new Date(todayET), dueBy)
}

// calculate the next (day: 0-7) from today
function getNext(dateET: Date, nextDay: number) {
    return new Date(dateET.setDate(dateET.getDate() + ((7+nextDay) - dateET.getDay()) % 7));
}

// get this date (MM-DD-YYYY) in ET as string
export function dateInET(day: Date) {
    var s = day.toLocaleString('en-us', {
        month: 'numeric', 
        day: 'numeric',
        year: '2-digit',
        timeZone: 'America/New_York'
    })
    return s
}

// calculate the day (0-7) in ET
export function dayInET(now: Date) {
    return now.getUTCDay() - (((now.getUTCHours() - 4) < 0) ? 1 : 0)
}

// calculate how many days til
export function getDaysTil(now: Date, dueDay: number) {
    return mod(dueDay - dayInET(now), 7)
}

export function mod(n: number, m: number) {
    return ((n % m) + m) % m
}
