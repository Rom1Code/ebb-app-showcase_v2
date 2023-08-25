import React, { useState } from 'react';
import assets from '../assets';

const Hero = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('android');

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    const handleAndroidClick = () => {
        setActiveButton('android');
    };

    const handleIOSClick = () => {
        setActiveButton('ios');
    };


  return (
    <div className='hero-section banner'>
        <div className='logo'></div>
        <div className='hero-left'>
            <div className='hero-left-span'>
              <span><span>Actualités</span></span>
              <span><span>Résultats</span></span>
              <span><span>Classements</span></span>
              <span><span>Calendriers</span></span>
              <span><span className='hero-desc'>Tenez-vous au courant des événements du club</span></span>
              <div className='badge_container'>
                    {/* <a href='#download'>  
                     <div className='badge_android'></div>
                    </a>
                    <a href='#download'>
                      <div className='badge_ios'></div>
                    </a> */}
                  <div className={`modal ${isVisible ? 'visible' : ''}`} >
                      <div className={`${activeButton === 'android' ? 'qr_android' : 'qr_ios'}`} ></div>
                      <div
                    className={`android-line ${activeButton === 'android' ? 'active' : ''}`}
                    onClick={handleAndroidClick}
                >                          <div className="logo_android_modal"></div>
                          <span>Android</span>
                      </div>
                      <div
                    className={`ios-line ${activeButton === 'ios' ? 'active' : ''}`}
                    onClick={handleIOSClick}
                >                          <div className="logo_ios_modal" ></div>
                          <span>IOS</span>
                      </div>
                  </div>
          
                  <div className="btn-wrapper" id="btn-wrapper" onClick={handleButtonClick} >
                      <div className="logo_android logo_transition"></div>
                      <div className="logo_ios logo_transition" ></div>
                      <span>Télécharger</span>
                  </div>

            </div>

            </div>
        </div>
        <div className='hero-right' >
            <div className="hero-img-container">
                <div className='hero-img' ></div>
            </div>
        </div>
    </div>
  )
}

export default Hero