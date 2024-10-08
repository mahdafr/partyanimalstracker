import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BookPlus } from "lucide-react"

export function Footer() {
    return (
        <div style={{margin:"auto"}}>
            {/* GET MISSIONS FROM USER */}
            <div className="footer-centered" style={{paddingTop:"16px", paddingBottom:"10px", maxWidth:"350px", margin:"auto"}}>
                <p className="w-full footer-text" style={{textAlign:"right"}}>
                    <em>Missions not updated?</em>
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSetR8h3Y5ILsj9HD3dJVvKjjDDzADtqwq7wyMJZWwuuB8M8ug/viewform?usp=sf_link" 
                    className="w-full" >
                    <Button variant="ghost"><BookPlus/>
                        <p style={{marginInlineStart:"5px"}}>Submit your missions</p>
                    </Button>
                </a>
            </div>

            <Separator className="my-3 separator-line" style={{width:"95%"}} />
            
            {/* DISCLAIMER */}
            <p className="w-full footer-text" style={{margin:"auto", padding:"15px"}}><em>
                This website uses visual elements and design influences inspired by the Party Animals game.
                I am not affiliated with or endorsed by Party Animals, its developers, or the company behind the game.
                All trademarks, logos, and images related to Party Animals are the property of their respective owners.
                Any references to Party Animals are purely for artistic or descriptive purposes and do not imply any association, sponsorship, or approval by the game’s creators.
                If you are the owner of any content used on this website and would like it removed, please contact me, and I will promptly address your request.
            </em></p>
        </div>
    )
}