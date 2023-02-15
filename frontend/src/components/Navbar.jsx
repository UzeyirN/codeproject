import React from 'react'
import '../styles/Navbar.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Navbar = ({ data }) => {

    const [isNavbarSmall, setIsNavbarSmall] = useState(true);
    const [hideLightbox, setHideLightbox] = useState(true);


    // searching
    const [products, setProducts] = useState(null)
    const [value, setValue] = useState("")

    const getData = () => {
        fetch('http://localhost:3070/featured')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }

    const searchData = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        getData()
    }, [])




    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsNavbarSmall(false);
        } else {
            setIsNavbarSmall(true);
        }
    };
    return (
        <>
            <div>
                <nav className={`navbar-wrapper ${isNavbarSmall ? "navbar-large" : "navbar-small"}`}>
                    <div className="container">

                        <div className="navbar-inner">
                            <div className="nav-logo">
                                <Link to=''><img src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/166x43/logo_1487085297__58219.original.png" alt="" /></Link>
                            </div>
                            <div className="nav-pages">
                                <ul className='nav-ul'>
                                    <li className='nav-item' >
                                        <Link className="nav-link lato-font" to='' aria-expanded="false">
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link lato-font  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SHOP WINES
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className='dropdown-li'><Link to='allshopwines' className="nav-link lato-font ">ALL SHOP WINES</Link></li>
                                            <li className='dropdown-li'><Link to='redwines' className="nav-link lato-font">RED WINES</Link></li>
                                            <li className='dropdown-li'><Link to='whitewines' className="nav-link lato-font">WHITE WINES</Link></li>
                                            <li className='dropdown-li'><Link to='rosewines' className="nav-link lato-font">ROSE WINES</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link lato-font  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ABOUT
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link to='ourstory' className="nav-link lato-font">OUR STORY</Link></li>
                                            <li><Link to='theestate' className="nav-link lato-font">THE ESTATE</Link></li>
                                            <li><Link to='shippingreturn' className="nav-link lato-font">SHIPPING & RETURNS</Link></li>
                                        </ul>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className="nav-link lato-font" to='blog' aria-expanded="false">
                                            BLOG
                                        </Link>
                                    </li>
                                    <li className='nav-item lato-font' >
                                        <Link className="nav-link" to='contact' aria-expanded="false">
                                            CONTACT US
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-user">
                                <Link className="nav-link" href='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </Link>
                                <div className="dropdown-menu search-menu" aria-labelledby="navbarDropdown">
                                    <input className='nav-search__input' onChange={searchData} type="text" placeholder='SEARCH THE PRODUCTS' />

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
                                                    products?.filter(data => {
                                                        return value.trim().toLowerCase() === "" ? data : data.appelation.toLowerCase().includes(value.toLowerCase())
                                                    })
                                                        .map((prod) => (
                                                            <SwiperSlide>

                                                                <div className="search-card__wrapper">
                                                                    <div className="search-card__f">
                                                                        <div className="search-card__body">
                                                                            <img style={{ height: "100%" }} src={prod.image} alt="" />
                                                                            <button className='feature-fav__btn'>
                                                                                <i class="fa-solid fa-heart"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="searchCard-content__f">
                                                                        <p className='lato-font' style={{ color: "RGB(176, 151, 109)",fontSize:"12px" }}>{prod.brand}</p>
                                                                        <Link className='playfair-font card-link' style={{ marginBottom: "5px", fontSize: "12px" }} >{prod.appelation}</Link>
                                                                        <div style={{ color: "RGB(176, 151, 109)", margin: "10px 0", fontSize: "16px" }} className='notoserif-font'>${prod.price}</div>
                                                                        <button className='lato-font search__add-button'>ADD TO CART</button>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                }
                                            </Swiper>
                                        </div>
                                    </div>


                                </div>
                                <Link className="nav-link" to='login' aria-expanded="false">
                                    <i class="fa-solid fa-user"></i>
                                </Link>
                                <Link className="nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </Link>
                                <div className="dropdown-menu nav-shopcart" aria-labelledby="navbarDropdown">
                                    {data ? data : "Your cart is empty"}
                                </div>
                                <div className="nav-link nav-burger" onClick={() => setHideLightbox(s => !s)}>
                                    <i className={`fa-solid ${hideLightbox ? "fa-bars" : "fa-close"}`}></i>
                                </div>
                            </div>
                        </div>
                        <div className={`lightbox ${hideLightbox ? "hide-lightbox" : "show-lightbox"}`}>
                            {/* <div className='burger-search py-5'>
                                <input className='burger-input lato-font' type="text" placeholder='SEARCH THE STORE' />
                            </div> */}
                            <div className='burger-pages'>
                                <ul className='nav-burger_ul'>
                                    <li className='nav-item burger-item' onClick={() => setHideLightbox(true)}>
                                        <Link className="nav-link lato-font" to='' aria-expanded="false">
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link lato-font" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                            SHOP WINES
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className='dropdown-li'><Link to='allshopwines' className="nav-link lato-font " onClick={() => setHideLightbox(true)}>ALL SHOP WINES</Link></li>
                                            <li className='dropdown-li'><Link to='redwines' className="nav-link lato-font" onClick={() => setHideLightbox(true)}>RED WINES</Link></li>
                                            <li className='dropdown-li'><Link to='whitewines' className="nav-link lato-font" onClick={() => setHideLightbox(true)}>WHITE WINES</Link></li>
                                            <li className='dropdown-li'><Link to='rosewines' className="nav-link lato-font" onClick={() => setHideLightbox(true)}>ROSE WINES</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link lato-font" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ABOUT
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link to='ourstory' className="nav-link lato-font" onClick={() => setHideLightbox(true)}>OUR STORY</Link></li>
                                            <li><Link to='theestate' className="nav-link lato-font" onClick={() => setHideLightbox(true)}>THE ESTATE</Link></li>
                                            <li><Link to='shippingreturn' className="nav-link lato-font" onClick={() => setHideLightbox(true)}>SHIPPING & RETURNS</Link></li>
                                        </ul>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className="nav-link lato-font" to='blog' aria-expanded="false" onClick={() => setHideLightbox(true)}>
                                            BLOG
                                        </Link>
                                    </li>
                                    <li className='nav-item lato-font' >
                                        <Link className="nav-link" to='contact' aria-expanded="false" onClick={() => setHideLightbox(true)}>
                                            CONTACT US
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='burger-user'>
                                <ul className='nav-burger_ul'>
                                    <Link className="nav-link lato-font" to='' aria-expanded="false" onClick={() => setHideLightbox(true)}>
                                        GIFT CERTIFICATES
                                    </Link>

                                    <Link className="nav-link lato-font" to='' aria-expanded="false" onClick={() => setHideLightbox(true)}>
                                        LOGIN
                                    </Link>

                                    <Link className="nav-link lato-font" to='' aria-expanded="false" onClick={() => setHideLightbox(true)}>
                                        SIGN UP
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar



