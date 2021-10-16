import React from 'react'
import './Home.scss'
import RightNamingPanel from '../../components/rightnamingpanel/RightNamingPanel'
import Message from '../../components/message/Message'
import Compose from '../../components/compose/Compose'
import LeftName from '../../components/leftname/LeftName'
import Search from '../../components/search/Search'
import ChatList from '../../components/chatlist/ChatList'
function Home() {
    return (
        <div className="container">
            <div className='home'>
            <div className="left-panel">
                <LeftName />
                <Search />
                <ChatList />
            </div>
            <div className="right-panel">
                <RightNamingPanel />
                <Message />
                <Compose />
            </div>
        </div>
        </div>
    )
}

export default Home
