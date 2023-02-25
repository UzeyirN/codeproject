import React,{useEffect} from "react";
import { Helmet } from 'react-helmet'
import '../../styles/About/OurStory.css'

const OurStory = () => {


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
                <title>Our Story</title>
            </Helmet>
            <div className='ourstory-top'>
                <span className='ourstory-top__wrapper'>
                    <h2 className='playfair-font' style={{ color: "white" }}>OUR STORY</h2>
                    <p className='lato-font ourstory-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home / </span>
                        <span style={{ color: "RGB(176, 151, 109)" }}>About</span> / Our Story</p>
                </span>
            </div>

            <div className="container">
                <div className="ourstory-wrapper">
                    <div className="ourstory-article">
                        <h2 className='playfair-font ourstory-h2'>How we started</h2>
                        <p className="lato-font ourstory-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec vulputate nibh et nulla hendrerit, ut condimentum odio porttitor. Nulla consectetur nibh massa, eget scelerisque nisl volutpat et.
                            Integer pharetra efficitur tempor. Quisque finibus suscipit nisi, quis scelerisque nunc efficitur vitae. Duis interdum aliquam mauris, ut fermentum enim suscipit.</p>
                    </div>

                    <div className="ourstory-article">
                        <h2 className='playfair-font ourstory-h2'>Passion</h2>
                        <p className="lato-font ourstory-p">Suspendisse commodo ex eget lorem iaculis, vel ultrices neque sodales. Sed bibendum egestas felis, commodo mattis ligula.
                            Mauris aliquam lacus id hendrerit venenatis. Quisque dignissim mi ut dictum gravida.</p>
                    </div>

                    <div className="ourstory-article">
                        <h2 className='playfair-font ourstory-h2'>Craftmanship</h2>
                        <p className="lato-font ourstory-p">Duis sit amet ex sit amet tortor posuere posuere. Mauris sodales rutrum tincidunt.
                            Donec non massa ullamcorper, volutpat ex ac, volutpat libero. Morbi vel metus fermentum augue lacinia maximus sit amet ut dolor.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory