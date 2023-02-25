import React from 'react'
import '../styles/Navbar.css'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import Loading from './Loading';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const ref = useRef();
    const [isNavbarSmall, setIsNavbarSmall] = useState(true);
    const [hideLightbox, setHideLightbox] = useState(true);
    const [hideSearchbox, setHideSearchbox] = useState(true);
    const [x, setx] = useState(true);
    const [y, sety] = useState(true);
    const [loading, setLoading] = useState(true);
    const URL = 'http://localhost:3070/featured';
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        function updateIsMobile() {
            setIsMobile(window.innerWidth <= 992);
        }

        window.addEventListener('resize', updateIsMobile);
        updateIsMobile();

        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);


    // searching
    const [products, setProducts] = useState(null)
    const [value, setValue] = useState("")

    const getData = async () => {
        await axios.get(URL).then((resp) => setProducts(resp.data));
        setLoading(false);
    }

    const searchData = (e) => {
        setValue(e.target.value);

        const filteredProducts = products?.filter((data) => {
            return data.appelation.toLowerCase().includes(e.target.value.toLowerCase());
        });

        if (filteredProducts.length === 0) {
            sety(false);
        } else {
            sety(true);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    useEffect(() => {
        document.getElementById("search").addEventListener("click", handleClickk);
        return () => {
            document.getElementById("search").removeEventListener("click", handleClickk);
        };
    });

    const handleClickk = e => {
        setx(false)
    };

    window.onclick = (event) => {

        if (x && !ref.current.contains(event.target)
        ) {
            setHideSearchbox(true)
        } else if (!ref.current.contains(event.target)) {
            setHideSearchbox(s => !s)
            setx(true)
            setHideLightbox(true)
        }
        else {
            setHideSearchbox(false)
        }
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsNavbarSmall(false);
        } else {
            setIsNavbarSmall(true);
        }
    };

    const addToWishList = async (id) => {
        await fetch("http://localhost:3070/wishlist", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        toast.success('Added to cart!');

    };

    return (
        <>
            <ToastContainer />

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
                                <div className="nav-link" id="search" >
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <Link className="nav-link" to='login' aria-expanded="false">
                                    <i class="fa-solid fa-user"></i>
                                </Link>
                                <Link to='wishlist' className="nav-link" aria-expanded="false">
                                    <i className="fa-solid fa-cart-shopping"></i>

                                </Link>

                                <div className="nav-link nav-burger" id="mobil" onClick={() => setHideLightbox(s => !s)}>
                                    <i className={`fa-solid ${hideLightbox ? "fa-bars" : "fa-close"}`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`lightbox ${hideLightbox ? "hide-lightbox" : "show-lightbox"}`}>
                        <div className="container">
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
                                    <li className='nav-item lato-font' >
                                        <Link className="nav-link" to='login/createaccount' aria-expanded="false" onClick={() => setHideLightbox(true)}>
                                            SIGN UP
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div ref={ref} className={`${hideSearchbox ? "hide-searchbox" : `${y ? "show-searchboxfull" : "show-searchbox"}`}`}  >
                        <div className="search-menu" aria-labelledby="navbarDropdown" >
                            <input className='nav-search__input' onChange={searchData} type="text" placeholder='SEARCH THE STORY' />
                            <div className="container pt-5 text-center fs-5"> {y ? "" : "No search results were found"}</div>
                            <div ref={ref} >
                                <div className="row justify-content-between">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={0}
                                        slidesPerView={3}
                                        navigation={!isMobile}
                                        pagination={isMobile}
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
                                                products?.filter(data => {

                                                    return value.trim().toLowerCase() === "" ? data : data.appelation.toLowerCase().includes(value.toLowerCase())

                                                })
                                                    .map(({ _id, image, brand, appelation, price }) => (
                                                        <SwiperSlide >

                                                            <div className="search-card__wrapper">
                                                                <div hideSearchbox className="search-card__f">
                                                                    <div className="search-card__body">
                                                                        <img style={{ height: "100%" }} src={image} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="searchCard-content__f">
                                                                    <p className='lato-font' style={{ color: "RGB(176, 151, 109)", fontSize: "12px" }}>{brand}</p>
                                                                    <Link className='playfair-font card-link' style={{ marginBottom: "5px", fontSize: "14px" }} >{appelation}</Link>
                                                                    <div style={{ color: "RGB(176, 151, 109)", margin: "10px 0", fontSize: "16px" }} className='notoserif-font'>${price}</div>
                                                                    <button onClick={() => addToWishList(_id)} className='lato-font search__add-button'>ADD TO CART</button>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar






