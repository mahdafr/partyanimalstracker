import { getMissions } from "./mission/mission"
import { Footer } from "./footer/footer"
import { AccordionMGroup } from "./mission_ui/accordion_group"
import { ClockCountdown } from "./time/clock_timeleft"
import { promises as fs } from 'fs';

import { jua } from "./fonts"

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
import { Header } from "./header/header"


export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/missions.json', 'utf8');
  const data_json = JSON.parse(file);
  const woof_dailies = getMissions(data_json, "woof_daily", 3, "WD");
  const woof_weeklies = getMissions(data_json, "woof_weekly", 3, "WW");
  const meow_dailies = getMissions(data_json, "meow_daily", 3, "MD");
  const meow_weeklies = getMissions(data_json, "meow_weekly", 3, "MW");
  const weeklies = getMissions(data_json, "weeklies", 4, "W");

  return (
    <div className="space-x-2 px-5 py-5" suppressHydrationWarning   style={{width:"100vw", maxWidth:"750px", margin:"auto"}}>
      <Card className="card justify-center">
        <CardHeader>
          <CardTitle>
            <Header></Header>
          </CardTitle>
        </CardHeader>
        <CardDescription className="w-full" style={{color:"hsl(var(--foreground))", padding:"25px"}}>
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
              <Card className="card" style={{backgroundColor:"hsl(var(--background))"}}>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <ClockCountdown daysLeft={false} dueDay={-1} />
                  {/* <p style={{fontSize:"xx-small", fontStyle:"italic", color:"hsl(var(--primary-progress))"}}>to midnight</p> */}
                </CardHeader>
                <CardDescription></CardDescription>
                <CardContent className="space-y-2">
                  <AccordionMGroup title="Woof Faction Missions" missions={woof_dailies} />
                  <AccordionMGroup title="Meow Faction Missions" missions={meow_dailies} />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* weeklies */}
            <TabsContent value="weekly">
              {/* non-event weekly missions */}
              <Card className="card" style={{backgroundColor:"hsl(var(--background))", marginBottom:"9px"}}>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <ClockCountdown daysLeft={true} dueDay={0} />
                    {/* <p style={{fontSize:"x-small", fontStyle:"italic", padding:"-5px", color:"hsl(var(--primary-progress))", margin:"1px"}}>til day end</p> */}
                </CardHeader>
                <CardDescription>
                </CardDescription>
                <CardContent className="space-y-2">
                  <AccordionMGroup title="Weekly Missions" missions={weeklies} />
                </CardContent>
              </Card>
              
              {/* event weekly missions */}
              <Card className="card" style={{backgroundColor:"hsl(var(--background))"}}>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <ClockCountdown daysLeft={true} dueDay={4} />
                </CardHeader>
                <CardDescription>
                </CardDescription>
                <CardContent className="space-y-2">
                  <AccordionMGroup title="Woof Faction Missions" missions={woof_weeklies} />
                  <AccordionMGroup title="Meow Faction Missions" missions={meow_weeklies} />
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
