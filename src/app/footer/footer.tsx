import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <div>
            <Separator className="my-3" />
            <p className="w-full" style={{color:"--muted-foreground", marginLeft:"2px", marginRight:"25px"}}><em>
                This website uses visual elements and design influences inspired by the Party Animals game. I am not affiliated with or endorsed by Party Animals, its developers, or the company behind the game. All trademarks, logos, and images related to Party Animals are the property of their respective owners. Any references to Party Animals are purely for artistic or descriptive purposes and do not imply any association, sponsorship, or approval by the game’s creators.        If you are the owner of any content used on this website and would like it removed, please contact me, and I will promptly address your request.
            </em></p>
        </div>
    )
}