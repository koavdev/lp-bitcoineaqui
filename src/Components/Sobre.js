import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutImage from "../Assets/about-background-image.jpeg"
import { FiArrowRight } from 'react-icons/fi';


const Sobre = () => {
  return (
    <div id="Sobre" className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="background" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutImage} alt="rolante" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>Sobre</p>
            <h1 className='primary-heading'>
                A Cidade de Rolante
            </h1>
            <p className='primary-text'>Um lugar seguro e mágico, onde a natureza e o Bitcoin se harmonizam. Rolante tem cachoeiras incríveis na Mata Atlântica, uma experiência única.</p>
            <p className='primary-text'>Rolante é uma cidade Bitcoin, com muitos serviços que aceitam a moeda. Você pode fazer turismo, comprar, construir, cuidar da saúde e até ir ao hospital pagando com Bitcoin.</p>
        
            <div className='about-buttons-container'>
                <button className='secondary-button'>Continue lendo <FiArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Sobre;