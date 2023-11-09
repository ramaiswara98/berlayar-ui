import React from 'react'

import './Button.css'
function Button(props) {
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
    <div 
      onClick={props.onClick}
      className='button' 
      style={{padding:props.padding?props.padding:'10px 20px', backgroundColor:props.primary?'#F4444C':'#D6D6D8', color:props.primary?'#F6F6F6':'#0A0A0C', width:setWidth(), borderRadius:'10px'}}>
        <p style={{textAlign:'center', margin:'auto', fontFamily:"'Outfit', sans-serif", fontSize:props.fontSize?props.fontSize:'20px'}}>{props.text}</p>
    </div>
  )
}

export default Button