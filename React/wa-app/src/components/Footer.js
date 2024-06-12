import React from 'react'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiMailboxOpen } from '@mdi/js';
import './FooterStyle.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerSpace'>
        <div className='info'>
        <div className='contactInfo'>
          <div className='github' style={{color: "#fff"}}>
        <Icon path={mdiAccount}
        size={1.2}
        style={{ marginRight:"1rem"}}
        />
       github.com/Ctverc
        </div>

        <div className='mail' style={{color: "#fff"}}>
        <Icon path={mdiMailboxOpen}
        size={1.2}
        style={{ marginRight:"1rem"}}
        />
        github.com/Ctverc
        </div>
        </div>
        </div>

        <div className='about'>
          <h3 style={{color: "#fff",marginBottom:"-20px", padding:0, }} >O této stránce</h3>
        
          <p>Tato stránka vznikla jako projekt do školy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer