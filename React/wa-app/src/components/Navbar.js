import { Link } from "react-router-dom"
import "./styles.css"
import React, { useState } from 'react'
import {FaBars,FaTimes}from "react-icons/fa";

const Navbar = () => {
const[click,setClick] = useState(false);
const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <Link to ="/">
        <h1>GVP</h1>
      </Link>
       <ul className={click ? "navigation active" : "navigation"}>
          <li>
            <Link to ="/Articles">Articles</Link>
          </li>
          <li>
            <Link to ="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to ="/Register">Sign in</Link>
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