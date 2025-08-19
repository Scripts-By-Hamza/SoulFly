import React from 'react'
import './Hero.css'
import headerBgHome from '../assets/header-bg-home.jpg'

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${headerBgHome})` }}>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Helping Others</span>
          <h1 className="hero-title">Live & Travel</h1>
          <p className="hero-description">Special offers to suit your plan</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
