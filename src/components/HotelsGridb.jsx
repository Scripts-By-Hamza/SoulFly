import React from 'react'
import './FallIntoTravel.css'
import columbia from '../assets/columbia.jpg'
import tokyo from '../assets/tokyo2.jpg'
import grandparis from '../assets/grandparis.jpg'
import londoneye from '../assets/londoneye.jpg'
import istanbul from '../assets/istanbulpalace.jpg'
import pchotel from '../assets/pchotel.jpg'


const cards = [
  { city: 'Tokyo Central', subtitle: 'rating: 4.8', price: 700, img: tokyo },
  { city: 'Columbia Stay', subtitle: 'rating: 4.4', price: 600, img: columbia },
  { city: 'Grand Paris Hotel', subtitle: 'rating: 4.6', price: 160, img: grandparis },
  { city: 'London Eye Inn', subtitle: 'rating: 4.4', price: 140, img: londoneye },
  { city: 'Istanbul Palace', subtitle: 'rating: 4.5', price: 130, img: istanbul },
  { city: 'PCHotel', subtitle: 'rating: 4.2', price: 120, img: pchotel },
]

const FallIntoTravel = () => {
  return (
    <section className="fall-travel">
      <div className="container">
        <div className="fall-head">
          <div>
            <h2>Popular stays</h2>
            <p>Handpicked places around the world that match your vibe.</p>
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
