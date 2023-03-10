import React, { useState, useEffect, useLayoutEffect } from 'react'
import '../../styles/HomeSections/FeaturedProducts.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FeaturedProducts = () => {

    const [featured, setFeatured] = useState(null)
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const URL = 'http://localhost:3070/featured';

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getData = async () => {
        await axios.get(URL).then((resp) => setFeatured(resp.data));
        setLoading(false);
    }

    useLayoutEffect(() => {
        function updateIsMobile() {
            setIsMobile(window.innerWidth <= 992);
        }

        window.addEventListener('resize', updateIsMobile);
        updateIsMobile();

        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);

    const addToWishList = async (id) => {
        if (isLoggedIn) {
            await fetch('http://localhost:3070/wishlist', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            toast.success('Added to cart!', {
                autoClose: 1000,
            });
        } else {
            toast.error('Please log in to add to cart!', {
                autoClose: 1000,
            });
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    };

    useEffect(() => {
        getData();

        const token = getCookie('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);



    return (
        <>
            <ToastContainer />
            <div className="featured-products__wrapper">
                <div style={{ margin: "0 auto 50px auto", textAlign: "center" }}>
                    <p className='lato-font' style={{ fontSize: "14px", fontWeight: "700", color: "RGB(176, 151, 109)" }}>CAREFULLY SELECTED PRODUCTS</p>
                    <h2 className='playfair-font' style={{ fontSize: "41px" }}>Featured Products</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-between">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            className='swiper-f'
                            slidesPerView={3}
                            pagination={isMobile}
                            navigation={!isMobile}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}

                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            style={{ "--swiper-navigation-color": "b0976d", "--swiper-pagination-color": "#b0976d" }}
                        >{
                                loading ? <Loading /> :
                                    featured?.map(({ _id, image, brand, appelation, price, kind, alcohol }) => (
                                        <SwiperSlide key={_id}>
                                            <div className="card-wrapper" >
                                                <div className="card-f">
                                                    <div className="card-body">
                                                        <img style={{ height: "100%" }} src={image} alt="wines" />
                                                    </div>
                                                </div>
                                                <div className="card-content__f">
                                                    <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>{brand}</p>
                                                    <Link to='allshopwines' className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >{appelation}</Link>
                                                    <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${price}.00</div>
                                                    {isLoggedIn ? (
                                                        <button onClick={() => addToWishList(_id)} className='lato-font add-button'>
                                                            ADD TO CART
                                                        </button>
                                                    ) : (
                                                        <div>
                                                            <button style={{ borderRadius: "0" }} type="button" className="btn lato-font add-button" id='disable-button' disabled>ADD TO CART</button>
                                                            <p id='hover-text' style={{ display: "none" }}>Hello!</p>
                                                        </div>

                                                    )}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                            }
                        </Swiper>
                        {!isLoggedIn ? (
                            <div style={{ textAlign: "center" }}><p className='lato-font' style={{ margin: "0 auto", color: "gray" }}>You can do shopping after login </p></div>
                        ) : (
                            <div style={{ textAlign: "center", display: "none" }}><p style={{ margin: "0 auto" }}>Salam</p></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts




