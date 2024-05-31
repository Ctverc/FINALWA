import { NavLink } from "react-router-dom"
import "./styles.css"
import React, { useState } from 'react'
import {FaBars,FaTimes}from "react-icons/fa";
import LogCz from "../images/ceskaflagTR.png"

const Navbar = () => {
  const[click,setClick] = useState(false);
  const handleClick = () => setClick(!click)

  const [color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100)
      {
        setColor(true);
      }else
      {
        setColor(false);
      }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header-nav header-bg" : "header-nav"}>
      <NavLink className="logo" to ="/">
        <img src={LogCz} alt="czflag"/>
        <h1>Blender creations</h1>
      </NavLink>
       <ul className={click ? "navigation active" : "navigation"}>
          <li>
            <NavLink to ="/About">About me</NavLink>
          </li>
          <li>
            <NavLink to ="/Contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to ="/Login">Sign in</NavLink>
          </li>
       </ul>
       <div className="menuForSmallMon" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "rgb(224, 209, 89)"}} />)
         : (<FaBars size={20} style={{color: "rgb(224, 209, 89)"}} />) }
          
          
       </div>
    </div>
  )
}

export default Navbar