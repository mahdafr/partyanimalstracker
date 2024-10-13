import { Mission } from './mission_struct';
import { getDueDay } from '../time/time_utils'


export function getMissions(data_json: any, mission_tag: string,
                                        num_missions: number,
                                        mission_type: string): Array<Mission> {
    var mission_list:Mission[] = new Array<Mission>;
    var today:Date = new Date();
    data_json = data_json[mission_tag]

    for ( let i=0 ; i<num_missions ; i++ ) {
        var dueDate:Date = getDueDay(data_json[i]["dueDate"])

        // generate the unique id for this mission
        var id:string = getId(dueDate.toLocaleDateString(), mission_type, i);

        // find this mission in the cookies; if not found, make a new mission
        var mission:Mission = {
            id: id,
            prompt: data_json[i]["prompt"],
            progress: 0,
            required: data_json[i]["required"],
            reward: data_json[i]["reward"],
            date: today,
            due: dueDate,
        }

        // add to the cookies and accumulate
        mission_list.push(mission)
    }
    return mission_list;
}


const SEP:string = "_"
function getId(dueDate: string, mission_tag: string, mission_num:number) : string {
    console.log(dueDate  + SEP +
        mission_tag + SEP +
        mission_num.toString());
    return dueDate  + SEP +
        mission_tag + SEP +
        mission_num.toString();
}
