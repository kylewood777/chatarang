import React from 'react'

const ChatHeader = () => {
    return (
        <div className="ChatHeader" style={styles.ChatHeader}>
            <div className='roomInfo' style={styles.roomInfo}>
                <h2>#general</h2>
                <p>Announcements and general chat</p>
            </div>
        </div>
    )
}

const styles = {

    ChatHeader: {
        backgroundColor: "#f3f3f3",
        borderBottom: "1px solid #ccc",
        height: "3rem",
        padding: "0 1rem",
        display: "flex",
        alignItems: "center"
    },

    roomInfo: {
        fontSize: "1.1rem",
        margin: "0"
    },

    roomInfo: {
        color: "#999",
        margin: "0",
        fontSize: "0.8rem"
    }
}

export default ChatHeader