import React from 'react';
import assets from '../assets';

const Download = () => {
  return (
    <div className='download' id='download'>
        <div className='text'>
          <h1>Télécharger l'application</h1>
          </div>
            <div className='dwl_badge_container'>
                     <div className='badge_android' onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rom1code.ebbapp', "_blank")}></div>
                      <div className='badge_ios' onClick={() => window.open('https://apps.apple.com/fr/app/eckbolsheim-basket-ball/id6451486349', "_blank")}></div>
            </div>
          
          {/* Recuperer le logo android et appel transparent  */}

        <div className='download-img' >
          <img 
            src={assets.ebb5}
            alt="download_png"
            className='img2'
          />
        </div>
    </div>
  )
}

export default Download