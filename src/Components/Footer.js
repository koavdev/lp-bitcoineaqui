import React from 'react'
import Logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
          <img src={Logo} alt='logo' />
          <p>Bitcoin É Aqui, um projeto de bitcoinização nas cidades de Rolante & Riozinho, Rio Grande do Sul.</p>
        </div>
        <div className='footer-bottom'>
            <p>Bitcoin é Aqui © 2023 Rolante/RS — Todos os direitos reservados</p>
        </div>
    </footer>
  )
}

export default Footer