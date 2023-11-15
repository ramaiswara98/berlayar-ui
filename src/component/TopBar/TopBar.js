import React,{useState} from 'react'
import { Popover, PopoverBody} from 'reactstrap';

import './TopBar.css'
import Input from '../../shared_component/Input/Input'
import IcDollar from '../../assets/icon/ic_dollar.png'
import IcNotification from '../../assets/icon/ic_notification.png'
import AvatarPlaceHolder from '../../assets/icon/avatar_placeholder.png'
import IcSettings from '../../assets/icon/ic_settings.png'
import IcAdmin from '../../assets/icon/ic_admin.png'
import IcLogout from '../../assets/icon/ic_logout.png'
import BerlayarModal from '../../shared_component/Modal/Modal'
import SettingsModal from './SettingsModal/SettingsModal';

function TopBar() {

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [modalSettings, setModalSettings] = useState(false)

  const toggleModalSettings = () => {
    setModalSettings(!modalSettings)
  }
  return (
    <div className='top-bar'>
        <div className='top-bar-container'>
          <BerlayarModal 
            show={modalSettings}
            toggle={()=>{toggleModalSettings()}}
            title={"Settings"}
            content={<SettingsModal></SettingsModal>}
            />

            <div>
            <Input placeholder={'Search'}/>
            </div>
            <div className='top-bar-right'>
                <img src={IcNotification} alt='icon notification' className='top-bar-right-item'/>
                <img src={IcDollar} alt='icon dollars' className='top-bar-right-item'/>
                <div className='profile top-bar-right-item' id="Popover1" type="button" onClick={toggle} >
                    <img src={AvatarPlaceHolder} alt='avatar-placeholder' />
                    <p>Jhon Doe</p>
                    <Popover flip placement='bottom' target="Popover1" isOpen={open}>
                      <PopoverBody>
                        <div className='menu-popover-container'>
                          <div className='menu-popover-item' onClick={()=>{toggleModalSettings()}}>
                            <img src={IcSettings} alt='icon-settings'/>
                            <p>Settings</p>
                          </div>
                          <div className='menu-popover-item'>
                            <img src={IcAdmin} alt='icon-settings'/>
                            <p>Change to Admin</p>
                          </div>
                          <hr/>
                          <div className='menu-popover-item'>
                            <img src={IcLogout} alt='icon-settings' />
                            <p>Logout</p>
                          </div>
                        </div>
                      </PopoverBody>
                    </Popover>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TopBar