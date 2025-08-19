import React from 'react'
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      title: "A real sense of community, nurtured",
      content: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      author: "Olga",
      location: "Weave Studios - Kai Tak",
      rating: 5
    },
    {
      title: "The facilities are superb. Clean, slick, bright.",
      content: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed. Really appreciate the help and support from the staff during these tough times.",
      author: "Olga",
      location: "Weave Studios - Olympic",
      rating: 5
    },
    {
      title: "A real sense of community, nurtured",
      content: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      author: "Olga",
      location: "Weave Studios - Kai Tak",
      rating: 5
    }
  ]

  return (
    <section className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>Reviews</h2>
          <p>What people says about Golobe facilities</p>
          <button className="see-all-btn">See All</button>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <h3>"{review.title}"</h3>
              <p className="review-content">{review.content}</p>
              <button className="view-more-btn">View more</button>
              <div className="review-author">
                <div className="author-avatar">
                  <img src={`https://via.placeholder.com/50x50/8DD3BB/ffffff?text=${review.author[0]}`} alt={review.author} />
                </div>
                <div className="author-info">
                  <h4>{review.author}</h4>
                  <p>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
