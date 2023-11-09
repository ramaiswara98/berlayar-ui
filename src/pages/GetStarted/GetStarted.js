import React from 'react'
import { useNavigate } from 'react-router-dom'

import './GetStarted.css'
import LogoWhite from '../../assets/images/logo-white.png'
import Button from '../../shared_component/Button/Button'
import BottomTermPrivacy from '../../component/BottomTermPrivacy/BottomTermPrivacy'

function GetStarted() {

  const navigate = useNavigate()

  const goto = (url) => {
    navigate(url)
  }

  return (
    <div className='get-started-container'>
      <div className='center-container'>
        <div className='item-container'>
        <img src={LogoWhite} alt='logo'/>
        <p className='get-started-subtitle'>Get Started</p>
        <div className='get-started-button-container'>
          <Button 
            text="Login" 
            primary={true} 
            padding={'10px 20px'} 
            width={'120px'}
            onClick={()=>{goto('/login')}}
            />
            <br/>
          <Button 
            text="Sign Up" 
            primary={true} 
            padding={'10px 20px'} 
            width={'120px'}
            onClick={()=>{goto('/sign-up')}}
            />
        </div>
        </div>
      </div>
      <BottomTermPrivacy/>
    </div>
  )
}

export default GetStarted