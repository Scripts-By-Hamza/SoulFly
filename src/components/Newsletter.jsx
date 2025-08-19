import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe Newsletter</h2>
          <p className="newsletter-subtitle">The Travel</p>
          <p className="newsletter-description">
            Get inspired! Receive travel discounts, tips and behind the scenes stories.
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
