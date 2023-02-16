import React from "react";
import { Helmet } from 'react-helmet'
import FeaturedProducts from "../components/HomeSections/FeaturedProducts";
import HeroSection from "../components/HomeSections/HeroSection";
import LatestCollecions from "../components/HomeSections/LatestCollecions";
import MessageSec from "../components/HomeSections/MessageSec";
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSection />
            <MessageSec />
            <LatestCollecions />
            <FeaturedProducts />


           
        </>
    )
}

export default Home