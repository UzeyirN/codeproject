import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                {/* <div className="footer-banners">
                    <div className="row g-0">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-s-12  hov">
                            <div className='footer-img__wrapper footer-left__pic'>
                                <div>
                                    <div class="card-text">
                                        <p style={{ opacity: "1", zIndex: "666" }} className='lato-font'><Link style={{ color: "#b0976d", textDecoration: "none" }}>9TH MAR 2017</Link></p>
                                        <h4 style={{ color: "white" }} className='playfair-font'>Wine Fermentation Process</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-s-12 hov">
                            <div className='footer-img__wrapper footer-right__pic'>
                                <div class="card-text">
                                    <p style={{ color: "white" }} className='lato-font'><Link style={{ color: "#b0976d", textDecoration: "none" }}>9TH MAR 2017</Link></p>
                                    <h4 style={{ color: "white" }} className='playfair-font'>When is a vineyard ready for harvest?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

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
                                        <Link className='footer-link lato-font'>GIFT SERTIFICATES</Link>
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
                    {/* <div className='footer-content__head'>
                        <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>VILLENOIR PROMISE</p>
                        <h2 className='playfair-font' style={{ fontSize: "41px" }}>We make good wines</h2>
                    </div>
                    <div className="container footer-link__wrapper">
                        <div className="row">
                                <div className="col-lg-6 col-md-6 col-6 footer-content__left">
                                    <Link className='footer-link lato-font'>ALL BRANDS</Link>
                                    <Link className='footer-link lato-font'>SITEMAP</Link>
                                    <Link className='footer-link lato-font'>GIFT SERTIFICATES</Link>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 footer-content__right">
                                    <span style={{ fontSize: "12px", fontWeight: "700" }}>POWERED BY <Link style={{ color: "RGB(176, 151, 109)", textDecoration: "none" }}>BIGCOMMERCE</Link></span>
                                </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 footer-bottom">
                                <i class="fa-brands fa-cc-amex"></i>
                                <i class="fa-brands fa-cc-discover"></i>
                                <i class="fa-brands fa-cc-mastercard"></i>
                                <i class="fa-brands fa-cc-paypal"></i>
                                <i class="fa-brands fa-cc-visa"></i>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Footer