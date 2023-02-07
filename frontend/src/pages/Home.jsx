import React from "react";
import { Helmet } from 'react-helmet'
import HeroSection from "../components/HomeSections/HeroSection";
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSection />
        </>
    )
}

export default Home