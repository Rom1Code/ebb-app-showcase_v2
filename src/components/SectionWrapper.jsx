import React from 'react'

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`${reverse ? 'section-reverse' : 'section' } ${banner}  `}>
        <div className={`${reverse ? 'section-sub-reverse' : 'section-sub' } }`}>
            <div className={` ${reverse ? 'section-text-reverse' : 'section-text'} ${reverse ? 'translateRight' : 'translateLeft'} `}>
              <p className='section-title'>{title}</p>
              <p className='section-desc'>{description}</p>
                {showBtn && (
                  <div className='badge_container'>
                    <a href='https://play.google.com/store/apps/details?id=com.rom1code.ebbapp'>
                     <div className='badge_android'></div>
                    </a>
                      <div className='badge_ios'></div>
                  </div>
              )}
            </div>
        </div>
        <div className={`${reverse ? 'section-img-reverse' : 'section-img' }`} >
            <img src={mockupImg}  className={` ${reverse ? 'img-wrapper-reverse' : 'img-wrapper'} ${reverse ? 'translateLeft' : 'translateRight'}`}/>
        </div>
    </div>
  )
}

export default SectionWrapper