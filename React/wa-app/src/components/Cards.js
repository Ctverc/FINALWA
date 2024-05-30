import "./Cards.css"
import React from 'react'
import pic1 from "../images/mistnost.png";
import { NavLink } from "react-router-dom";
const cards = (props) => {
  return (
    
    <div className="card">
        <img src={props.imgsrc} alt="pic1"/>
        <h2 className="title">{props.title}</h2>
            <div className="description">
                <p>{props.text}</p>
                <div className="buttons">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="youtube.com" className="btn">Source</NavLink>
                </div>
            </div>
    </div>

  )
}

export default cards