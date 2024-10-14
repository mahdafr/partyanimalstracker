import { ButtonRequestM } from './../mission_ui/button_missionrequest'

import { Separator } from "@/components/ui/separator"

const { execSync } = require('child_process');
const cmd = 'git log -1 HEAD'


export function Footer() {
    const cmd_out = execSync(cmd).toString();
    // get the Date component, then tokenize that string by ',' and ' ' to get: [DAY,MMM,DD]
    var arr:string[] = cmd_out.split('Date:')[1].split(',')[0].split(' ')
    // because 0-2 are empty strings, get DAY MMM DD as a readable string
    var date:string = arr[3] + ' ' + (new Date(arr[4]+'-1-01').getMonth()+1).toString() + '/' + arr[5];

    return (
        <div style={{margin:"auto"}}>
            {/* GET MISSIONS FROM USER */}
            <div className="footer-centered" style={{paddingTop:"16px", paddingBottom:"10px", maxWidth:"450px", margin:"auto"}}>
                <p className="w-full footer-text" style={{textAlign:"right", marginLeft:"5px"}}>
                    <em>Last updated: </em>
                    <em style={{color:"hsl(var(--foreground))", fontWeight:"bold"}}>{date}</em>
                </p>
                <ButtonRequestM marginRt="5px"></ButtonRequestM>
            </div>

            <Separator className="my-3 separator-line" style={{width:"95%"}} />
            
            {/* DISCLAIMER */}
            <p className="w-full footer-text" style={{margin:"auto", padding:"15px"}}><em>
                This website uses visual elements and design influences inspired by the Party Animals game.
                I am not affiliated with or endorsed by Party Animals, its developers, or the company behind the game.
                All trademarks, logos, and images related to Party Animals are the property of their respective owners.
                Any references to Party Animals are purely for artistic or descriptive purposes and do not imply any association, sponsorship, or approval by the game’s creators.
                If you are the owner of any content used on this website and would like it removed, please contact me, and I will promptly address your request.
            </em></p>
        </div>
    )
}