import React from 'react'

const Form = () => {
  return (
    <div className='form-section banner03'>
        <div className='form-left'>
        {/* <div className='coach-left-photo'></div> */}

            <div className='form-left-text' >
              <p className='title'>Vous aussi, offrez une expérience complète aux supporters et aux membres de votre club</p>
            </div>
        </div>        
        <div className='form-right' >
            <form className='form'>
                <div className='form-header'>
                    <input type="text" name="name" placeholder="Nom" />
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className='form-textarea'>
                    <textarea name="message" placeholder="Message"  />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default Form