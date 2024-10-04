import { getMissions } from "./mission/mission"
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
    <div className="space-x-2 px-5 py-5" suppressHydrationWarning>
      <Card className="justify-center">
        <CardHeader>
          <CardTitle>
            <div className={concertone.className}>
              {/* header buttons */}
              <div className="navigation">
                <ThemeButton/>
                <Sidebar/>
              </div>
              {/* title and description */}
              <h1>PARTY ANIMALS</h1>
              <h2>Mission Tracker</h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardDescription className="w-full" style={{marginTop:"-15px", color:"hsl(var(--foreground))", padding:"6%"}}>
            Your online tool to help track your progress towards daily and weekly missions in Party Animals.
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
