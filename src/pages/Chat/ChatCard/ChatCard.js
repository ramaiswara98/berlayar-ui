import React from 'react'

import './ChatCard.css'
import BerlayarPic from '../../../assets/images/berlayar-pic.png'

function ChatCard(props) {
  return (
    <div className='chat-card' style={{backgroundColor:props.ai?'':'#D6D6D8'}}>
        <img src={BerlayarPic} alt='icon-berlayar' className='profile-pic'/>
        <div className='chat-card-content'>
            {props.content==='welcome'?(
                <div>
                    <p>Welcome to Berlayar.ai!</p><br/>
            <br/>
            <p>Berlayar.ai gives you a complete team of marketing and software development agent, all you gotta do is prompt.</p><br/>
            <p>Please select your needs in the options below</p>
            <div className='chat-chooser'>
                <p>Make social media campaign</p> 
                <p>Retrieval Information</p> 
                <p>Automated feature development</p> 
                <p>Upload Database</p>
                <p>Others</p>
                <p>Help</p>
            </div>
                </div>
            ):(
                <div>{props.content}</div>
            )}
            
            
        </div>
    </div>
  )
}

export default ChatCard