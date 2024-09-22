import { getMissions } from "./mission"
import { ThemeButton } from "./button_theme"
import { Sidebar } from "./sidebar_about"
import { AccordionM } from "./accordion"
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
      <div className="navigation">
        <Sidebar/>
        <ThemeButton/>
      </div>

      {/* title and description */}
      <div className="space-y-5">
        <div className={concertone.className}>
          <h1 className="text-5xl">PARTY ANIMALS TRACKER</h1>
        </div>
        <p className="text-xl text-muted-foreground">
            An online tool to track your progress towards Daily and Weekly Missions in Party Animals.
        </p>
        <div className="row-gap: 200px"></div>
      </div>

      {/* the Dailies and Weeklies tabs */}
      <Tabs defaultValue="daily">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="daily">
            <div className={jua.className}><b>DAILY</b></div>
          </TabsTrigger>
          <TabsTrigger value="weekly">
            <div className={jua.className}><b>WEEKLY</b></div>
          </TabsTrigger>
        </TabsList>

        {/* dailies */}
        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle><div className={jua.className}>Daily Missions</div></CardTitle>
            </CardHeader>
            <CardDescription>
              Track your daily Party Animals missions here.
            </CardDescription>
            <CardContent className="space-y-">
              <AccordionM title="Woof Faction Missions" data={woof_dailies} />
              <AccordionM title="Meow Faction Missions" data={meow_dailies} />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* weeklies */}
        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <CardTitle><div className={jua.className}>Weekly Missions</div></CardTitle>
            </CardHeader>
            <CardDescription>
              Track your weekly Party Animals missions here.
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
    
      <Separator className="my-4" />
      <p className="w-full"><em>
        This website uses visual elements and design influences inspired by the Party Animals game. I am not affiliated with or endorsed by Party Animals, its developers, or the company behind the game. All trademarks, logos, and images related to Party Animals are the property of their respective owners. Any references to Party Animals are purely for artistic or descriptive purposes and do not imply any association, sponsorship, or approval by the game’s creators.        If you are the owner of any content used on this website and would like it removed, please contact me, and I will promptly address your request.
      </em></p>
    </div>
  )
}
