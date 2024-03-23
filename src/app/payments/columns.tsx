"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    score: "A" | "B" | "C" | "D" | "E"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "score",
        header: "ESG Score",
    },
    {
        accessorKey: "isin",
        header: "ISIN",
    },
    {
        accessorKey: "rating",
        header: "Rating",
    },
]
