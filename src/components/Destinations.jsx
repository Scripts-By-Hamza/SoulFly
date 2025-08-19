import React from 'react'
import './Destinations.css'
import istanbul from '../assets/istanbul.webp'
import sydney from '../assets/sydney.webp'
import baku from '../assets/baku.webp'
import maldives from '../assets/male.webp'
import paris from '../assets/paris.webp'
import newyork from '../assets/newyork.webp'
import london from '../assets/london.webp'
import tokyo from '../assets/tokyo.webp'
import dubai from '../assets/dubai.webp'

const Destinations = () => {
  const destinations = [
    { name: 'Istanbul, Turkey', services: 'Flights•Hotels•Resorts', image: istanbul },
    { name: 'Sydney, Australia', services: 'Flights•Hotels•Resorts', image: sydney },
    { name: 'Baku, Azerbaijan', services: 'Flights•Hotels•Resorts', image: baku },
    { name: 'Malé, Maldives', services: 'Flights•Hotels•Resorts', image: maldives },
    { name: 'Paris, France', services: 'Flights•Hotels•Resorts', image: paris },
    { name: 'New York, US', services: 'Flights•Hotels•Resorts', image: newyork },
    { name: 'London, UK', services: 'Flights•Hotels•Resorts', image: london },
    { name: 'Tokyo, Japan', services: 'Flights•Hotels•Resorts', image: tokyo },
    { name: 'Dubai, UAE', services: 'Flights•Hotels•Resorts', image: dubai }
  ]

  return (
    <section className="destinations">
      <div className="container">
        <div className="section-header">
          <h2>Plan your perfect trip</h2>
          <p>Search Flights & Places Hire to our most popular destinations</p>
          <button className="see-more-btn">See more places</button>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} loading="lazy" />
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p>{destination.services}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
