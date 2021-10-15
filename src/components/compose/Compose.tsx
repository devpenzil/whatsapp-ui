import React from 'react'
import './style.scss'
function Compose() {
    return (
        <div>
            <div className='compose'>
            <div className='icon'>
            <i className="far fa-grin"></i>
            </div>
            <div className='icon'>
            <i className="fas fa-paperclip"></i>
            </div>
            <div className='textbox'>
                <input type="text"  name="" id="" placeholder='Type a message'/>
            </div>
            <div className='icon'>
            <i className="fas fa-microphone"></i>
            </div>
        </div>
        </div>
    )
}

export default Compose
