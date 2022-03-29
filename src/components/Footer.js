import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p className='footer__name'>© {new Date().getFullYear()} Airbnb clone! All rights reserved</p>
            <a target="_blank" href='https://exclusiveideas-c9470.web.app/' className='footer__company'>Exclusive Ideas</a>
            <p className='footer__privacy'>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer