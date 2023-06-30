import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const comercio = () => {
  return (
    <div>
        <Navbar/>
        <div className='page-container' style={{border: '1px solid red'}}>
        <h1>comercio</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default comercio