import React from 'react'

import './Footer.css'
import LogoWhite from '../../assets/images/logo-white.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='container-global'>
            <div className='container-footer'>
                <div className='left-side'>
                    <img src={LogoWhite}/>
                    <p className='footer-text'>Create and publish hyperlocal social media campaigns in seconds, not months.</p>
                    <div className='socmed-container'>
                        <img src={Facebook}/>
                        <img src={Instagram}/>
                    </div>
                    <p className='footer-text'>Copyright &copy; Berlayar A.I.Pte.Ltd.</p>
                </div>
                <div className='right-side'>
                    <p className='footer-title'>Get in touch with us!</p>
                    <div className='footer-input'>
                        <input type='email' className='footer-input-email' placeholder='Enter Your Email Address'/>
                    </div>
                    <div className='footer-button'>SignUp</div>
                    <div className='term-container'>
                        <p>Term & Conditions </p> <p> | </p> <p> Privacy Policiy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer