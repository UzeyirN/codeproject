import React from 'react'
import '../styles/Navbar.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ data }) => {

    const [isNavbarSmall, setIsNavbarSmall] = useState(true);

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
                            <Link className="nav-link lato-font" href='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </Link>
                            <div className="dropdown-menu search-menu" aria-labelledby="navbarDropdown">
                                <input className='nav-search__input' type="text" placeholder='SEARCH THE STORY' />
                            </div>
                            <Link className="nav-link lato-font" to='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user"></i>
                            </Link>
                            <Link className="nav-link lato-font" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <div className="dropdown-menu nav-shopcart" aria-labelledby="navbarDropdown">

                                {data ? data : "Your cart is empty"}

                            </div>

                            {/* burger menu */}
                            <span className="nav-item dropdown nav-burger">
                                <Link className=" nav-link lato-font" to='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-bars"></i>
                                </Link>
                                <div className="dropdown-menu nav-burgercard" aria-labelledby="navbarDropdown">

                                    <div className='burger-search'>
                                        <input className='burger-input lato-font' type="text" placeholder='SEARCH THE STORE' />
                                    </div>
                                    <div className='burger-pages'>
                                        <ul className='nav-burger_ul'>
                                            <li className='nav-item burger-item' >
                                                <Link className="nav-link lato-font" to='' aria-expanded="false">
                                                    HOME
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link lato-font" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    SHOP WINES
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li className='dropdown-li'><Link to='allshopwines' className="nav-link lato-font ">ALL SHOP WINES</Link></li>
                                                    <li className='dropdown-li'><Link to='redwines' className="nav-link lato-font">RED WINES</Link></li>
                                                    <li className='dropdown-li'><Link to='whitewines' className="nav-link lato-font">WHITE WINES</Link></li>
                                                    <li className='dropdown-li'><Link to='rosewines' className="nav-link lato-font">ROSE WINES</Link></li>
                                                </ul>
                                            </li>
                                            <div class="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link lato-font" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <div className='burger-user'>
                                        <ul className='nav-burger_ul'>
                                            <Link className="nav-link lato-font" to='' aria-expanded="false">
                                                GIFT CERTIFICATES
                                            </Link>

                                            <Link className="nav-link lato-font" to='' aria-expanded="false">
                                                LOGIN
                                            </Link>

                                            <Link className="nav-link lato-font" to='' aria-expanded="false">
                                                SIGN UP
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar



