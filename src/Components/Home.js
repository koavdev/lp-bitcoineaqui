import React from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from 'react-icons/fi';
import 'animate.css';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className='home-text-section' style={{marginTop:'30px'}}>
                <h1 className='primary-heading'>
                    Bem-vindo a Rolante/RS
                </h1>
                <p className='primary-text'>
                Um refúgio encantador e seguro, onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita. Imersa na deslumbrante Mata Atlântica, Rolante se orgulha de suas cachoeiras e cascatas, muitas ainda inexploradas, proporcionando uma experiência única aos visitantes.
                </p>
                <button className='secondary-button'>
                    Descubra mais <FiArrowRight />
                </button>
            </div>
            <div className='home-image-container'>
                <img className='animate__animated animate__slideInRight animate__slow' src={BannerImage} width='600px'/>
            </div> 
        </div>
    </div>
  )
}

export default Home