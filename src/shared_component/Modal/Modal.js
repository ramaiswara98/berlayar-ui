import React from 'react'
import {Modal} from 'reactstrap'

import './Modal.css'
import IconClose from '../../assets/icon/ic_close.png'

function BerlayarModal(props) {
  return (
    <Modal isOpen={props.show} toggle={props.toggle}>
        <div className='modal-header-container' style={{display:props.title?'':'none'}}>
            <p className='modal-title-text'><b>{props.title}</b></p>
            <img src={IconClose} alt='icon-close' onClick={props.toggle} style={{cursor:"pointer"}}/>
        </div>
        <div className='modal-body-container'>
            {props.content}
        </div>
        
    </Modal>
  )
}

export default BerlayarModal