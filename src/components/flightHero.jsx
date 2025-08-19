import React from 'react'
import './Hero.css'
import headerBgflight from '../assets/plane.jpeg'

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${headerBgflight})` }}>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Make your travel whishlist,</span>
          <h1 className="hero-title">We’ll do the rest</h1>
          <p className="hero-description">Special offers to suit your plan</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
