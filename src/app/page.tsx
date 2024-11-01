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
          <Tabs defaultValue="weekly">
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
                </CardHeader>
                <CardDescription></CardDescription>
                <CardContent className="space-y-2 text-align center">
                  <div className={jua.className}>There are no daily missions.</div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* weeklies */}
            <TabsContent value="weekly">
              <Card className="card" style={{backgroundColor:"hsl(var(--background))", marginBottom:"9px"}}>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <ClockCountdown daysLeft={true} dueDay={0} />
                </CardHeader>
                <CardDescription></CardDescription>
                <CardContent className="space-y-2">
                  <AccordionMGroup title="Weekly Missions" missions={weeklies} />
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
