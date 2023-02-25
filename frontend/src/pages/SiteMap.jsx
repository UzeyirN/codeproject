import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/Sitemap.css'
import { useEffect } from 'react';

const SiteMap = () => {

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
                <title>Sitemap</title>
            </Helmet>
            <div className='sitemap-top'>
                <span className='sitemap-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>SITEMAP</h2>
                </span>
            </div>

            <div className="sitemap-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.740756103323!2d-0.6921189844998238!3d44.86757217909841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d0b8c4eee847%3A0x6fd5a851a0f6b9d0!2s53%20Rue%20de%20Venteille%2C%2033185%20Le%20Haillan%2C%20France!5e0!3m2!1sen!2s!4v1676547521803!5m2!1sen!2s"
                    style={{ width: "100%", height: "500px" }} className='sitemap-iframe' title="sitemap"></iframe>
            </div>
        </>
    )
}

export default SiteMap
