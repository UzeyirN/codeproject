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
                    <SwiperSlide className='slider1'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 hero-content">
                                    <p className='lato-font herosec-p'>VILLENOIR WINES</p>
                                    <h1 className='playfair-font herosec-h1'>Tradition in a glass</h1>
                                    <button className='herosec-btn lato-font'>SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' slider2'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 hero-content">
                                    <p className='lato-font herosec-p'>VILLENOIR WINES</p>
                                    <p className='playfair-font herosec-h1'>Tradition in a glass</p>
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
