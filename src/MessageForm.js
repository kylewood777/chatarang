import React from 'react'

const MessageForm = (props) => {
    return (
        <form className="MessageForm">
            <input type='text' name='body' plaeholder='Type a message'/>
            <button type='button'>Send</button>
        </form>
    )
}

export default MessageForm