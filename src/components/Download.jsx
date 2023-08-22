import React from 'react';
import assets from '../assets';

const Download = () => {
  return (
    <div className='download' id='download'>
        <div className='text'>
          <h1>Télécharger l'application</h1>
          </div>

          <div className='badge_container'>
                    <a href='#download'>  
                     <div className='badge_android' onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rom1code.ebbapp', "_blank")}></div>
                    </a>
                    <a href='#download'>
                      <div className='badge_ios' onClick={() => window.open('https://apps.apple.com/fr/app/eckbolsheim-basket-ball/id6451486349', "_blank")}></div>
                    </a>
            </div>
          {/* <div className='btn-dwl' onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rom1code.ebbapp', "_blank")}>
            <span>Télécharger </span>
            <span>(Android)</span>
          </div>
          <div className='btn-dwl' onClick={() => window.open('https://apps.apple.com/fr/app/eckbolsheim-basket-ball/id6451486349', "_blank")}>
            <span>Télécharger </span>
            <span>(IOS)</span>
          </div> */}

          
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