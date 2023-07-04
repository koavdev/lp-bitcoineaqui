import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cascata1 from '../Assets/cascata1.jpg'
import Cascata2 from '../Assets/cascata2.jpg'
import Vinicola1 from '../Assets/vinicola1.jpg'
import Vinicola2 from '../Assets/vinicola2.jpg'
import MorroGrande from '../Assets/morroGrande.jpg'

const turismo = () => {
  return (
    <div>
        <Navbar/>
        <div className='page-container'>
          <div className='turismo-heading'>
            <p className='primary-subheading'>Turismo</p>
            <h1>O Que Fazer Em Rolante?</h1>
          </div>
          <div className='turismo-menu'>
            <div className='turismo-menu-card'>
              <h3>Como Chegar?</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button>Ver roteiros ⬇️</button>
            </div>
            <div className='turismo-menu-card'>
              <h3>Hotelaria</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button>Ver hotéis ⬇️</button>
            </div>
            <div className='turismo-menu-card'>
              <h3>Pontos Turísticos</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button>Ver pontos ⬇️</button>
            </div>
          </div>
          <div className='turismo-text'>
            <p>Como uma pacata cidadezinha do interior, os domingo por aqui são bem calmos. Se você planeja nos visitar neste dia da semana, sugerimos que faça reserva prévia para sua refeição, seja em uma de nossas encantadoras pousadas ou entre as opções listadas na página Comércio.</p>
            <h3 className='turismo-subheading'>Cascatas</h3>
            <p>A <span className='turismo-focus'>Cascata do Chuvisqueiro</span> é um espetáculo natural de tirar o fôlego. Com uma queda d'água de mais de 60 metros de altura, é possível admirar a beleza da natureza em um ambiente tranquilo e revitalizante. Ideal para quem busca um momento de contato com a natureza.</p>
            <div className='turismo-img'>
              <img src={Cascata1} alt='cascata do chuvisqueiro'/>
              <h4>Cascata do Chuvisqueiro</h4>
            </div>
            <p>A <span className='turismo-focus'>Cascata das Andorinhas</span> é caracterizada por uma queda d'água com aproximadamente 30 metros de altura, que desagua em uma ampla piscina natural de águas cristalinas, ideal para banhos. A cascata é cercada por imponentes paredões rochosos, que conferem uma atmosfera única ao ambiente. O nome da cascata se deve às andorinhas que habitam as cavidades das rochas, formando um espetáculo à parte com seu voo e canto.</p>
            <div className='turismo-img'>
              <img src={Cascata2} alt='cascata das andorinhas'/>
              <h4>Cascata das Andorinhas</h4>
            </div>
            <h3 className='turismo-subheading'>Vinícolas</h3>
            <p>A <span className='turismo-focus'>Vinhos Finger</span>, em Rolante, oferece aos amantes de vinhos e belas paisagens um refúgio tranquilo e romântico. Preservando a tradição de atendimento acolhedor dos próprios donos, a vinícola convida os visitantes a desfrutarem de momentos únicos, degustando vinhos e espumantes cuidadosamente produzidos pela família Finger, acompanhados de deliciosas tábuas de frios regionais.</p>
            <div className='turismo-img'>
              <img src={Vinicola1} alt='vinícola finger'/>
              <h4>Vinícola Finger</h4>
            </div>
            <p>Aqui na <span className='turismo-focus'>Vinícola Bennato</span>, você encontrará vinhos, sucos, espumantes, geleias, queijos e muitos outros produtos artesanais. Desfrute do nosso deck, saboreie nossas tábuas de frios e participe de passeios guiados encantadores, incluindo o divertido e tradicional passeio de Tobata com o nôno. Nossas excursões oferecem uma visão íntima da propriedade e do processo de vinificação, com destaques para a visita à cachoeira e a tradicional pisa da uva.</p>
            <div className='turismo-img'>
              <img src={Vinicola2} alt='vinícola bennato'/>
              <h4>Vinícola Bennato</h4>
            </div>
            <h3 className='turismo-subheading'>Morro Grande</h3>
            <p>O <span className='turismo-focus'>Morro Grande</span> em Rolante é um lugar mágico que oferece uma vista deslumbrante da região. Com a mesma altura de Gramado, o local é um convite aos amantes da natureza que buscam se conectar com as belezas do mundo ao seu redor. O esforço é recompensado quando se chega ao topo do morro e se é presenteado com um dos mais belos espetáculos da natureza: o por do sol. As cores do céu se misturam em um caleidoscópio de tons, enquanto o sol se despede lentamente do dia, tingindo as nuvens de tons dourados e avermelhados.</p>
            <div className='turismo-img'>
              <img src={MorroGrande} alt='morro grande'/>
              <h4>Morro Grande</h4>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default turismo