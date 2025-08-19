import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Booking from '../components/Booking'
import Destinations from '../components/Destinations'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import '../App.css'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Booking />
      <Destinations />
      <Services />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
