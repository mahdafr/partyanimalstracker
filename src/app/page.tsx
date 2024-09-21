import { getMissions } from "./mission"
import { Columns } from "./columns"
import { DataTable } from "./datatable"
import { promises as fs } from 'fs';

import { Menu, Linkedin, Instagram, Globe } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
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
import { Concert_One, Playpen_Sans, Jua } from "next/font/google";

const concertone = Concert_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

const playpen = Playpen_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

const jua = Jua({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/missions.json', 'utf8');
  const data_json = JSON.parse(file);
  const woof_dailies = getMissions(data_json["woof_daily"], 3, true, true);
  const woof_weeklies = getMissions(data_json["woof_weekly"], 3, true, false);
  const meow_dailies = getMissions(data_json["meow_daily"], 3, true, true);
  const meow_weeklies = getMissions(data_json["meow_weekly"], 3, true, false);
  const weeklies = getMissions(data_json["weeklies"], 4, false, false);

  return (
    <div className="vertical-align justify-center items-center justify-between space-x-2 px-5 py-5">
      <Sheet>
        <SheetTrigger asChild>
        <Button variant="outline" size="icon">
              <Menu className="h-7 w-7" />
            </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className={concertone.className}>About</SheetTitle>
            <Alert>
              <AlertTitle  className={playpen.className}>Thanks for your patience!</AlertTitle>
              <AlertDescription>
                This application is a work in progress and updates are rolled out regularly.
              </AlertDescription>
            </Alert>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <div className={playpen.className}><b>
            Thanks for using my first project building a web application in NextJS!
          </b></div>
          <p> </p>
          <div>
            I'd love to give a big shoutout to the developer for the <a href="https://www.paliatracker.com" >Palia Tracker</a> project that inspired this project.
          </div>
          <SheetFooter>
            <SheetClose/>
            <div className="grid grid-cols-4 items-center gap-4">
              <a href="https://www.linkedin.com/in/mahdafr"><Button><Linkedin/></Button></a>
              <a href="https://www.instagram.com/mahdafr13/"><Button><Instagram/></Button></a>
              <a href="http://mahdafr.com/"><Button><Globe/></Button></a>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* title and description */}
      <div className="space-y-5">
        <h1 className={concertone.className}>
          <p className="text-5xl text-orange">PARTY ANIMALS Tracker</p>
        </h1>
        <p className="text-xl text-muted-foreground">
          An online tool to track your mission progress for Party Animals.
        </p>
        <div className="row-gap: 200px"></div>
      </div>

      {/* the Dailies and Weeklies tabs */}
      <Tabs defaultValue="daily">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="daily">
            <div className={jua.className}>
              <div className="text-xl"><b>DAILY</b></div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="weekly">
            <div className={jua.className}>
              <div className="text-xl"><b>WEEKLY</b></div>
            </div></TabsTrigger>
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
              <CardDescription>
                Track your weekly Party Animals missions here.
              </CardDescription>
            </CardHeader>
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
    
      {/* <Separator className="my-4" /> */}
    </div>
  )
}
