import React from 'react'
import { useNavigate } from 'react-router-dom'

import LogoIcon from '../../assets/images/logo-icon.png'
import Button from '../../shared_component/Button/Button'
import BottomTermPrivacy from '../../component/BottomTermPrivacy/BottomTermPrivacy'
import './Login.css'
import Input from '../../shared_component/Input/Input'

function Login() {
    const navigate = useNavigate()

    const goto = (url) => {
    navigate(url)
  }
  return (
    <div className='login-container'>
    <div className='center-container'>
      <div className='item-container'>
      <img src={LogoIcon} alt='logo'/>
      <p className='login-subtitle'>Login to your account</p>
      <div className='login-form-container'>
        <Input type='email' placeholder='Enter email addres'/><br/><br/>
        <Input type='password' placeholder='Enter password'/><br/><br/>
        <Button text="Login" primary={true} padding={'10px 20px'} width={'550px'}/>
      </div>
      <p className='sign-up'>Do not have an account ? <span onClick={()=>{goto('/sign-up')}}>Sign up</span></p>
      </div>
    </div>
    <BottomTermPrivacy/>
  </div>
  )
}

export default Login