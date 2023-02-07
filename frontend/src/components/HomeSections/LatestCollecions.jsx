import React from 'react'
import '../../styles/HomeSections/LatestCollecions.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const LatestCollecions = () => {

    return (
        <>
            <div className="latest-collections__wrapper">
                <div style={{ margin: "0 auto 50px auto", textAlign: "center" }}>
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>LATEST COLLECTION</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>New Products</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={150}
                            slidesPerView={3}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div className="card-wrapper">
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        </div>
                                        <button className='lato-font card-button'>QUICK VIEW</button>
                                    </div>
                                    <div className="card-content">
                                        <p className='lato-font' style={{color:"RGB(176, 151, 109)"}}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{marginBottom:"20px",fontSize:"20px"}} >Villenoir Chardonnay</Link>
                                        <div style={{color:"RGB(176, 151, 109)",margin:"30px 0",fontSize:"21px"}} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-wrapper">
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        </div>
                                        <button className='lato-font card-button'>QUICK VIEW</button>
                                    </div>
                                    <div className="card-content">
                                        <p className='lato-font' style={{color:"RGB(176, 151, 109)"}}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{marginBottom:"20px",fontSize:"20px"}} >Villenoir Chardonnay</Link>
                                        <div style={{color:"RGB(176, 151, 109)",margin:"30px 0",fontSize:"21px"}} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-wrapper">
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        </div>
                                        <button className='lato-font card-button'>QUICK VIEW</button>
                                    </div>
                                    <div className="card-content">
                                        <p className='lato-font' style={{color:"RGB(176, 151, 109)"}}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{marginBottom:"20px",fontSize:"20px"}} >Villenoir Chardonnay</Link>
                                        <div style={{color:"RGB(176, 151, 109)",margin:"30px 0",fontSize:"21px"}} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card-wrapper">
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/500x659/products/116/386/White-Chardonnay-w-cup__40812.1488466018.png?c=2" alt="" />
                                        </div>
                                        <button className='lato-font card-button'>QUICK VIEW</button>
                                    </div>
                                    <div className="card-content">
                                        <p className='lato-font' style={{color:"RGB(176, 151, 109)"}}>SUTTER HOME</p>
                                        <Link className='playfair-font card-link' style={{marginBottom:"20px",fontSize:"20px"}} >Villenoir Chardonnay</Link>
                                        <div style={{color:"RGB(176, 151, 109)",margin:"30px 0",fontSize:"21px"}} className='notoserif-font'>$100.00</div>
                                        <button className='lato-font add-button'>ADD TO CART</button>
                                    </div>
                                </div>  
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestCollecions