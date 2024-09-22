import { concertone, playpen } from "./fonts"
import { Menu, Linkedin, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
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

export const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7"/>
            </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                <SheetTitle className={concertone.className}>
                    <h1 className="text-2xl">About</h1>
                </SheetTitle>
                <Alert>
                    <AlertTitle className={playpen.className}><h4>Thanks for your patience!</h4></AlertTitle>
                    <AlertDescription>
                    <h5>This application is a work in progress and updates are rolled out regularly.</h5>
                    </AlertDescription>
                </Alert>
                <SheetDescription className="w-full justify-between space-x-2 py-2">
                    <div className={playpen.className}><div className="text-xl">
                    Thanks for using my first project building a web application in NextJS!
                    </div></div>
                    <div className="center space-x-2 py-4">
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
    )
}