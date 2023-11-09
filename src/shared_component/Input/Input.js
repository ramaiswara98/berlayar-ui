import React from 'react'

import './Input.css'

function Input(props) {

  const setWidth = ()=>{
    const screenWidth = window.screen.width;
    const widthValue = props.width;
    const mobileWidth = props.mobileWidth;
    if(screenWidth < 450){
      if(mobileWidth){
        return mobileWidth
      }else{
        return '350px'
      }
      
    }else{
      if(widthValue){
        return widthValue
      }else{
        return '550px'
      }
    }
  }

  return (
    <input
        className='input'
        type={props.type} 
        placeholder={props.placeholder} 
        style={{
            borderRadius:'10px',
            border:'2px solid #8D8D8D',
            padding:props.padding?props.padding:'10px 10px',
            width:setWidth(),
            fontFamily:"'Outfit', sans-serif",
            fontSize:'20px'
        }}>
    </input>
  )
}

export default Input