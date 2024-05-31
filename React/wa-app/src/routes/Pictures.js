import "../components/styles.css";
import React from 'react'
import Kuch from "../images/Kuchyn.png"
import Loz from "../images/mistnost.png"
import Chod from "../images/Chodba.png"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pictures = () => {
  return (
    
    <div className="backIm">
        <Navbar/>
        <img className="a" src={Kuch} alt="IMGF"/>
        <img className="a" src={Loz} alt="ADW"/>
        <img className="a" src={Chod} alt="AFC"/>
        <Footer/>
  </div>
  )
}

export default Pictures