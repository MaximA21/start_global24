"use client"

import React, { useState } from 'react';
import {Button} from "@/components/ui/button";

//import '@/Chatbot.css';


const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    // @ts-ignore
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // @ts-ignore
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userInput.trim()) {
            const savedUserInput = userInput
            setUserInput('');
            const apiResponse = await fetch('https://api.cb.dedyn.io/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `YOUR API KEY`,
                    //'Access-Control-Allow-Origin': 'http://localhost:3001', // Add this line
                    //'Access-Control-Allow-Methods': 'POST',
                    //'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{role: "user", content: savedUserInput}],
                    max_tokens: 2048,
                    temperature: 0.5,
                }),
            }).then((res) => res.json());

            console.log(apiResponse)
            const aiResponse = apiResponse.choices[0].message.content;
            setMessages([...messages, { text: savedUserInput, sender: 'User' }, { text: aiResponse, sender: 'Assistant' }]);
        }
    };

    return (
        <div className="ml-96 mt-96 chatbot-container flex flex-col align-middle justify-center">
            <h1>AI Chatbot</h1>
            <div className="messages">
                <ul>
                    {messages.map((message, index) => (
                        <div>
                            <li key={index}>
                                <ol>
                                    <li key={1}>
                                        <div className="message-container">
                                            <p className={message.sender}>
                                                {message.sender}:
                                            </p>
                                        </div>
                                    </li>
                                    <li key={2}>
                                        <div>
                                            {message.text}
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleInputChange} />
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
};

export default Chatbot;
