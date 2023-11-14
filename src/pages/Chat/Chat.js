import React from 'react'

import './Chat.css'
import Sidebar from './SideBar/Sidebar'
import TopBar from './TopBar/TopBar'
import IconReload from '../../assets/icon/ic_reload_white.png'
import IconPlus from '../../assets/icon/ic_plus_black.png'
import IconQuestion from '../../assets/icon/ic_question_white.png'
import ChatCard from './ChatCard/ChatCard'

function Chat() {
  return (
    <div className='chat-page'>
      <Sidebar />
      <div className='right-side'>
        <div className='top-side'>
          <TopBar />
        </div>
        <div className='chat-content'>
          <div className='chat-container'>
            <ChatCard 
              content={
                  'welcome'
              }
              ai={true}
            />
            <ChatCard 
              content={
                  <p>You selected Upload Database, please upload your file.</p>
              }
              ai={true}
            />
          </div>
          <div className='chat-bottom'>
            <div className='icon-holder'>
              <img src={IconReload} alt='icon-reload' />
            </div>
            <div className='chat-input'>
              <div className='chat-input-container'>
                <textarea />
                <div className='icon-holder-white'>
                  <img src={IconPlus} alt='icon-plus' />
                </div>
              </div>
            </div>
            <div className='icon-holder'>
              <img src={IconQuestion} alt='icon-question' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat