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
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ "--swiper-navigation-color": "b0976d", "--swiper-pagination-color": "#b0976d" }}

                >
                    <SwiperSlide className='slider1 slider'>
                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/original/carousel/15/slide-2-background__86858.jpg?c=2" alt="" />
                        <div className=" hero-text">
                            <div className="row">
                                <div className=" hero-content">
                                    <p className='lato-font herosec-p'>VILLENOIR WINES</p>
                                    <h1 className='playfair-font herosec-h1'>Tradition in a glass</h1>
                                    <button className='herosec-btn lato-font'><Link to='allshopwines' className='lato-font hero-link'>SHOP NOW</Link></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slider1'>
                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/original/carousel/9/slide-1-background.jpg?c=2" alt="" />
                        <div className=" hero-text">
                            <div className="row">
                                <div className=" hero-content">
                                    <p className='lato-font herosec-p'>VILLENOIR WINES</p>
                                    <h1 className='playfair-font herosec-h1'>Refinement in a bottle</h1>
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
