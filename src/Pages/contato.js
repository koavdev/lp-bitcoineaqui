import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const contato = () => {
  return (
    <div>
        <Navbar/>
        <div className='page-container' style={{border: '1px solid red'}}>
        <h1>contato</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default contato