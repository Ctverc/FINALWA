import "./Cards.css"
import React from 'react'
import Cards from "./Cards";
import Data from "./GalleryCardData";


const Gallery = () => {
  return (
    <div className="workspace">
        <h1 className="header">Také se koukněte</h1>
            <div className="card-space">
                {Data.map((value,index) =>{
                    return(
                        <Cards
                        key={index}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        text={value.text}
                        view={value.view}
                        
                        />
                    )
                })}
            </div>
        </div>
  )
}

export default Gallery