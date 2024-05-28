import React from 'react'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer'>
        <div className='contactInfo'>
        <Icon path={mdiAccount}
        size={2}
        style={{color: "#fff"}}
        />
        </div>
      </div>
    </div>
  )
}

export default Footer