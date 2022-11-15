import React from 'react'
import { Link } from 'react-router-dom';

import HeroPic from '../../images/vintagepic.jpg'

export const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-bg'>
            <div className='image-bg'>
            <img src={HeroPic} alt='pic of clothes'></img>
            </div>            
        </div>
        <div className='hero-content'>
            <div className='hero-items'>                
                <Link to="/storefront" className='store-link'>Take a look</Link>               
            </div>
        </div>

    </div>
  )
}
