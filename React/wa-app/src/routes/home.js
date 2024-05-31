import React from 'react'
import Navbar from '../components/Navbar';
import BckImage from '../components/BckImage';
import Footer from '../components/Footer';
import Cards from '../components/Gallery';
import FirstImage from "../images/Kuchyn.png"
const home = () => {
  return (
    <div>
        <Navbar/>
        <BckImage/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default home