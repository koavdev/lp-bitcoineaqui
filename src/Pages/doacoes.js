import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const doacoes = () => {
  return (
    <div>
        <Navbar/>
        <div className='page-container' style={{border: '1px solid red'}}>
        <h1>doacoes</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default doacoes