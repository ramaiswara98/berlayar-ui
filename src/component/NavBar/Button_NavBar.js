import React from 'react'
import "./Button_Navbar.css"

function Button_NavBar(props) {
  return (
    <div
        className={props.button ? 'button_navbar':'navbar-item'}
    >{props.text}</div>
  )
}

export default Button_NavBar