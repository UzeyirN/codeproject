import React from 'react'
import '../../styles/HomeSections/HeroSection.css'

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";


const HeroSection = () => {
    return (
        <>
            <div className="herosec-wrapper">
                <Swiper
                    className='hero-swiper'
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide id='herosec-first__slide'>
                        <img style={{ width: "100vw", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/original/carousel/15/slide-2-background__86858.jpg?c=2" alt="" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 herosec-content">
                                    <p style={{ fontWeight: "700", color: "RGB(176, 151, 109)" }} className='lato-font'>VILLENOIR WINES</p>
                                    <h1 className='playfair-font' style={{ fontSize: "60px", color: "white" }}>Tradition in a glass</h1>
                                    <button className='herosec-btn lato-font'>SHOP NOW</button>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ width: "100vw", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/original/carousel/9/slide-1-background.jpg?c=2" alt="" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 herosec-content">
                                    <p style={{ fontWeight: "700", color: "RGB(176, 151, 109)" }} className='lato-font'>VILLENOIR WINES</p>
                                    <h1 className='playfair-font' style={{ fontSize: "60px", color: "white" }}>Refinement in a bottle </h1>
                                    <button className='herosec-btn lato-font'>SHOP THE WINES</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default HeroSection
