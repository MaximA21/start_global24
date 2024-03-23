"use client"
import {Button} from "@/components/ui/button"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import React, {useState} from 'react';

export function DialogDemo() {

    const [isOpen, setOpen] = useState(0);

    function handleClick() {
        setOpen(isOpen !== 7 ? isOpen + 1 : 0); // Setze den Zustand auf false, wenn der Button geklickt wird
    }

    return (
        isOpen === 0 ? <Button onClick={handleClick}>
                Next
            </Button> :


            isOpen === 1 ?
                <Dialog open={isOpen === 1}>
                    <DialogTrigger asChild>
                        <Button variant="outline">Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                        <DialogHeader>
                            <DialogTitle>Welcome to the Finance Market Introduction!</DialogTitle>
                            <DialogDescription>
                                <div className={"m-4"}>
                                    In this interactive session, we'll cover some fundamental concepts in the finance
                                    market!<br/> Whether you're new to investing or looking to expand your knowledge,
                                    this
                                    session is designed to provide you with a solid foundation in key concepts.
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                        <b>
                            What to Expect:
                        </b>
                        <b>
                            Overview:<br/>
                        </b>
                        <DialogDescription>
                            We'll start by exploring fundamental concepts such as the difference between ETFs and
                            stocks,
                            ESG
                            regulations, and risk management.
                        </DialogDescription>

                        <b>
                            Why Finance Matters:
                        </b>

                        <DialogDescription>
                            Understanding the finance market is essential for making informed decisions about your
                            money.
                            Whether
                            you're saving for retirement, planning for the future, or simply interested in how the
                            economy
                            works,
                            having a basic grasp of finance concepts can empower you to take control of your financial
                            future.
                        </DialogDescription>

                        <b>
                            Who Is This For:
                        </b>
                        <DialogDescription>
                            This session is designed for beginners who are new to the world of finance. No prior
                            knowledge
                            is
                            required just bring your curiosity and eagerness to learn!
                        </DialogDescription>
                        <br/>
                        <b>
                            Let's Get Started!!
                        </b>
                        <DialogFooter className="sm:justify-end">
                            <DialogClose asChild>
                                <Button onClick={handleClick}>
                                    Next
                                </Button>

                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                : isOpen === 2 ?
                    <Dialog open={isOpen === 2}>
                        <DialogContent className="sm:max-w-[825px]">
                            <DialogHeader>
                                <DialogTitle>Topic 1: Stock vs ETF</DialogTitle>
                                <b>Stocks:</b>
                                <DialogDescription>
                                    <div className={"m-4"}>
                                        When you buy a stock, you're buying a piece of a company.<br/> This means you share
                                        in
                                        its profits and losses. Stock prices go up and down based on how well the company is
                                        doing, what the market is like, and how investors feel.
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                            <b>
                                ETFs:
                            </b>
                            <DialogDescription>
                                In simplified terms ETFs are baskets that hold bunch of stocks. They give you a way to
                                invest in many things at once. ETFs spread out your investment risk. ETFs are good for
                                people who want to spread out their investments and take less risk than buying individual
                                stocks.
                            </DialogDescription>

                            <DialogFooter className="sm:justify-end">
                                <DialogClose asChild>
                                    <Button onClick={handleClick}>
                                        Next
                                    </Button>

                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>


                    :

                    isOpen === 3 ?
                        <Dialog open={isOpen === 3}>

                            <DialogContent className="sm:max-w-[825px]">
                                <DialogHeader>
                                    <DialogTitle>Question 1:</DialogTitle>
                                    <b>What are some advantages of investing in ETFs compared to individual stocks?</b>

                                </DialogHeader>

                                <RadioGroup defaultValue="option-one">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="option-one" id="option-one"/>
                                        <Label htmlFor="option-one">a) Diversification and lower risk </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="option-two" id="option-two"/>
                                        <Label htmlFor="option-two">b) Higher potential returns</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="option-three" id="option-three"/>
                                        <Label htmlFor="option-three">c) More control over investment choices</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="option-four" id="option-four"/>
                                        <Label htmlFor="option-four">d) No need for a brokerage account</Label>
                                    </div>
                                </RadioGroup>


                                <DialogFooter className="sm:justify-end">
                                    <DialogClose asChild>
                                        <Button onClick={handleClick}>
                                            Next
                                        </Button>

                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        : isOpen === 4 ?
                            <Dialog open={isOpen === 4}>
                                <DialogContent className="sm:max-w-[825px]">
                                    <DialogHeader>
                                        <DialogTitle>Topic 2: ESG regulations</DialogTitle>

                                        <DialogDescription>
                                            <div className={"m-4"}>
                                                ESG, short for Environmental, Social, and Governance, assesses a
                                                company's
                                                ethical and sustainable practices.<br/>
                                                <br/>
                                                Environmental: Focuses on managing environmental impact, including
                                                energy
                                                efficiency and waste management.<br/>
                                                <br/>
                                                Social: Evaluates relationships with employees, customers, and
                                                communities,
                                                including diversity initiatives.<br/>
                                                <br/>
                                                Governance: Examines leadership structure, board composition, and
                                                transparency
                                                in decision-making to ensure accountability.
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter className="sm:justify-end">
                                        <DialogClose asChild>
                                            <Button onClick={handleClick}>
                                                Next
                                            </Button>

                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            :
                            isOpen === 5 ?
                                <Dialog open={isOpen === 5}>

                                    <DialogContent className="sm:max-w-[825px]">
                                        <DialogHeader>
                                            <DialogTitle>Question 2:</DialogTitle>
                                            <b>Why is it important for investors to consider ESG factors when making investment
                                                decisions?</b>

                                        </DialogHeader>

                                        <RadioGroup defaultValue="option-one">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-one" id="option-one"/>
                                                <Label htmlFor="option-one">a) Income, Savings, Gains </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-two" id="option-two"/>
                                                <Label htmlFor="option-two">b) Ethics, Security, Profit</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-three" id="option-three"/>
                                                <Label htmlFor="option-three">c) Environment, Social, Governance </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="option-four" id="option-four"/>
                                                <Label htmlFor="option-four">d) Retail, Strategy, Global Markets</Label>
                                            </div>
                                        </RadioGroup>


                                        <DialogFooter className="sm:justify-end">
                                            <DialogClose asChild>
                                                <Button onClick={handleClick}>
                                                    Next
                                                </Button>

                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog> : isOpen === 6 ?
                                    <Dialog open={isOpen === 6}>
                                        <DialogContent className="sm:max-w-[825px]">
                                            <DialogHeader>
                                                <DialogTitle>Topic 3: risk in the finance market</DialogTitle>

                                                <DialogDescription>
                                                    <div className={"m-4"}>
                                                        Risk is an inherent part of investing and can take various forms.
                                                        <br/>
                                                        <br/>
                                                        <b>Market Risk:</b> This is the risk of investments losing value due to
                                                        economic or
                                                        market factors like inflation, interest rates, or geopolitical events.
                                                        <br/>
                                                        <br/>
                                                        <b>Company Risk: </b>Also known as "specific risk," it's associated with
                                                        investing
                                                        in a particular company and includes factors like management quality,
                                                        competitive position, and industry trends.
                                                        <br/>
                                                        <br/>
                                                        <b> Liquidity Risk: </b>This is the risk that an investor may not be able to
                                                        quickly
                                                        sell an investment at a fair price, especially in volatile market
                                                        conditions.
                                                        <br/>
                                                        <br/>
                                                        <b> Credit Risk:</b> This refers to the risk of loss due to a borrower
                                                        failing
                                                        to
                                                        repay a loan or meet contractual obligations, particularly relevant for
                                                        bond
                                                        investors.

                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="sm:justify-end">
                                                <DialogClose asChild>
                                                    <Button onClick={handleClick}>
                                                        Next
                                                    </Button>

                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    : isOpen === 7 ?
                                        <Dialog open={isOpen === 7}>

                                            <DialogContent className="sm:max-w-[825px]">
                                                <DialogHeader>
                                                    <DialogTitle>Question 3:</DialogTitle>
                                                    <b>How can investors mitigate risk in their investment portfolios?</b>
                                                </DialogHeader>
                                                <RadioGroup defaultValue="option-one">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="option-one" id="option-one"/>
                                                        <Label htmlFor="option-one">a) Investing only in one type of asset </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="option-two" id="option-two"/>
                                                        <Label htmlFor="option-two">b) Diversifying investments across different asset classes </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="option-three" id="option-three"/>
                                                        <Label htmlFor="option-three">c) Ignoring market trends and economic indicators</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="option-four" id="option-four"/>
                                                        <Label htmlFor="option-four">d) Allocating all investments to high-risk securities</Label>
                                                    </div>
                                                </RadioGroup>


                                                <DialogFooter className="sm:justify-end">
                                                    <DialogClose asChild>
                                                        <Button onClick={handleClick}>
                                                            Finish
                                                        </Button>

                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog> : null

    )
}

