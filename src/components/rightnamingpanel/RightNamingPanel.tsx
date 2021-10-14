import React from 'react'
import './style.scss'
function LeftNamingPanel() {
    return (
        <div className='righttop'>
            <div className='left'>
                <div>
                    <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className='text'>
                    <div className='name'>Ann Mathey</div>
                    <div className='status'>last seen today at 8:52 pm</div>
                </div>
            </div>
            <div className='right'>
            <i className="fas fa-search"></i>
            <i className="fas fa-ellipsis-v"></i>
            </div>
        </div>
    )
}

export default LeftNamingPanel
