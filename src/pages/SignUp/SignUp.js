import React from 'react'
import { useNavigate } from 'react-router-dom'

import LogoIcon from '../../assets/images/logo-icon.png'
import Button from '../../shared_component/Button/Button'
import BottomTermPrivacy from '../../component/BottomTermPrivacy/BottomTermPrivacy'
import './SignUp.css'
import Input from '../../shared_component/Input/Input'

function SignUp() {
    const navigate = useNavigate()
    const goto= (url) =>{
        navigate(url)
    }
  return (
    <div className='signup-container'>
    <div className='center-container'>
      <div className='item-container'>
      <img src={LogoIcon} alt='logo'/>
      <p className='signup-subtitle'>Sign up for a new account</p>
      <div className='signup-form-container'>
        <Input type='email' placeholder='Enter email addres'/><br/><br/>
        <Input type='password' placeholder='Enter password'/><br/><br/>
        <Input type='password' placeholder='Re-enter password'/><br/><br/>
        <Button text="Signup" primary={true} padding={'10px 20px'} width={'550px'}/>
      </div>
      <p className='sign-up'>Already have an account ? <span onClick={()=>{goto('/login')}}>Login</span></p>
      </div>
    </div>
    <BottomTermPrivacy/>
  </div>
  )
}

export default SignUp