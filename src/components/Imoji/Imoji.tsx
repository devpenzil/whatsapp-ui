import React, {useEffect, useState} from 'react'
import emoji from '../../database/emoji.json'
import './style.scss'
function Imoji() {
  
    return (
        <div className='imojis'>
            {emoji.map((obj)=>{
                return(
                    <div className='imoji'>
                        {obj.character}
                    </div>
                )
            })}
        </div>
    )
}

export default Imoji
