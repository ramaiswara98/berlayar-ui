import React from 'react'
import { useNavigate } from 'react-router-dom'

import './SideBar.css'
import LogoBlack from '../../../assets/images/logo-black.png'
import Button from '../../../shared_component/Button/Button'
import IconDot from '../../../assets/icon/icon-dot.png'
import PlaceHolder from '../../../assets/images/img_placeholder.png'

function Sidebar(props) {

    const navigate = useNavigate();

  const goto = (path) => {
    navigate(path)
  }
  return (
    <div className='sidebar'>
      <div className='menu'>
        <img className='menu-logo' src={LogoBlack} alt='logo-black'/>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Button text={"New Chat"} primary={true} width={"80%"}/>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        <div className={"menu-item "} onClick={() => goto('/chat')}>
          <p className='menu-item-text'>Marketing System #1</p>
        </div>
        
      </div>
      <div className='bottom-menu'>
            <div className='account-menu'>
                <img src={PlaceHolder} className='profile-pic' alt='profile-pic'/>
                <p>Jhone Done</p>
                <img src={IconDot} alt='icon-dot'/>
            </div>
      </div>
    </div>
  )
}

export default Sidebar