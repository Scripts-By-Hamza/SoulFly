import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hotelhero from '../components/Hotelhero'
import Bookinghotel from '../components/Bookinghotel'
import HotelsGridb from '../components/HotelsGridb'
import './Hotels.css'
import Bookingtour from '../components/Bookingtour'

const Hotels = () => {
  return (
    <div className="hotels-page">
      <Header />
      <Hotelhero />
      <Bookinghotel />
      <HotelsGridb />
      <Bookingtour />
      <Footer />
    </div>
  )
}

export default Hotels
