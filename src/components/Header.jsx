import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="brand-link" aria-label="SOULFLY home">
            <h2>SOULFLY</h2>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/flights" className="nav-link">Find Flights</Link>
          <Link to="/hotels" className="nav-link">Find Hotels</Link>
        </nav>

        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign up</button>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
