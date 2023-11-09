import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo-berlayar.png'
import ButtonNavBar from './ButtonNavBar'
import "./NavBar.css"

function NavBar(props) {
    const[menuOpen, setMenuOpen] = useState(false);
  return (
    <div >
    <nav className='container-global-navbar'>
        <Link><img src={Logo} alt='Logo'/></Link>
        <div className='menu' onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>

        </div>
        <ul className={menuOpen? "open": ""}>
            <li>
            <Link><ButtonNavBar text="About" button={false}></ButtonNavBar></Link>
            </li>
            <li>
                <Link><ButtonNavBar text="Sevices" button={false}></ButtonNavBar></Link>
            </li>
            <li>
                <Link to={'/get-started'}><ButtonNavBar text="Get Started" button={true}></ButtonNavBar></Link>
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