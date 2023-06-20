import React from 'react'
import AlCapone from '../Assets/AlCapone.png'
import Bennato from '../Assets/Bennato.png'
import Hospital from '../Assets/Hospital.png'
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';

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
  ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'> Comércio </p>
            <h1 className='primary-heading'>Onde Aceita Bitcoin?</h1>
        </div>
        <div className='work-section-bottom'>
            {estabelecimentos.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p><AiFillPhone /> {data.phone}</p>
                    <p><AiFillInstagram />{data.url}</p>
                </div>
            ))}
            
            <button className='secondary-button'>Ver mais <FiArrowRight /></button>
        </div>
        
    </div>
  )
}

export default Mapa