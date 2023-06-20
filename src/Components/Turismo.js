import React from 'react'
import TurismoBackground from "../Assets/turismo-background.png"
import TurismoImage from "../Assets/turismo-background-image.png"
import { FiArrowRight } from 'react-icons/fi';

const Turismo = () => {
  return (
    <div id="Turismo" className='turismo-section-container'>
        <div className='turismo-section-text-container'>
            <p className='primary-subheading'>Turismo</p>
            <h1 className='primary-heading'>
                Como Chegar Aqui?
            </h1>
            <p className='primary-text'>Preparamos algumas opções de roteiro para facilitar sua viagem a Rolante e garantir que você chegue à nossa cidade com tranquilidade.</p>
        
            <div className='turismo-buttons-container'>
                <button className='secondary-button'>Acessar roteiros <FiArrowRight /></button>
            </div>
        </div>

        <div className="turismo-background-image-container">
            <img src={TurismoBackground} alt="" />
        </div>

        <div className='turismo-section-image-container'>
            <img src={TurismoImage} alt="" />
        </div>
        
        
        
    </div>
  )
}

export default Turismo