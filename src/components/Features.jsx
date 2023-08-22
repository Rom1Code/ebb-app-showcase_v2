import React from 'react'
import assets from '../assets';

const Card = ({ iconUrl, iconText }) => {
  return (
    <div className='card'>
      <img src={iconUrl} alt="icon" className='card-img' />
      <p >{iconText}</p>
  </div>  )
}

const Features = () => {
  return (
    <div className='features banner03'>
      <div className='text'>
        <h1>Technologies</h1>
        <p className='desc'>L'application EBB a été développé avec la technologie : React Native</p>
      </div>
      <div className='section-card'>
          <Card iconUrl={assets.react} iconText="React Native" />
          <Card iconUrl={assets.javascript} iconText="JavaScript" />
      </div>
    </div>
  )
}

export default Features