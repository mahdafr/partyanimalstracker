import { getId, getNextSunday } from './data'

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
}

export function getMissions(data_json: Array<JSONMission>, count: number, event: boolean, daily: boolean, group: string): Array<Mission> {
    var mission_list:Mission[] = new Array<Mission>;
    var today:Date = new Date();

    for ( let i=0 ; i<count ; i++ ) {
        // generate the unique id for this mission
        var id:string = getId(today.toLocaleDateString(), event, daily, group, i);

        // find this mission in the cookies; if not found, make a new mission
        var mission:Mission = {
            id: id,
            prompt: data_json[i]["prompt"],
            progress: 0,
            required: data_json[i]["required"],
            reward: data_json[i]["reward"],
            date: today,
            due: daily ? today : getNextSunday(),
        }

        // add to the cookies and accumulate
        mission_list.push(mission)
    }
    return mission_list;
}
