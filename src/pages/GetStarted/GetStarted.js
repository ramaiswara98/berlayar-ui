import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './GetStarted.css'
import LogoWhite from '../../assets/images/logo-white.png'
import Button from '../../shared_component/Button/Button'
import BottomTermPrivacy from '../../component/BottomTermPrivacy/BottomTermPrivacy'
import Modal from '../../shared_component/Modal/Modal'
import AvatarPlaceHolder from '../../assets/icon/avatar_placeholder.png'

function GetStarted() {

  const navigate = useNavigate()
  const [modal1,setModal1] = useState(true);
  const [modal2,setModal2] = useState(false);
  const [modal3,setModal3] = useState(false);

  const openSecondModal = () =>{
    toggle1();
    setModal2(true)
  }

  const openThirdModal = (selected) => {
    // const data = selected
    toggle2();
    setModal3(true)
  }

  const toggle1 = () => {
    setModal1(!modal1)
  }
  const toggle2 = () => {
    setModal2(!modal2)
  }
  // const toggle3 = () => {
  //   setModal3(!modal3)
  // }
  const goto = (url) => {
    navigate(url)
  }

  return (
    <div className='get-started-container'>
      <div className='modal-container'>
      <Modal
        show={modal1}
       
        content={
          <div className='get-started-modal'>
            <img src={AvatarPlaceHolder} alt='avatar-placeholder' className='get-started-modal-avatar'/>
            <p className='get-started-modal-title'><b>Let's get you started</b></p>
            <p className='get-started-modal-button' onClick={()=>{openSecondModal()}}>Continue</p>
            <div className='get-started-modal-three-dot'>
              <span className='three-dot-active'/>
              <span/>
              <span/>
            </div>
          </div>
        }
      />
      <Modal
       show={modal2}
        content={
          <div className='get-started-modal'>
            <p className='get-started-modal-title'><b>What would you like to do ?</b></p>
            <p 
              className='get-started-modal-button' 
              onClick={()=> {openThirdModal("Refactor codebase")}}>Refactor codebase</p>
            <p 
              className='get-started-modal-button'
              onClick={()=> {openThirdModal("Write test")}}
              >Write test</p>
            <p 
              className='get-started-modal-button'
              onClick={()=> {openThirdModal("Chat with knowledgebase")}}>Chat with knowledgebase</p>
            <p 
              className='get-started-modal-button'
              onClick={()=> {openThirdModal("Generate code")}}
              >Generate code</p>
            <p 
              className='get-started-modal-button'
              onClick={()=> {openThirdModal("Generate social media content")}}
              >Generate social media content</p>

            <div className='get-started-modal-three-dot'>
              <span />
              <span className='three-dot-active'/>
              <span/>
            </div>
          </div>
        }
      />
      <Modal
       show={modal3}
        content={
          <div className='get-started-modal'>
            <p className='get-started-modal-title'><b>Let's configure your experience!</b></p>
            <p className='get-started-modal-button'>Continue to settings</p>
            <div className='get-started-modal-three-dot'>
              <span />
              <span />
              <span className='three-dot-active'/>
            </div>
          </div>
        }
      />
      </div>
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