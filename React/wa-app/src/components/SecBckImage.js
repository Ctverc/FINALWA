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
        <p>Oliverovi při jeho narození v místním chudobinci/sirotčinci umírá matka, poněvadž není nikdo, kdo by se dítěte ujal, zůstává i nadále jeho „zajatcem“; jméno mu tehdy určila obec. Sirotek Oliver vyrůstá v chudobinci pod vládou krutého a nelidského pana Bumbla, kde je všem na obtíž a bylo by lepší, kdyby raději umřel.</p>
    </div>
  </div>
  )
}

export default SecBckImage