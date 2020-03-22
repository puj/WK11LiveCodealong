import React, { useState } from 'react'

export const MessageInput = () => {
    const MESSAGES_URL = "https://wk11livesession.herokuapp.com/messages";
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        // Prevent page from refreshing automatically
        event.preventDefault()

        // Post the current value of the text input to the server
        fetch(MESSAGES_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Send the JSON as a string -- object does not work here
                body: JSON.stringify({ text: message })
            }
        ).then(()=>{
            // Reload the page after the request is complete
            window.location.reload();
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={event => setMessage(event.target.value)}></input>
            <input type="submit"></input>
        </form>
    )
}