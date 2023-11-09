import React from 'react'
import "./ButtonNavbar.css"

function ButtonNavBar(props) {
  return (
    <div
        className={props.button ? 'button_navbar':'navbar-item'}
    >{props.text}</div>
  )
}

export default ButtonNavBar