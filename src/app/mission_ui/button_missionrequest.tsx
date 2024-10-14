import { Button } from "@/components/ui/button"
import { BookPlus } from "lucide-react"


interface ButtonRequestMProps<TValue> {
    marginRt: string
}

export function ButtonRequestM<TValue>({marginRt} : ButtonRequestMProps<string>) {
    return (
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSetR8h3Y5ILsj9HD3dJVvKjjDDzADtqwq7wyMJZWwuuB8M8ug/viewform?usp=sf_link"
            style={{marginRight:marginRt}} >
            <Button variant="ghost"><BookPlus/>
                <p style={{marginInlineStart:"5px"}}>Submit a missions update request</p>
            </Button>
        </a>
    )
}