import "./styles.css";
import React from 'react'
import FirstImage from "../images/Kuchyn.png"
const BckImage = () => {
  return ( 
  <div className="backIm">
    <div className="mask">
        <img className="firstimg" src={FirstImage} alt="IMGF"/>
    </div>
    <div className="content">
        <h1>Blender creations</h1>
        <p></p>
        <p></p>
    </div>
  </div>
  )
}

export default BckImage