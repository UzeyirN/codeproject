import React from 'react'
import '../../styles/BlogPages/BlogPages.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Harvest = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <>
            <Helmet>
                <title>Harvest</title>
            </Helmet>

            <div className='blog-pages__top'>
                <span>
                    <p className='lato-font blog-pages-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>
                        <span style={{ color: "RGB(176, 151, 109)" }}> / Blog</span> / When is a vineyard ready for harvest?</p>
                </span>
            </div>

            <div className="container">
                <div className="blog-pages__wrapper">
                    <div className='blog-pages-content'>
                        <Link className='blog-pages__link playfair-font' to='' >When is a vineyard ready for harvest?</Link>
                        <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>15th Feb 2014</p>
                        <Link to='winery'>
                            <img className='blog-pages__img' style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/9999x9999/uploaded_images/blog-post-1.jpg?t=1489066679" alt="" />
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus posuere mattis. Suspendisse venenatis massa in mattis condimentum. Vivamus porta, tellus vel ultricies facilisis,
                            dolor arcu gravida leo, at commodo tellus tellus nec sapien. Suspendisse potenti.</p>

                        <p>
                            Nam efficitur, ligula vel ultrices feugiat, sapien sem euismod magna, eu maximus libero odio quis leo. Suspendisse ut enim porttitor, ultrices mauris eget, pretium enim. Aliquam vulputate
                            sapien at urna tempor mollis. Fusce a ultrices justo. Curabitur sit amet nunc urna. Proin imperdiet nec felis et dictum. Nam id justo consequat, rhoncus ante aliquet, sodales ex. Morbi porta
                            dui scelerisque ultricies tincidunt. Aliquam erat volutpat. Proin vitae turpis lectus. Nulla non nisi magna. Etiam sit amet nisi in massa dignissim tincidunt et vitae tortor.
                        </p>

                        <p>
                            Sed sodales eu ligula nec hendrerit. Sed id diam est. Proin ullamcorper sem non justo ullamcorper sodales. Nulla tincidunt, turpis eu efficitur accumsan, sem felis bibendum nisl, sed interdum
                            lectus nulla in lectus. Mauris gravida metus quis pharetra tincidunt. Nulla facilisis nisi nec libero interdum, a interdum dolor consequat. Aliquam pharetra arcu sit amet massa ullamcorper pulvinar.
                            Integer pharetra risus nec ultrices tempor. Maecenas dapibus nunc nec nibh sagittis rutrum. Curabitur sollicitudin leo a lectus scelerisque dapibus. Etiam ornare finibus mi ullamcorper vulputate. Donec viverra libero justo,
                            ut pulvinar metus aliquam quis. Pellentesque consequat erat nec molestie dignissim. Suspendisse nec metus fermentum, pulvinar nibh sed, sodales orci.
                        </p>

                        <div className='blog-pages-social__wrapper'>
                            <Link className='blog-pages__social-link'><i className="fa-brands fa-square-facebook blog-pages-social"></i></Link>
                            <Link className='blog-pages__social-link'><i className="fa-solid fa-envelope blog-pages-social"></i></Link>
                            <Link className='blog-pages__social-link'><i className="fa-solid fa-print blog-pages-social"></i></Link>
                            <Link className='blog-pages__social-link'><i className="fa-brands fa-square-twitter blog-pages-social"></i></Link>
                            <Link className='blog-pages__social-link'><i className="fa-brands fa-square-pinterest blog-pages-social"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Harvest
