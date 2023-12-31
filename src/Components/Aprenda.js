import React from 'react'
import AprendaBackground from "../Assets/turismo-background.png"
import AprendaImage from "../Assets/study.jpg"
import { FiArrowRight } from 'react-icons/fi';

const Aprenda = () => {
  return (
    <div id="Aprenda" className='aprenda-section-container'>
        <div className='aprenda-section-text-container'>
            <p className='primary-subheading'>Aprenda</p>
            <h1 className='primary-heading'>Estude Sobre Bitcoin</h1>
            <p className='primary-text'>Estudar sobre Bitcoin é importante para entender como a tecnologia blockchain pode transformar o mundo.</p>
            <div className='aprenda-buttons-container'>
                <button className='secondary-button'><span>Estudar <FiArrowRight /></span></button>
            </div>
        </div>

        <div className="aprenda-background-image-container">
            <img src={AprendaBackground} alt="background" />
        </div>
        <div className='aprenda-section-image-container'>
            <img src={AprendaImage} alt="study bitcoin" />
        </div>
    </div>
  )
}

export default Aprenda