import { Columns } from "./columns"
import { DataTable } from "./datatable"
import { jua } from "./fonts"

import { Missions } from "./mission_ui/accordion_mission"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionMGroupProps<TValue, TData> {
    title: string,
    data: any
}

export function AccordionMGroup<TValue, TData>({title, data}: AccordionMGroupProps<TValue, TData>){
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="accordion-item-group">
                <AccordionTrigger className={jua.className}>{title}</AccordionTrigger>
                <AccordionContent>
                {/* <div className="container py-5">
                    <DataTable columns={Columns} data={data} />
                </div> */}
                    <Missions missions={data}></Missions>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
