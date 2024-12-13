import { concertone, jua } from "../fonts"
import { BadgeInfo, Twitter, BookPlus } from "lucide-react"
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
import { ButtonRequestM } from "../mission_ui/button_missionrequest"

export const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
                <BadgeInfo className="h-7 w-7"/>
            </Button>
            </SheetTrigger>
            <SheetContent className="w-[75%]" side="right">
                <SheetHeader>
                    <SheetTitle className={concertone.className}>
                        <h1 className="text-2xl">About</h1>
                    </SheetTitle>
                    <Alert className="alert-dialog">
                        <AlertTitle className={jua.className}>
                            Thanks for your patience!
                        </AlertTitle>
                        <AlertDescription>
                            <p className="w-full" style={{fontSize:"0.95rem"}}>
                                This application is a work in progress and updates are rolled out regularly.
                            </p>
                        </AlertDescription>
                    </Alert>
                    <SheetDescription className="w-full justify-between space-x-2 py-2">
                        <div className={jua.className} style={{marginLeft:"-6px"}}>
                            <p className="w-full" style={{fontSize:"1.1rem", color:"hsl(var(--foreground))", lineHeight:"1.5rem"}}>
                                Thanks for using my first project building a web application in NextJS!
                            </p>
                        </div>
                        <div className="center py-4" style={{marginLeft:"-5px"}}>
                            <p className="w-full" style={{fontSize:"0.9rem", lineHeight:"1.5rem", color:"hsl(var(--foreground))"}}>
                                I'd love to give a shoutout to the developer for the <a href="https://www.paliatracker.com" >Palia Tracker</a> project that has inspired me with its beautiful interface and awesome libraries.
                                Though I'm not taking full advantage of the awesome libraries they used, I had so much fun going on this front-end development journey.
                            </p>
                            <p style={{padding:"10px"}}></p>
                            <p className="w-full" style={{fontSize:"0.9rem", lineHeight:"1.5rem", color:"hsl(var(--foreground))"}}>
                                Who am I? Check out my <a href="https://www.instagram.com/justalilstitious/">Instagram</a>.
                            </p>
                        </div>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter className="w-full" style={{display:"inline-block", textAlign:"center"}}>
                    <div className="w-full" style={{textAlign:"center"}}>
                        <a href="https://www.x.com/partyanimalsmt">
                            <Button variant="ghost"><Twitter/><p style={{marginInlineStart:"5px"}}>@partyanimalsmt</p></Button>
                        </a>
                        <ButtonRequestM marginRt="0px"></ButtonRequestM>
                    </div>
                    <SheetClose/>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}