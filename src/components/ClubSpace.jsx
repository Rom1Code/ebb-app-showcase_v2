import React from 'react'
import assets from '../assets';

const ClubSpace = () => {
  return (
    <div className='coach-section banner02'>
        <div className='coach-left'>
            <div className='coach-left-text' >
              <p className='title'>Espace dédié pour les membres du comité et les entraîneurs</p>
              <p className='desc'>Accédez facilement aux ressources et informations suivantes :</p>
              <ul>
                <li>Licences joueurs </li>
                <li>Liste de brûlage</li>
                <li>Feuilles de match</li>
                <li>Fautes techniques</li>
              </ul>
            </div>
        </div>        
        <div className='hero-img-container' >
            <img src={assets.ebb9}  className='hero-img'/>
        </div>
    </div>

  )
}

export default ClubSpace