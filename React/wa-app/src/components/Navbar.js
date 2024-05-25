import { Link } from "react-router-dom"
import "./styles.css"
import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
      <Link to ="/">
        <h1>GVP</h1>
      </Link>
       <ul className="navigation">
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
    </div>
  )
}

export default Navbar