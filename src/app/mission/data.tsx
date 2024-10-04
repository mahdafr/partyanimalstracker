const SEP:string = "-"
const EVENT:string = "E";
const N_EVENT:string = "N";
const DAILY:string = "D";
const WEEKLY:string = "W";

// TODO: generate a better id schema
export function getId(date: string, event: boolean, daily: boolean, group: string, i:number) : string {
    console.log(date  + SEP +
        (event? EVENT : N_EVENT) + SEP +
        (daily? DAILY : WEEKLY) + SEP +
        group + SEP +
        i.toString());
    return date + SEP +
            (event? EVENT : N_EVENT) + SEP +
            (daily? DAILY : WEEKLY) + SEP +
            group + SEP +
            i.toString();
}

// finds the next Sunday (not including today, if Sunday)
export function getNextSunday() : Date {
    var d = new Date();
    d.setDate(d.getDate() + (7 - d.getDay()) % 7);
    return d;
}