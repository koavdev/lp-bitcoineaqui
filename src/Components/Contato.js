import React from 'react'
import Instagram from "../Assets/instagram.png"
import Twitter from "../Assets/twitter.png"
import Nostr from "../Assets/nostr.png"

const Contato = () => {
  return (
    <div id="Contato" className='contato-section-container'>
        <div className='contato-section-top'>
            <p className='primary-subheading'>Contato</p>
            <h1 className='primary-heading'>Nossas Redes Sociais</h1>
            <p className='primary-text'>Acompanhe o nosso projeto através das nossas redes sociais e fique por dentro de todas as notícias de Rolante.</p>
        </div>
        <div className='contato-section-bottom'>
            <div className='contato-section-columns'>
                <a alt="instagram" href="https://www.instagram.com/bitcoineaqui/" ><img src={Instagram} alt=""/></a>
                <p>Instagram</p>
            </div>
            <div className='contato-section-columns'>
                <a alt="twitter" href="https://twitter.com/bitcoineaqui" ><img src={Twitter} alt="" /></a>
                <p>Twitter</p>
            </div>
            <div className='contato-section-columns'>
                <a alt="nostr" href="https://iris.to/bitcoineaqui" ><img id="nostr" src={Nostr} alt="" /></a>
                <p>Nostr</p>
            </div>
        </div>
    </div>
  )
}

export default Contato