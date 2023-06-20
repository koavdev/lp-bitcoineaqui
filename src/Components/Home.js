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
                    Bitcoin É Aqui
                </h1>
                <p className='primary-text'>
                Seja muito bem-vindo à <strong>Rolante/RS</strong>, a cidade mais Bitcoiner da América Latina!
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