import "./Cards.css"
import React from 'react'
import { NavLink } from "react-router-dom";
const cards = (props) => {
  return (
    
    <div className="card">
        <img src={props.imgsrc} alt="pic1"/>
        <h2 className="title">{props.title}</h2>
            <div className="description">
                <p>{props.text}</p>
                <div className="buttons">
                    <NavLink to={props.view} className="btn">Pomocný tutorial</NavLink>
                    <NavLink to="Pictures" className="btn">Obrázky</NavLink>
                </div>
            </div>
    </div>

  )
}

export default cards