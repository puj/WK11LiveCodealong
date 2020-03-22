import React, { useState } from 'react'
import { useEffect } from "react"

export const MessageList = () => {
    // It's good to put your URLs in constants
    const MESSAGES_URL = "https://wk11livesession.herokuapp.com/messages";
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Ask the server for the messages using a GET requests
        fetch(MESSAGES_URL)
            .then((res) => {
                // Get the JSON of the response body
                return res.json()
            })
            .then(data => {
                // Set the state based on the response
                setMessages(data);
            });
    }, []);


    return (
        <div>
            {
                // Add a section for each message returned by the backend
                messages.map(message => (
                    <p key={message.created}>{message.text} </p>
                ))
            }
        </div>
    )
}
