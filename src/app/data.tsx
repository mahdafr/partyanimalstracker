const SEP:string = "_"
const EVENT:string = "E";
const N_EVENT:string = "N";
const DAILY:string = "D";
const WEEKLY:string = "W";

// TODO: generate a better id schema
export function getId(date: string, event: boolean, daily: boolean, i:number) : string {
    return date + SEP +
            (event? EVENT : N_EVENT) + SEP +
            (daily? DAILY : WEEKLY) + SEP +
            i.toString();
}
