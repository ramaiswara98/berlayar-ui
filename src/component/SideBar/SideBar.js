import React from 'react'

import './SideBar.css'
import LogoBlack from '../../assets/images/logo-black.png'
import IcDashboard from '../../assets/icon/ic_dashboard.png'
import IcChat from '../../assets/icon/ic_chat.png'
import IcSearch from '../../assets/icon/ic_search.png'
import IcGenerate from '../../assets/icon/ic_generate.png'
import IcStorage from '../../assets/icon/ic_database.png'
import IcHome from '../../assets/icon/ic_home.png'

function SideBar(props) {
  const active = "active"
  const selectedPage = (currentPage, menuPage)=> {
    if(currentPage === menuPage){
      return 'active'
    }else{
      return ''
    }
  }
  console.log(props.page)
  return (
    <div className='sidebar'>
      <div className='menu'>
        <img className='menu-logo' src={LogoBlack} alt='logo-black'/>
        <div className={"menu-item "}>
          <img src={IcChat} alt='Icon Chat' className='menu-item-icon'/>
          <p className='menu-item-text'>Chat</p>
        </div>
        <div className={"menu-item "+selectedPage(props.page,'generate')}>
          <img src={IcGenerate} alt='Icon Generate' className='menu-item-icon'/>
          <p className='menu-item-text'>Generate</p>
        </div>
        <div className={"menu-item "+selectedPage(props.page,'search')}>
          <img src={IcSearch} alt='Icon Search' className='menu-item-icon'/>
          <p className='menu-item-text'>Search</p>
        </div>
        <div className={"menu-item "+selectedPage(props.page,'dashboard')}>
          <img src={IcDashboard} alt='Icon Dashboard' className='menu-item-icon'/>
          <p className='menu-item-text'>Dashboard</p>
        </div>
        <div className={"menu-item "+selectedPage(props.page,'storage')}>
          <img src={IcStorage} alt='Icon Storage' className='menu-item-icon'/>
          <p className='menu-item-text'>Storage</p>
        </div>
        <div className={"menu-item "+selectedPage(props.page,'homepage')}>
          <img src={IcHome} alt='Icon Home' className='menu-item-icon'/>
          <p className='menu-item-text'>Homepage</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar