"use client"

import 'react'
import {ThemeProvider} from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import {useState} from 'react'
import News from "@/components/ui/news";

const dayData = [
    {name: '12AM', value: 80},
    {name: '1AM', value: 60},
    {name: '2AM', value: 50},
    {name: '3AM', value: 40},
    {name: '4AM', value: 60},
    {name: '5AM', value: 70},
    {name: '6AM', value: 90},
    {name: '7AM', value: 100},
    {name: '8AM', value: 110},
    {name: '9AM', value: 100},
    {name: '10AM', value: 120},
    {name: '11AM', value: 150},
    {name: '12PM', value: 180},
    {name: '1PM', value: 200},
    {name: '2PM', value: 220},
    {name: '3PM', value: 250},
    {name: '4PM', value: 270},
    {name: '5PM', value: 300},
    {name: '6PM', value: 320},
    {name: '7PM', value: 340},
    {name: '8PM', value: 360},
    {name: '9PM', value: 380},
    {name: '10PM', value: 400},
    {name: '11PM', value: 420},
]


const monthData = [
    {name: 'Jan', value: 1000},
    {name: 'Feb', value: 2000},
    {name: 'Mar', value: 1500},
    {name: 'Apr', value: 2500},
    {name: 'May', value: 2000},
    {name: 'Jun', value: 2800},
    {name: 'Jul', value: 3000},
    {name: 'Aug', value: 2700},
    {name: 'Sep', value: 2600},
    {name: 'Oct', value: 3100},
    {name: 'Nov', value: 2900},
    {name: 'Dec', value: 3200},
]

const yearData = [
    {name: '2018', value: 20000},
    {name: '2019', value: 25000},
    {name: '2020', value: 22000},
    {name: '2021', value: 28000},
    {name: '2022', value: 30000},
]

interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: any }[];
}


const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{
                backgroundColor: 'dark',
                padding: '3px',
                border: '1px solid #000000',
                borderRadius: '9px',
                fontSize: '15px',
                color: 'grey',
            }}>
                <p>{payload[0].value + "CHF"}</p>
            </div>
        );
    }

    return null;
};

function App() {
    const [chartData, setChartData] = useState(dayData);
    const [lineColor, setLineColor] = useState('#8884d8');
    const handleChartChange = (option: any) => {
        switch (option) {
            case 'day':
                setChartData(dayData)
                setLineColor('#8884d8')
                break
            case 'month':
                setChartData(monthData)
                setLineColor('#82ca9d')
                break
            case 'year':
                setChartData(yearData)
                setLineColor('#ffc658')
                break
            default:
                break
        }
    }

    return (
        <>
            <h1 className={"text-center text-7xl pt-8 mb-16"}>Google</h1>
            <div className={"flex gap-16 justify-evenly"}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '3rem',
                    marginLeft: "50px"
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '5px'

                    }}>
                        <button className={"bg-white"} onClick={() => handleChartChange('day')}>Day</button>
                        <button onClick={() => handleChartChange('month')}>Month</button>
                        <button onClick={() => handleChartChange('year')}>Year</button>
                    </div>
                    <LineChart width={500} height={350} data={chartData} style={{marginTop: '20px'}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip content={<CustomTooltip/>}/>
                        <Legend/>
                        <Line type="monotone" dataKey="value" stroke={lineColor} dot={false}/>
                    </LineChart>
                </div>
                <div className={"mr-0"}>

                    <News></News>
                </div>
                <div className={"max-w-3xl"}>

                    <p><b>Alphabet Inc. </b>is a multinational conglomerate that came into existence in 2015 as a part of a
                        corporate restructuring of Google.<br/><br/> It was created to make the core Google internet services
                        business “cleaner and more accountable.” Today, it serves as the parent company to Google and
                        its many subsidiaries. <br/><br/>With a focus on growth in areas of technology and digital services,
                        Alphabet Inc. is a global leader pioneering in various segments like technology, life sciences,
                        investment, and research.</p>
                </div>

            </div>
        </>
    )
}

export default App