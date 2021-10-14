import React from 'react'
import './style.scss'
function Message() {
    return (
        <div className='message'>
           <div className='message-body'>
            <div className='encrypt'>
            <i className="fas fa-lock"></i>  messages are end-to-end encrypted. No one outside of this chat, not even whatsapp, can read or litsen to them. click to learn more
            </div>

            <div className="message-recieve">
                Hi
            </div>
           </div>
        </div>
    )
}

export default Message
