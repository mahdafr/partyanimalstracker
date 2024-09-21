import { getCookie, setCookie, hasCookie } from 'cookies-next';
import * as data from './data'

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

export function getMissions(data_json: Array<T>, count: number, event: boolean, daily: boolean): Array<Mission> {
    var mission_list:Mission[] = new Array<Mission>;
    var today:Date = new Date();
    var today_string:string = today.toDateString();

    for ( let i=0 ; i<count ; i++ ) {
        // generate the unique id for this mission
        var id:string = data.getId(today_string, event, daily, i);

        // find this mission in the cookies; if not found, make a new mission
        var mission:Mission = {
            id: id,
            prompt: data_json[i]["prompt"],
            progress: getProgress(id),
            required: data_json[i]["required"],
            reward: data_json[i]["reward"],
            date: today,
            due: daily ? today : getNextSunday(),
        }

        // add to the cookies and accumulate
        update(mission, i)
        mission_list.push(mission)
    }

    return mission_list;
}

// load from cookies; if CNF, progress is 0
function getProgress(id: string) : number {
    return ( hasCookie(id) ) ? parseInt(getCookie(id)!) : 0
}

// finds the next Sunday (not including today, if Sunday)
function getNextSunday() : Date {
    var d = new Date();
    d.setDate(d.getDate() + (((7 - d.getDay()) % 7) || 7));
    return d;
}

// bake a cookie with this new info
export async function update(mission: Mission, progress: number) : Promise<void> {
    mission.progress = progress
    setCookie(mission.id, mission.progress.toString())
}
