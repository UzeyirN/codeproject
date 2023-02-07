import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-banners">
                    <div className="footer-banner__left">
                        <div class="card-bg"></div>
                        <div class="card-text">Hover Over Me</div>
                    </div>
                    <div className="footer-banner__right">
                        <div class="card2-bg"></div>
                        <div class="card2-text">Hover Over Me</div>
                    </div>
                </div>
                <div className="footer-content"></div>
            </div>
        </>
    )
}

export default Footer