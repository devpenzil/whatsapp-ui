import React from 'react'
import './Home.scss'
import RightNamingPanel from '../../components/rightnamingpanel/RightNamingPanel'
function Home() {
    return (
        <div className="container">
            <div className='home'>
            <div className="left-panel">
                Hello
            </div>
            <div className="right-panel">
                <RightNamingPanel />
            </div>
        </div>
        </div>
    )
}

export default Home
