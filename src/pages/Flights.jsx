import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Flights.css'
import FlightHero from '../components/flightHero'
import Bookingflight from '../components/Bookingflight'
import FallIntoTravel from '../components/FallIntoTravel'
import Bookingtour from '../components/Bookingtour'

const Flights = () => {
  return (
    <div className="flights-page">
      <Header />
      <FlightHero />
      <Bookingflight />
      <FallIntoTravel />
      <Bookingtour />
      <Footer />
    </div>
  )
}

export default Flights
