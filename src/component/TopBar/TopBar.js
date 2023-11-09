import React from 'react'

import './TopBar.css'
import Input from '../../shared_component/Input/Input'
import IcDollar from '../../assets/icon/ic_dollar.png'
import IcNotification from '../../assets/icon/ic_notification.png'
import AvatarPlaceHolder from '../../assets/icon/avatar_placeholder.png'

function TopBar() {
  return (
    <div className='top-bar'>
        <div className='top-bar-container'>
            <div>
            <Input placeholder={'Search'}/>
            </div>
            <div className='top-bar-right'>
                <img src={IcNotification} alt='icon notification' className='top-bar-right-item'/>
                <img src={IcDollar} alt='icon dollars' className='top-bar-right-item'/>
                <div className='profile top-bar-right-item'>
                    <img src={AvatarPlaceHolder} alt='avatar-placeholder'/>
                    <p>Jhon Doe</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar