import "./styles.css";
import React from 'react'
import Image from "../images/SecretFace.png"

const SecretFaceImage = () => {
  return (
    <div className="backIm">
    <div className="mask">
        <img className="firstimg" src={Image} alt="IMGF"/>
    </div>
    <div className="content">
        <h1>Secret site</h1>
    </div>
  </div>
  )
}

export default SecretFaceImage