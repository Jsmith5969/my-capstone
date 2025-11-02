import React from 'react';
import ReservationDropdown from './ReservationDropdown';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <ReservationDropdown />
      </div>
      <div className="hero-image">
        <img src="/images/restaurant-food.jpg" alt="Mediterranean dish" />
      </div>
    </section>
  );
}

export default Hero;