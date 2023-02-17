import React, { useState, useEffect } from 'react'
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
const FeaturedProducts = () => {


    const [featured, setFeatured] = useState(null)
    const [loading, setLoading] = useState(true);
    // const [data, setData] = useState({
    //     image: "",
    //     brand: "",
    //     appelation: "",
    //     price: "",
    // })
    const URL = 'http://localhost:3070/featured';


    const getData = async () => {
        await axios.get(URL).then((resp) => setFeatured(resp.data));
        setLoading(false);

    }

    const addToWishList = async (id) => {
        await fetch("http://localhost:3070/wishlist", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
    };




    // const addToWishList = (id) => {
    //     fetch('http://localhost:3070/wishlist', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
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
                            slidesPerView={3}
                            navigation={true}
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
                        >{
                                loading ? <Loading /> :
                                    featured?.map(({ _id, image, brand, appelation, price }) => (
                                        <SwiperSlide>
                                            <div className="card-wrapper" key={_id}>
                                                <div className="card-f">
                                                    <div className="card-body">
                                                        <img style={{ height: "100%" }} src={image} alt="" />
                                                        <button onClick={() => addToWishList(_id)} className='feature-fav__btn'>
                                                            <i class="fa-solid fa-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-content__f">
                                                    <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>{brand}</p>
                                                    <Link className='playfair-font card-link' style={{ marginBottom: "20px", fontSize: "20px" }} >{appelation}</Link>
                                                    <div style={{ color: "RGB(176, 151, 109)", margin: "30px 0", fontSize: "21px" }} className='notoserif-font'>${price}</div>
                                                    <button className='lato-font add-button'>ADD TO CART</button>
                                                </div>
                                            </div>


                                        </SwiperSlide>
                                    ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts



// import { useEffect, useState } from "react";

// const TrendingProduct = () => {
//     const [data, setData] = useState(null);

// const fetchData = async () => {
//     const data = await fetch("http://localhost:3070/featured").then((res) =>
//         res.json()
//     );
//     setData(data.data);
// };


// const fetchData = async () => {
//     await fetch('http://localhost:3070/featured')
//         .then((response) => response.json())
//         .then((data) => setData(data));
// }

// const addToWishList = async (id) => {
//     await fetch("http://localhost:3070/wishlist", {
//         method: "Post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id }),
//     });
// };

// useEffect(() => {
//     fetchData();
// }, []);
// return (
//     <div id="TrendingProduct">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <p>Popular Item in the market</p>
//                     <h1>Trending Product</h1>
//                 </div>
//             </div>
//             <div className="row">
//                 {data?.map((item) => (
//                     <div className="col-12 col-sm-6 col-lg-3 mb-4" key={item._id}>
//                         <div className="_card">
//                             <div className="card-img mb-3">
//                                 <img src={item.image} alt="" />
//                                 <button onClick={() => addToWishList(item._id)}>
//                                     <i class="fa-solid fa-heart"></i>
//                                 </button>
//                             </div>
//                             <span className="category">{item.brand}</span>
//                             <h6>{item.appelation}</h6>
//                             <h6>{item.price}</h6>
//                             {/* <span className="price">
//                                     ${parseInt(item.price).toFixed(2)}
//                                 </span> */}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
// );
// };

// export default TrendingProduct;
