import React from 'react'
import '../../styles/HomeSections/HeroSection.css'

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <>
            <div className="herosec-wrapper">
                <Swiper
                    className='hero-swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='slider1'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 hero-content">
                                    <p className='lato-font herosec-p'>VILLENOIR WINES</p>
                                    <h1 className='playfair-font herosec-h1'>Tradition in a glass</h1>
                                    <button className='herosec-btn lato-font'><Link to='allshopwines' className='lato-font hero-link'>SHOP NOW</Link></button>
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
                                    <button className='herosec-btn lato-font'><Link to='allshopwines' className='lato-font hero-link'>SHOP THE WINES</Link></button>
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
