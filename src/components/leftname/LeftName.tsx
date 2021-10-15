import React from 'react'
import './style.scss'
function LeftName() {
    return (
        <div className='leftname'>
            <div className='logo'>
                <img src="https://images.pexels.com/photos/3370381/pexels-photo-3370381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className='icon'>
            <i className="fas fa-circle-notch"></i>
            <i className="fas fa-comment-alt"></i>
            <i className="fas fa-ellipsis-v"></i>
            </div>
        </div>
    )
}

export default LeftName
