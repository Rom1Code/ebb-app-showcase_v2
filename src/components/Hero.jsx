import React from 'react'
import assets from '../assets';

const Hero = () => {
  return (
    <div className='hero-section banner'>
        <div className='hero-left'>
            <div className='hero-left-span'>
              <span><span>Actualités</span></span>
              <span><span>Résultats</span></span>
              <span><span>Classements</span></span>
              <span><span>Calendriers</span></span>
              <span><span className='hero-desc'>Tenez-vous au courant des événements du club</span></span>
            </div>
                  <div className='badge_container'>
                    <a href='#download'>  
                     <div className='badge_android'></div>
                    </a>
                    <a href='#download'>
                      <div className='badge_ios'></div>
                    </a>
            </div>
        </div>
        <div className='hero-img-container' >
            <img src={assets.ebb8}  className='hero-img'/>
        </div>
    </div>
  )
}

export default Hero