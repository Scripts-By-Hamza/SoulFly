import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">SOULFLY</h3>
            <p className="footer-description">
              Your trusted travel companion for unforgettable adventures around the world.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.64-1.3 1.3V12h2.3l-.37 3h-1.9v7A10 10 0 0 0 22 12Z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 5.8c-.7.3-1.4.6-2.2.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.8 3.8 0 0 0 12 7.4c0 .3 0 .6.1.9-3.1-.1-5.8-1.6-7.6-3.8-.3.6-.5 1.3-.5 2 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.8 2.5 3.4 2.5A7.6 7.6 0 0 1 2 18.6 10.7 10.7 0 0 0 7.8 20c6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.4-1.2 1.8-2Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.8-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v8.5h-5V16c0-2.1 0-4.8-3-4.8-3 0-3.5 2.3-3.5 4.6V24h-5V8Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/flights">Find Flights</Link></li>
              <li><Link to="/hotels">Find Hotels</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/flights">Flight Booking</Link></li>
              <li><Link to="/hotels">Hotel Booking</Link></li>
              <li><a href="#packages">Travel Packages</a></li>
              <li><a href="#guides">Tour Guides</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SOULFLY. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
