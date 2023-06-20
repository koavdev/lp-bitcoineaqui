import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import AboutBackground from "../Assets/about-background.png"
import ProjetoImage from "../Assets/bitcoineaqui.png"

const Doacoes = () => {
  return (
    <div id="Doacoes" className='doacoes-section-container'>
        <div className='doacoes-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className="doacoes-section-image-container">
            <img src={ProjetoImage} alt="" />
        </div>
        <div className='doacoes-section-text-container'>
            <p className='primary-subheading'>Doações</p>
            <h1 className='primary-heading'>Ajude o Nosso Projeto</h1>
            <p className='primary-text'>Pegue sua Carteira Lightning, leia o QRCode do projeto que mais lhe agrada e faça uma doação direta! Sem intermediários, sem burocracia! Como uma doação deve ser!</p>
        
            <div className='doacoes-buttons-container'>
                <button className='secondary-button'>Ver projetos <FiArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Doacoes