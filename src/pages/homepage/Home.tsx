import React from 'react'
import './Home.scss'
import RightNamingPanel from '../../components/rightnamingpanel/RightNamingPanel'
import Message from '../../components/message/Message'
function Home() {
    return (
        <div className="container">
            <div className='home'>
            <div className="left-panel">
                Hello
            </div>
            <div className="right-panel">
                <RightNamingPanel />
                <Message />
            </div>
        </div>
        </div>
    )
}

export default Home
