import './style.css';
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sobre1 from '../Assets/sobre1.png'
import Sobre2 from '../Assets/sobre2.png'
import Sobre3 from '../Assets/sobre3.png'


const sobre = () => {
  return (
    <div>
      <Navbar/>    
      <div className='page-container'>
        <div className='about-heading'>
          <p className='primary-subheading'>Sobre</p>
          <h1>Descubra Rolante & Região</h1>
        </div>
        <div className='about-text'>
          <p className=''>Um refúgio encantador e seguro, onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita. Imersa na deslumbrante Mata Atlântica, Rolante se orgulha de suas cachoeiras e cascatas, muitas ainda inexploradas, proporcionando uma experiência única aos visitantes.</p>
          <div className='about-img'>
            <img src={Sobre1} alt='cachoeiras'/>
          </div>
          <p className=''>Neste paraíso, os amantes do vinho podem saborear a autêntica produção local em nossas vinícolas, enquanto apreciam o atendimento personalizado dos próprios proprietários. Aventure-se pelo Morro Grande, um marco natural imperdível pela vista mais alta da região e pelo belíssimo por-do-sol, e desfrute de uma variedade de atividades e serviços, todos acessíveis através do Bitcoin.</p>
          <div className='about-img'>
            <img src={Sobre2} alt='cachoeiras'/>
          </div>
          <p className=''>Em Rolante, viver a vida totalmente em Bitcoin é uma realidade. Aqui, você encontrará agências de turismo, guias especializados e uma diversidade de serviços, desde lojas de departamentos e óticas até imobiliárias, construtoras, arquitetos, móveis, materiais de construção e energia solar. Na área da saúde, conte com farmácias, massoterapeutas, fisioterapeutas e serviços odontológicos de ponta e até o hospital da cidade aceitando Bitcoin como pagamento.</p>
          <div className='about-img'>
            <img src={Sobre3} alt='cachoeiras' id='sobre3'/>
          </div>
          <p>Rolante é uma cidade pacata e tranquila, com uma atmosfera familiar que a torna um destino turístico perfeito para um fim de semana relaxante e um excelente lugar para se viver. Aqui, você pode desfrutar da serenidade de um aconchegante município do interior, enquanto aproveita a praticidade e a liberdade proporcionadas pelo Bitcoin. Venha conhecer e vivenciar tudo o que Rolante tem a oferecer, aliando o charme de uma cidade calma à inovação do bitcoin.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default sobre