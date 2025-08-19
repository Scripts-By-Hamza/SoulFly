import React, { useState } from 'react'
import './Booking.css'

const Bookinghotel = () => {
  const [destCity, setDestCity] = useState('')
  const [destCountry, setDestCountry] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [rooms, setRooms] = useState(1)
  const [guests, setGuests] = useState(1)

  const submitStays = (e) => {
    e.preventDefault()
    if (!destCity || !checkIn || !checkOut) {
      alert('Please fill Destination, Check In and Check Out')
      return
    }
    const payload = { destCity, destCountry, checkIn, checkOut, rooms, guests }
    console.log('Search Stays:', payload)
    alert('Searching stays...\n' + JSON.stringify(payload, null, 2))
  }

  return (
    <section className="booking">
      <div className="container">
        <div className="booking-card">
          <div className="booking-body">
            <span className="label">Where are you staying?</span>
            <form onSubmit={submitStays} className="booking-grid stays">
              {/* Destination */}
              <div className="field destination">
                <label className="field-label">Enter Destination *</label>
                <div className="input-like stack">
                  <input className="input-title" type="text" placeholder="City" value={destCity} onChange={(e)=>setDestCity(e.target.value)} />
                  <input className="input-sub" type="text" placeholder="Country" value={destCountry} onChange={(e)=>setDestCountry(e.target.value)} />
                </div>
              </div>

              {/* Check-in */}
              <div className="field">
                <label className="field-label">Check In *</label>
                <div className="input-like stack">
                  <input className="input-title" type="date" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} />
                </div>
              </div>

              {/* Check-out */}
              <div className="field">
                <label className="field-label">Check Out *</label>
                <div className="input-like stack">
                  <input className="input-title" type="date" value={checkOut} onChange={(e)=>setCheckOut(e.target.value)} />
                </div>
              </div>

              {/* Rooms & Guests */}
              <div className="field">
                <label className="field-label">Rooms • Guests *</label>
                <div className="input-like split">
                  <input className="input-title" type="number" min="1" value={rooms} onChange={(e)=>setRooms(parseInt(e.target.value||'1',10))} />
                  <input className="input-title" type="number" min="1" value={guests} onChange={(e)=>setGuests(parseInt(e.target.value||'1',10))} />
                </div>
              </div>

              {/* CTA */}
              <div className="cta">
                <button className="btn-primary" type="submit">
                  <span className="send-icon" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21 23 12 2 3v7l15 2-15 2v7Z"/></svg>
                  </span>
                  Show Places
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bookinghotel
