import React, {useState} from 'react'
import Imoji from '../Imoji/Imoji'
import './style.scss'
function Compose() {
    const [mess, setMess] = useState()
    const [imojistatus, setImojistatus] = useState(false)
    return (
       <>
       <div className='imoji-set'>
          {imojistatus ?  <Imoji /> : ""}
       </div>
        <div>
            <div className='compose'>
            <div className='icon' onClick={()=>setImojistatus(!imojistatus)}>
            <i className="far fa-grin"></i>
            </div>
            <div className='icon'>
            <i className="fas fa-paperclip"></i>
            </div>
            <div className='textbox'>
                <input type="text" onChange={(e:any)=>setMess(e.target.value)}  name="" id="" placeholder='Type a message'/>
            </div>
            <div className='icon'>
                {mess ? <i className="fas fa-fighter-jet"></i> : <i className="fas fa-microphone"></i>}
            </div>
        </div>
        </div></>
    )
}

export default Compose
