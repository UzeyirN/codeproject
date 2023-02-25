import React from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/Blog.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Blog = () => {


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
        <title>Blog</title>
      </Helmet>

      <div className='blog-top'>
        <span className='blog-top__wrapper'>
          <h2 className='playfair-font' style={{ color: "white" }}>BLOG</h2>
          <p className='lato-font blog-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span> / Blog</p>
        </span>
      </div>
      
      <div className="container">
        <div className="blog-wrapper">
          <div className='blog-head'>
            <Link className='blog-link playfair-font' to='winefermantation' >Wine Fermentation Process</Link>
            <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>9th Mar 2017</p>
            <Link to='winefermantation'>
              <img className='blog-img' style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/9999x9999/uploaded_images/blog-post-2.jpg?t=1489066586" alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus posuere mattis.
              Suspendisse venenatis massa in mattis condimentum. Vivamus porta, tellus vel ultricies facilisis, dolor arcu grav …</p>

            <Link to='winefermantation' style={{ color: "RGB(176, 151, 109)", textDecoration: "none" }}>read more</Link>
          </div>
        </div>

        <div className="blog-wrapper">
          <div className='blog-head'>
            <Link className='blog-link playfair-font' to='harvest' >When is a vineyard ready for harvest?</Link>
            <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>9th Mar 2017</p>
            <Link to='harvest'>
              <img className='blog-img' style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/9999x9999/uploaded_images/blog-post-1.jpg?t=1489066679" alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus posuere mattis.
              Suspendisse venenatis massa in mattis condimentum. Vivamus porta, tellus vel ultricies facilisis, dolor arcu grav …</p>

            <Link to='harvest' style={{ color: "RGB(176, 151, 109)", textDecoration: "none" }}>read more</Link>
          </div>
        </div>

        <div className="blog-wrapper">
          <div className='blog-head'>
            <Link className='blog-link playfair-font' to='winery' >Winery of the year</Link>
            <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>15th Feb 2014</p>
            <Link to='winery'>
              <img className='blog-img' style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/9999x9999/uploaded_images/blog-post-3.jpg?t=1489064769" alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus posuere mattis.
              Suspendisse venenatis massa in mattis condimentum. Vivamus porta, tellus vel ultricies facilisis, dolor arcu grav …</p>
            <Link to='winery' style={{ color: "RGB(176, 151, 109)", textDecoration: "none" }}>read more</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog