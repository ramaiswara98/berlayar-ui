import React from 'react'

import './AdminPage.css'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'

function AdminPage(props) {
  return (
    <div className='admin-page'>
        <SideBar page={props.page}/>
        <div className='left-side'>
            <TopBar/>
            <div className='content'>
                {props.content}
            </div>
        </div>
        
    </div>
  )
}

export default AdminPage