import { Mission, getMissions } from "./mission"
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
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>About</SheetTitle>
            <Alert>
              <AlertTitle>Thanks for your patience!</AlertTitle>
              <AlertDescription>
                This application is a work in progress and updates are rolled out regularly.
              </AlertDescription>
            </Alert>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          
          This is my first project building a web application and building in NextJS! 
          So, I'd love to give a big shoutout to the developer for the <a href="https://www.paliatracker.com" >Palia Tracker</a> application that inspired this website. 
          I love everything about that project, especially the interface and design which inspired me to use the same libraries for this project.
          <SheetFooter>
            <SheetClose asChild/>
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
        <p className="text-3xl font-large">Party Animals Missions Tracker</p>
        
        <p className="text-xl text-muted-foreground">
          An online tool to track your mission progress for Party Animals.
        </p>
        <div className="row-gap: 200px"></div>
      </div>

      {/* the Dailies and Weeklies tabs */}
      <Tabs defaultValue="daily" className="w">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
        </TabsList>

        {/* dailies */}
        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Daily Missions</CardTitle>
            </CardHeader>
            <CardDescription>
              Track your daily Party Animals missions here.
            </CardDescription>
            <CardContent className="space-y-2">
              {/* non-event daily missions */}
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
              <CardTitle>Weekly Missions</CardTitle>
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
