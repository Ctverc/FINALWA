import React from 'react'
import "./styles.css";
import Image from "../images/BranaNoc.png"

const SecBckImage = () => {
  return (
    <div className="backIm">
    <div className="mask">
        <img className="firstimg" src={Image} alt="IMGF"/>
    </div>
    <div className="b">
        <h1>About</h1>
        <p>Jsem žák třetího ročníku střední školy.</p>
        <p>Programuji a rád tvořím v blenderu.</p>
    </div>
  </div>
  )
}

export default SecBckImage