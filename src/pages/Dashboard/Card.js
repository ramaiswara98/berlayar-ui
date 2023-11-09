import React from 'react'

import './Card.css'
import IcArrowRight from '../../assets/icon/ic_arrow_right.png'

function Card(props) {
  return (
    <div className='card'>
        <div className='top-card'>
            <p className='top-card-title'>{props.title}</p>
            <div className={props.viewall ? 'top-card-right ':'top-card-right card-invisible'}>
                <p>View All </p>
                <img src={IcArrowRight} alt='arrow right'/>
            </div>
        </div>
        <div className='card-content'>
            <p>Makan</p>
        </div>
        <div>
        <div className='header'>
            
        </div>
        </div>
    </div>
  )
}

export default Card