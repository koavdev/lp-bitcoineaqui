import React from 'react'
import AlCapone from '../Assets/AlCapone.png'
import Bennato from '../Assets/Bennato.png'
import Hospital from '../Assets/Hospital.png'
import Cafe from '../Assets/Cafe.jpg'
import Cervejaria from '../Assets/Cervejaria.png'
import Arquitetura from '../Assets/Arquitetura.jpg'
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import Slider from "react-slick/lib/slider";

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    initialSlide: 0,

  };

const Mapa = () => {
  

  const estabelecimentos = [
    {
        image: AlCapone,
        title: "Pizzaria Al Capone",
        phone: "51985160119",
        url: "@alcaponepizzaexpress",
    },
    {
        image: Bennato,
        title: "Vinícola Bennato",
        phone: "5195958882",
        url: "@vinicola_bennato",
    },
    {
        image: Hospital,
        title: "Hospital de Rolante",
        phone: "5135471300",
        url: "@hospitalrolante",
    },
    {
        image: Arquitetura,
        title: "AMS Arquitetura e Interiores",
        phone: "51998229190	",
        url: "@ams.arquitetura",
    },
    {
        image: Cafe,
        title: "DoisZé Café Bistrô",
        phone: "5127471577",
        url: "@doiszecafebistro",
    },
    {
        image: Cervejaria,
        title: "Cervejaria DBuenas",
        phone: "51984590660",
        url: "@dbuenas_nanocervejaria",
    },
  ]
  return (
    <div id="Comercio" className='comercio-section-container'>
        <div className='comercio-section-top'>
            <p className='primary-subheading'> Comércio </p>
            <h1 className='primary-heading'>Onde Aceita Bitcoin?</h1>
        </div>
        <div className='comercio-section-bottom'>
            <Slider {...settings}>
                {estabelecimentos.map((data) => (
                    <div className='comercio-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="points of sale" />
                        </div>
                        <h2>{data.title}</h2>
                        <p><AiFillPhone /> {data.phone}</p>
                        <p><AiFillInstagram />{data.url}</p>
                    </div>            
                ))}
            </Slider>
            <div className='comercio-buttons-container'>
                <button className='secondary-button'>Ver todos <FiArrowRight /></button>
            </div>
        </div>
        
    </div>
  )
}

export default Mapa