import React from 'react'
import './FallIntoTravel.css'
import paris from '../assets/paris.webp'
import london from '../assets/london.webp'
import dubai from '../assets/dubai.webp'
import newyork from '../assets/newyork.webp'

const cards = [
  { city: 'Melbourne', subtitle: 'An amazing journey', price: 700, img: newyork },
  { city: 'Paris', subtitle: 'A Paris Adventure', price: 600, img: paris },
  { city: 'London', subtitle: 'London eye adventure', price: 350, img: london },
  { city: 'Columbia', subtitle: 'Amazing streets', price: 700, img: dubai },
]

const FallIntoTravel = () => {
  return (
    <section className="fall-travel">
      <div className="container">
        <div className="fall-head">
          <div>
            <h2>Fall into travel</h2>
            <p>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
          </div>
          <button className="see-all">See all</button>
        </div>

        <div className="fall-grid">
          {cards.slice().reverse().map((c) => (
            <article key={c.city} className="fall-card">
              <div className="image-wrap">
                <img src={c.img} alt={c.city} loading="lazy" />
              </div>
              <div className="overlay">
                <div className="info">
                  <div>
                    <h3>{c.city}</h3>
                    <p>{c.subtitle}</p>
                  </div>
                  <div className="fall-price">$ {c.price}</div>
                </div>
                <button className="book">Book Hotel</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FallIntoTravel
