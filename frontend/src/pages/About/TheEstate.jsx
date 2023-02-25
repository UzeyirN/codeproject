import React,{useEffect} from "react";
import { Helmet } from 'react-helmet'
import '../../styles/About/TheEstate.css'

const TheEstate = () => {


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
                <title>The Estate</title>
            </Helmet>

            <div className='estate-top'>
                <span className='estate-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>THE ESTATE</h2>
                    <p className='lato-font estate-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home / </span>
                        <span style={{ color: "RGB(176, 151, 109)" }}>About</span> / The estate</p>
                </span>
            </div>

            <div className="container">
                <div className="estate-wrapper">
                    <div className="estate-article">
                        <p className="lato-font estate-p">In tempor, mauris nec viverra molestie,
                            lorem diam dignissim ex, quis lobortis dui turpis ut enim. Aenean dui nulla, placerat in massa eget, lacinia accumsan nunc. Curabitur et mauris dolor.</p>
                        <img className='estate-img' style={{ width: "100%", height: "100%" }} src="https://villenoir7.mybigcommerce.com/product_images/uploaded_images/estate-gallery-1.jpg" alt="" />
                    </div>

                    <div className="estate-article">
                        <h2 className='playfair-font estate-h2'>The vineyard</h2>
                        <p className="lato-font estate-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu urna pretium, fermentum risus aliquam, pulvinar mauris. Nunc sit amet orci placerat, auctor urna at, euismod tellus.
                            Aenean vehicula augue ante, vel suscipit enim ullamcorper vel. Quisque nec nunc lorem. Duis interdum orci et neque elementum fermentum. Nulla quis lectus nibh.</p>

                        <p className="lato-font estate-p">Nunc gravida malesuada luctus. Fusce viverra nisl quis nulla dapibus, ac elementum lectus scelerisque. Proin fringilla dolor non sapien pellentesque accumsan.
                            Quisque volutpat lobortis odio quis feugiat. ACREAGE</p>
                        <img className='estate-img' style={{ width: "100%", height: "100%" }} src="https://villenoir7.mybigcommerce.com/product_images/uploaded_images/estate-gallery-2.jpg" alt="" />

                    </div>

                    <div className="estate-article">
                        <h2 className='playfair-font estate-h2'>The location</h2>
                        <p className="lato-font estate-p">In tempor, mauris nec viverra molestie, lorem diam dignissim ex, quis lobortis dui turpis ut enim. Aenean dui nulla, placerat in massa
                            eget, lacinia accumsan nunc. Curabitur et mauris dolor.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheEstate