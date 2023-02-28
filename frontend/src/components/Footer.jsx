import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="container" >
                        <div className="row" >
                            <div className='footer-main'>
                                <div className="col-12 footer-head footer-cols">
                                    <div className='footer-content__head'>
                                        <p className='lato-font footer-p'>VILLENOIR PROMISE</p>
                                        <h2 className='playfair-font footer-h2'>We make good wines</h2>
                                    </div>
                                </div>
                                <div className="col-12 footer-link__wrapper footer-cols">
                                    <div className="col-lg-6 col-md-6 col-6 footer-content__left">
                                        <Link to='allshopwines' className='footer-link lato-font'>ALL BRANDS</Link>
                                        <Link to='sitemap' className='footer-link lato-font'>SITEMAP</Link>
                                        <Link to='customerlogin' className='footer-link lato-font'>LOGIN</Link>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 footer-content__right">
                                        <span style={{ fontSize: "12px", fontWeight: "700" }}>POWERED BY <Link to='https://www.bigcommerce.com/' style={{ color: "RGB(176, 151, 109)", textDecoration: "none" }}>BIGCOMMERCE</Link></span>
                                    </div>
                                </div>
                                <div className="col-12 footer-bottom footer-cols">
                                    <i className="fa-brands fa-cc-amex"></i>
                                    <i className="fa-brands fa-cc-discover"></i>
                                    <i className="fa-brands fa-cc-mastercard"></i>
                                    <i className="fa-brands fa-cc-paypal"></i>
                                    <i className="fa-brands fa-cc-visa"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer