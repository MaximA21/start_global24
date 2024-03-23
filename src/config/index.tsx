export const PRODUCT_CATEGORIES = [
    {
        label: "Shortcuts",
        value: "shortcuts" as const,
        featured: [
            {
                name: "Evaluate your portfolio in terms of the ESG score",
                href: "test",
                imageSrc: "/nav/ui-kits/esg.jpg",
            },
            {
                name: "Do the introduction again",
                href: "#",
                imageSrc: "/nav/ui-kits/stonks.webp",
            },
            {
                name: "Talk to an AI-Chatbot",
                href: "bot",
                imageSrc: "/nav/ui-kits/bot.png",
            },
        ]
    },
    {
        label: "Discuss",
        value: "form" as const,
        featured: [
            {
                name: "Technology-Channel",
                href: "dis-tech",
                imageSrc: "/nav/ui-kits/tech.avif",
            },
            {
                name: "Energy-Channel",
                href: "#",
                imageSrc: "/nav/ui-kits/energy.jpeg",
            },
            {
                name: "Healthcare-Channel",
                href: "#",
                imageSrc: "/nav/ui-kits/health.webp",
            },
        ]
    },

]
type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
    // ...
]
