import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import OurAdress from './OurAdress';
import BeConnected from './BeConnected';


const MainRoot = () => {

 
  return (
    <>
      <Navbar />
      <Outlet />
      <OurAdress />
      <BeConnected />
      <Footer />
    </>
  )
}

export default MainRoot