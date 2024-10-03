import { concertone, playpen } from "../fonts"
import { BadgeInfo, Linkedin, Globe } from "lucide-react"
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
                <BadgeInfo className="h-7 w-7"/>
            </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[540px]" side="right">
                <SheetHeader>
                    <SheetTitle className={concertone.className}>
                        <h1 className="text-2xl">About</h1>
                    </SheetTitle>
                    <Alert>
                        <AlertTitle className={playpen.className}><b>Thanks for your patience!</b></AlertTitle>
                        <AlertDescription>
                            This application is a work in progress and updates are rolled out regularly.
                        </AlertDescription>
                    </Alert>
                    <SheetDescription className="w-full justify-between space-x-2 py-2">
                        <div className={playpen.className}>
                            <p className="w-full" style={{color:"hsl(var(--foreground))"}}>
                                Thanks for using my first project building a web application in NextJS!
                            </p>
                        </div>
                        <div className="center space-x-2 py-4">
                            <p className="w-full" style={{color:"hsl(var(--foreground))"}}>
                                I'd love to give a shoutout to the developer for the <a href="https://www.paliatracker.com" >Palia Tracker</a> project that has inpired me with its beautiful interface and awesome libraries.
                            </p>
                        </div>
                        <a href="https://www.linkedin.com/in/mahdafr">
                            <Button variant="ghost"><Linkedin/></Button></a>
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