import React from 'react';
import ReservationDropdown from './ReservationDropdown';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">Little Lemon</h1>
        <p className="hero-subtitle" aria-label="Location">Chicago</p>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <ReservationDropdown />
      </div>
      <div className="hero-image">
        <img src="/images/restaurant-food.jpg" alt="Delicious Mediterranean dish featuring fresh ingredients" />
      </div>
    </section>
  );
}

export default Hero;