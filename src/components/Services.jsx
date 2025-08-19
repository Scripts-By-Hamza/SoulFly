import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import flights from '../assets/plane.jpeg'
import hotel from '../assets/hotel.jfif'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src={flights} alt="Flights" loading="lazy" />
              <div className="service-overlay">
                <h3>Flights</h3>
                <p>Search Flights & Places Hire to our most popular destinations</p>
                <Link to="/flights" className="service-btn">Find Flights</Link>
              </div>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src={hotel} alt="Hotels" loading="lazy" />
              <div className="service-overlay">
                <h3>Hotels</h3>
                <p>Search Flights & Places Hire to our most popular destinations</p>
                <Link to="/hotels" className="service-btn">Find Hotels</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
