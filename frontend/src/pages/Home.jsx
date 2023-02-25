import React,{useEffect} from "react";
import { Helmet } from 'react-helmet'
import FeaturedProducts from "../components/HomeSections/FeaturedProducts";
import HeroSection from "../components/HomeSections/HeroSection";
import LatestCollecions from "../components/HomeSections/LatestCollecions";
import MessageSec from "../components/HomeSections/MessageSec";
import '../styles/Home.css'

const Home = () => {

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