import React,{useState} from 'react'
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo-berlayar.png'
import Button_NavBar from './Button_NavBar'
import "./NavBar.css"

function NavBar(props) {
    const[menuOpen, setMenuOpen] = useState(false);
  return (
    <div >
    <nav className='container-global'>
        <Link><img src={Logo}/></Link>
        <div className='menu' onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>

        </div>
        <ul className={menuOpen? "open": ""}>
            <li>
            <Link><Button_NavBar text="About" button={false}></Button_NavBar></Link>
            </li>
            <li>
                <Link><Button_NavBar text="Sevices" button={false}></Button_NavBar></Link>
            </li>
            <li>
                <Link><Button_NavBar text="Get Started" button={true}></Button_NavBar></Link>
            </li>
        </ul>
    </nav>
    <div>
        {props.content}
    </div>
    </div>
  )
}

export default NavBar