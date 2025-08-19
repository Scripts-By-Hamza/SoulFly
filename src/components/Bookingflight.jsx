import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Booking.css'

const Booking = () => {
  const [activeTab, setActiveTab] = useState('flights') // 'flights' | 'stays'
  const [tripType, setTripType] = useState('oneway') // 'oneway' | 'round' | 'multi'
  const navigate = useNavigate()

  // Flights state
  const [fromCity, setFromCity] = useState('')
  const [fromAirport, setFromAirport] = useState('')
  const [toCity, setToCity] = useState('')
  const [toAirport, setToAirport] = useState('')
  const [departDate, setDepartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [cabin, setCabin] = useState('Economy')

  // Stays state
  const [destCity, setDestCity] = useState('')
  const [destCountry, setDestCountry] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [rooms, setRooms] = useState(1)
  const [guests, setGuests] = useState(1)

  const swapFromTo = () => {
    setFromCity(toCity)
    setFromAirport(toAirport)
    setToCity(fromCity)
    setToAirport(fromAirport)
  }

  const submitFlights = (e) => {
    e.preventDefault()
    if (!fromCity || !toCity || !departDate) {
      alert('Please fill From, To and Depart date')
      return
    }
    if (tripType === 'round' && !returnDate) {
      alert('Please select Return date for Round Trip')
      return
    }
    const payload = { tripType, fromCity, fromAirport, toCity, toAirport, departDate, returnDate, passengers, cabin }
    console.log('Search Flights:', payload)
    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      depart: departDate,
      pax: String(passengers),
      cabin,
      type: tripType,
      ...(returnDate ? { return: returnDate } : {}),
    })
    navigate(`/flights?${params.toString()}`)
  }

  const submitStays = (e) => {
    e.preventDefault()
    if (!destCity || !checkIn || !checkOut) {
      alert('Please fill Destination, Check In and Check Out')
      return
    }
    const payload = { destCity, destCountry, checkIn, checkOut, rooms, guests }
    console.log('Search Stays:', payload)
    // For now, keep user on home; could navigate to /hotels similarly
    alert('Searching stays...\n' + JSON.stringify(payload, null, 2))
  }

  return (
    <section className="booking">
      <div className="container">
        <div className="booking-card">
          <div className="booking-body">
          <span className="label">Where are you flying?</span>
            {activeTab === 'flights' && (
              <form onSubmit={submitFlights}>
                <div className="trip-type">
                  <span className="label">Trip Type</span>
                  <label className="radio">
                    <input type="radio" name="trip" checked={tripType==='oneway'} onChange={() => setTripType('oneway')} />
                    <span>One Way</span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="trip" checked={tripType==='round'} onChange={() => setTripType('round')} />
                    <span>Round Trip</span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="trip" checked={tripType==='multi'} onChange={() => setTripType('multi')} />
                    <span>Multi City</span>
                  </label>
                </div>

                <div className="booking-grid">
                  {/* From - To */}
                  <div className="field fromto">
                    <label className="field-label">From - to *</label>
                    <div className="fromto-wrap">
                      <div className="from stack">
                        <input className="input-title" type="text" placeholder="City" value={fromCity} onChange={(e)=>setFromCity(e.target.value)} />
                        <input className="input-sub" type="text" placeholder="Airport name" value={fromAirport} onChange={(e)=>setFromAirport(e.target.value)} />
                      </div>
                      <button type="button" className="swap" onClick={swapFromTo} title="Swap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h9l-2.5-2.5L15 3l5 5-5 5-1.5-1.5L16 9H7V7Zm10 10H8l2.5 2.5L9 21l-5-5 5-5 1.5 1.5L8 15h9v2Z"/></svg>
                      </button>
                      <div className="to stack">
                        <input className="input-title" type="text" placeholder="City" value={toCity} onChange={(e)=>setToCity(e.target.value)} />
                        <input className="input-sub" type="text" placeholder="Airport name" value={toAirport} onChange={(e)=>setToAirport(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  {/* Depart */}
                  <div className="field">
                    <label className="field-label">Depart *</label>
                    <div className="input-like stack">
                      <input className="input-title" type="date" value={departDate} onChange={(e)=>setDepartDate(e.target.value)} />
                    </div>
                  </div>

                  {/* Return */}
                  <div className="field">
                    <label className="field-label">Return</label>
                    <div className="input-like stack">
                      <input className="input-title" type="date" value={returnDate} onChange={(e)=>setReturnDate(e.target.value)} disabled={tripType==='oneway'} />
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="field">
                    <label className="field-label">Passengers • Class *</label>
                    <div className="input-like split">
                      <input className="input-title" type="number" min="1" value={passengers} onChange={(e)=>setPassengers(parseInt(e.target.value||'1',10))} />
                      <select className="input-title" value={cabin} onChange={(e)=>setCabin(e.target.value)}>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First</option>
                      </select>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="cta">
                    <button className="btn-primary" type="submit">
                      <span className="send-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21 23 12 2 3v7l15 2-15 2v7Z"/></svg>
                      </span>
                      Show Flights
                    </button>
                  </div>
                </div>
              </form>
            )}

            {activeTab === 'stays' && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
