import { Columns } from "./columns"
import { DataTable } from "./datatable"

import { LineM } from "./mission/layout_mission"

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
            <AccordionItem value="item-1">
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>
                {/* <div className="container py-5">
                    <DataTable columns={Columns} data={data} />
                </div> */}
                    <LineM missions={data}></LineM>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
