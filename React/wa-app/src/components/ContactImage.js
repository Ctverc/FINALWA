import "./styles.css";
import React from 'react'
import Image from "../images/Black.png"
import Icon from '@mdi/react';
import { mdiEmailAlertOutline } from '@mdi/js';
import { mdiPhoneOutline } from '@mdi/js';
import { mdiHomeAnalytics } from '@mdi/js';







const ContactImage = () => {
  return (
    <div className="backIm">
        
    <div className="mask">
        <img className="ContcImage" src={Image} alt="IMGF"/>
    </div>
    
    <div className="contc">
        <h1>Contact me</h1>
        <p><Icon path={mdiEmailAlertOutline} size={1}/>   Blaha4@spsejecna.cz</p>
        <p><Icon path={mdiPhoneOutline} size={1} />  606 277 152</p>
        <p><Icon path={mdiHomeAnalytics} size={1} />  Rubešova 1/41</p>
    </div>
    </div>
  )
}

export default ContactImage