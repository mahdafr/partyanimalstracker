import { getMissions } from "./mission"
import { ThemeButton } from "./button_theme"
import { Sidebar } from "./sidebar_about"
import { AccordionM } from "./accordion"
import { ClockCountdown } from "./clock_timeleft"
import { concertone, jua } from "./fonts"
import { promises as fs } from 'fs';

import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"


export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/missions.json', 'utf8');
  const data_json = JSON.parse(file);
  const woof_dailies = getMissions(data_json["woof_daily"], 3, true, true, "woof_daily");
  const woof_weeklies = getMissions(data_json["woof_weekly"], 3, true, false, "woof_weekly");
  const meow_dailies = getMissions(data_json["meow_daily"], 3, true, true, "meow_daily");
  const meow_weeklies = getMissions(data_json["meow_weekly"], 3, true, false, "meow_weekly");
  const weeklies = getMissions(data_json["weeklies"], 4, false, false, "weeklies");

  return (
    <div className="space-x-2 px-5 py-5">
      <Card className="justify-center">
        <CardHeader>
          <CardTitle>
            <div className={concertone.className}>
              {/* info button */}
              <div className="navigation">
                {/* theme button */}
                <ThemeButton/>
                <Sidebar/>
              </div>
              {/* title and description */}
              <h1 className="text-5xl">PARTY ANIMALS TRACKER</h1>
            </div>
          </CardTitle>
        </CardHeader>
        <CardDescription className="w-full justify-between space-x-2 py-2">
          <h4 className="text-xl">
            An online tool to track your progress towards daily and weekly missions in Party Animals.
          </h4>
        </CardDescription>
        <CardContent>
          <Tabs defaultValue="daily">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="daily" >
                <div className={jua.className}><b>DAILY</b></div>
              </TabsTrigger>
              <TabsTrigger value="weekly">
                <div className={jua.className}><b>WEEKLY</b></div>
              </TabsTrigger>
            </TabsList>

            {/* dailies */}
            <TabsContent value="daily">
              <Card style={{backgroundColor:"hsl(var(--background))"}}>
                <CardHeader>
                  <div className="navigation">
                    <CardTitle><div className={jua.className}>Daily Missions</div></CardTitle>
                    <ClockCountdown daysLeft={false}/>
                  </div>
                </CardHeader>
                <CardDescription>
                  <h5>Track your daily missions here.</h5>
                </CardDescription>
                <CardContent className="space-y-2">
                  <AccordionM title="Woof Faction Missions" data={woof_dailies} />
                  <AccordionM title="Meow Faction Missions" data={meow_dailies} />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* weeklies */}
            <TabsContent value="weekly">
            <Card style={{backgroundColor:"hsl(var(--background))"}}>
                <CardHeader>
                  <div className="navigation">
                    <CardTitle><div className={jua.className}>Weekly Missions</div></CardTitle>
                    <ClockCountdown daysLeft={true}/>
                  </div>
                </CardHeader>
                <CardDescription>
                  <h5>Track your weekly missions here.</h5>
                </CardDescription>
                <CardContent className="space-y-2">
                  {/* non-event weekly missions */}
                  <AccordionM title="Weekly Missions" data={weeklies} />
                  {/* event weekly missions */}
                  <AccordionM title="Woof Faction Missions" data={woof_weeklies} />
                  <AccordionM title="Meow Faction Missions" data={meow_weeklies} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    
      <Separator className="my-3" />
      <p className="w-full" style={{color:"--muted-foreground"}}><em>
        This website uses visual elements and design influences inspired by the Party Animals game. I am not affiliated with or endorsed by Party Animals, its developers, or the company behind the game. All trademarks, logos, and images related to Party Animals are the property of their respective owners. Any references to Party Animals are purely for artistic or descriptive purposes and do not imply any association, sponsorship, or approval by the game’s creators.        If you are the owner of any content used on this website and would like it removed, please contact me, and I will promptly address your request.
      </em></p>
    </div>
  )
}
