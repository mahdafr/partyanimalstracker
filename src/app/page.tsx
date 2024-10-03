import { getMissions } from "./mission"
import { ThemeButton } from "./header/button_theme"
import { Sidebar } from "./header/sidebar_about"
import { Footer } from "./footer/footer"
import { AccordionMGroup } from "./accordion_group"
import { ClockCountdown } from "./clock_timeleft"
import { concertone, jua } from "./fonts"
import { promises as fs } from 'fs';

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
              <h1 className="text-4xl" style={{justifyItems: "center", textAlign:"center", justifyContent:"center"}}>PARTY ANIMALS</h1>
              <h2 className="text-2xl" style={{textAlign:"center", justifyContent:"center"}}>Mission Tracker</h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardDescription className="w-full justify-between space-x-2 py-2">
          <h4 className="text-md" style={{marginLeft:"9px", marginRight:"9px"}}>
            Your online tool to help track your progress towards daily and weekly missions in Party Animals.
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
                  <CardTitle></CardTitle>
                  <ClockCountdown daysLeft={false}/>
                </CardHeader>
                <CardDescription></CardDescription>
                <CardContent className="space-y-2">
                  <AccordionMGroup title="Woof Faction Missions" data={woof_dailies} />
                  <AccordionMGroup title="Meow Faction Missions" data={meow_dailies} />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* weeklies */}
            <TabsContent value="weekly">
            <Card style={{backgroundColor:"hsl(var(--background))"}}>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <ClockCountdown daysLeft={true}/>
                </CardHeader>
                <CardDescription></CardDescription>
                <CardContent className="space-y-2">
                  {/* non-event weekly missions */}
                  <AccordionMGroup title="Weekly Missions" data={weeklies} />
                  {/* event weekly missions */}
                  <AccordionMGroup title="Woof Faction Missions" data={woof_weeklies} />
                  <AccordionMGroup title="Meow Faction Missions" data={meow_weeklies} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    
      <Footer></Footer>
    </div>
  )
}
