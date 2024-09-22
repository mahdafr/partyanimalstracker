import { getMissions } from "./mission"
import { Columns } from "./columns"
import { DataTable } from "./datatable"
import { promises as fs } from 'fs';

import { Menu, Linkedin, Instagram, Globe } from "lucide-react"
import { Concert_One, Playpen_Sans, Jua } from "next/font/google";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
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
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const concertone = Concert_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: false,
})

const playpen = Playpen_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: false,
})

const jua = Jua({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: false,
})

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/missions.json', 'utf8');
  const data_json = JSON.parse(file);
  const woof_dailies = getMissions(data_json["woof_daily"], 3, true, true, "woof_daily");
  const woof_weeklies = getMissions(data_json["woof_weekly"], 3, true, false, "woof_weekly");
  const meow_dailies = getMissions(data_json["meow_daily"], 3, true, true, "meow_daily");
  const meow_weeklies = getMissions(data_json["meow_weekly"], 3, true, false, "meow_weekly");
  const weeklies = getMissions(data_json["weeklies"], 4, false, false, "weeklies");
  const theme = "Dark Theme"

  return (
    <div className="vertical-align justify-center items-center justify-between space-x-2 px-5 py-5">
      <Sheet>
        <SheetTrigger asChild>
        <Button variant="secondary" size="icon">
          <Menu className="h-7 w-7"/>
        </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className={concertone.className}>
              <h1 className="text-2xl">About</h1>
              {/* <div className="flex items-center space-x-2">
                <Switch id="theme"/>
                  checked={}
                  onCheckedChange={}/>
                <Label htmlFor="theme">{theme}</Label>
              </div> */}
            </SheetTitle>
            <Alert>
              <AlertTitle className={playpen.className}><h4>Thanks for your patience!</h4></AlertTitle>
              <AlertDescription>
                <h5>This application is a work in progress and updates are rolled out regularly.</h5>
              </AlertDescription>
            </Alert>
            <SheetDescription className="w-full center justify-between space-x-2 px-2 py-2">
              <div className={playpen.className}><div className="text-xl">
                Thanks for using my first project building a web application in NextJS!
              </div></div>
              <div className="center space-x-2 px-2 py-5">
                I'd love to give a shoutout to the developer for the <a href="https://www.paliatracker.com" >Palia Tracker</a> project that has inpired me with its beautiful interface and awesome libraries.
              </div>
              <a href="https://www.linkedin.com/in/mahdafr">
                <Button variant="ghost"><Linkedin/></Button></a>
              <a href="https://www.instagram.com/mahdafr13/">
                <Button variant="ghost"><Instagram/></Button></a>
              <a href="http://mahdafr.com/">
                <Button variant="ghost"><Globe/></Button></a>
            </SheetDescription>
            </SheetHeader>
          <SheetFooter>
            <SheetClose/>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* title and description */}
      <div className="space-y-5">
        <div className={concertone.className}>
          <h1 className="text-5xl">PARTY ANIMALS TRACKER</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          {/* <div ><em> */}
            An online tool to track your progress towards Daily and Weekly Missions in Party Animals.
          {/* </em></div> */}
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
            <CardContent className="space-y-2">
              {/* event daily missions */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Woof Faction Missions</AccordionTrigger>
                  <AccordionContent>
                    <div className="container mx-auto py-10">
                      <DataTable columns={Columns} data={woof_dailies} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* event daily missions */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Meow Faction Missions</AccordionTrigger>
                  <AccordionContent>
                    <div className="container mx-auto py-10">
                      <DataTable columns={Columns} data={meow_dailies} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Missions</AccordionTrigger>
                  <AccordionContent>
                    <div className="container mx-auto py-10">
                      <DataTable columns={Columns} data={weeklies} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* event weekly missions */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Woof Faction Missions</AccordionTrigger>
                  <AccordionContent>
                    <div className="container mx-auto py-10">
                      <DataTable columns={Columns} data={woof_weeklies} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* event weekly missions */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Meow Faction Missions</AccordionTrigger>
                  <AccordionContent>
                    <div className="container mx-auto py-10">
                      <DataTable columns={Columns} data={meow_weeklies} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
