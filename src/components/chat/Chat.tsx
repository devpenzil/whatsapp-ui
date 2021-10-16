import React from 'react'
import './style.scss'
function Chat(props:any) {
   
    return (    
        <div className='chat'>
            <div className='left'>
                <img src={props.image} alt="" />
            </div>
            <div>
                <div className='name-top'>
                    <div className='name'>{props.name}</div>
                    <div className='time'>{props.time}</div>
                </div>
                <div className='name-bottom'>
                    <div className='message-text'>
                        {props.readvalue ?
                        <i className="fas fa-check-double check"></i>
                        : ""}
                        {props.message}</div>
                    <div>
                    {props.unread_count ?
                    <span className='unread'>{props.unread_count}</span>
                    : ""}
                    <i className="fas fa-angle-down arrowdown"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
