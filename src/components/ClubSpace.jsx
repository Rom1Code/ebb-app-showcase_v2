import React from 'react'
import assets from '../assets';

const ClubSpace = () => {
  return (
    <div className='coach-section banner02'>
        <div className='coach-left'>
            <div className='coach-left-text' >
              <p className='title'>Espace dédié pour les membres du comité et les entraîneurs</p>
              <div className='desc'>Accédez facilement aux               
              <div className='words-container'>
              <div className='words'>
                <span>Licences joueurs</span>
                <span>Liste de brûlage</span>
                <span>Feuilles de match</span>
                <span>Fautes techniques</span>
              </div>
              </div>
              </div>
            </div>
        </div>        
        <div className='coach-img-container' >
            <img src={assets.ebb9}  className='coach-img'/>
        </div>
    </div>

  )
}

export default ClubSpace