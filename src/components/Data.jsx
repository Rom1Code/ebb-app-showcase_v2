import React from 'react'
import assets from '../assets';

const Card = ({ title, text }) => {
  return (
    <div className='data-card'>
      <h1>{title}</h1>
      <h2 >{text}</h2>
  </div>  )
}

const Data = () => {
  return (
    <div className='data-section banner03'>
      {/* <div className='text'>
        <h1>Les chiffres du club</h1>
      </div> */}
      <div className='section-data-container'>
          <Card title="Equipes" text="45" />
          <Card title="Championnats" text="60" />
          <Card title="Rencontres" text="430" />

      </div>
    </div>
  )
}

export default Data