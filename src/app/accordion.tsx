import { Columns } from "./columns"
import { DataTable } from "./datatable"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionMProps<TValue, TData> {
    title: string,
    data: any
}

export function AccordionM<TValue, TData>({title, data}: AccordionMProps<TValue, TData>){
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>
                <div className="container mx-auto py-10">
                    <DataTable columns={Columns} data={data} />
                </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
