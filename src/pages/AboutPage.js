import React from 'react';
import About from '../components/About';

function AboutPage() {
  return (
    <main id="main-content" className="about-page" role="main" aria-labelledby="about-page-title">
      <h1 id="about-page-title" className="sr-only">About Little Lemon</h1>
      <About />
      <section className="extended-about" aria-labelledby="our-story-title">
        <div className="container">
          <h2 id="our-story-title">Our Story</h2>
          <p>
            Little Lemon has been serving authentic Mediterranean cuisine for over 20 years. 
            Founded by Adrian and Mario, our restaurant brings the flavors of the Mediterranean 
            coast directly to your table.
          </p>
          <p>
            We pride ourselves on using only the freshest ingredients, sourced locally when 
            possible, and preparing every dish with the care and attention it deserves.
          </p>
          
          <h2 id="our-chefs-title">Our Chefs</h2>
          <p>
            Our culinary team is led by Executive Chef Maria Gonzalez, who brings over 15 years 
            of experience in Mediterranean cuisine. Chef Maria trained in some of the finest 
            restaurants across Greece, Italy, and Spain.
          </p>
          
          <h2 id="awards-title">Awards &amp; Recognition</h2>
          <ul role="list" aria-labelledby="awards-title">
            <li><span aria-hidden="true">🏆</span> Best Mediterranean Restaurant 2025</li>
            <li><span aria-hidden="true">🍷</span> Wine Spectator Award of Excellence</li>
            <li><span aria-hidden="true">⭐</span> TripAdvisor Travelers' Choice Award</li>
            <li><span aria-hidden="true">📰</span> Local Food &amp; Wine Magazine - Restaurant of the Year</li>
          </ul>
          
          <h2 id="visit-us-title">Visit Us</h2>
          <div className="location-info">
            <address className="address">
              <h3><span aria-hidden="true">📍</span> Location</h3>
              <p>123 Mediterranean Ave<br />
                 Chicago, IL 60601<br />
                 United States</p>
            </address>
            <div className="hours">
              <h3><span aria-hidden="true">🕒</span> <span id="hours-title">Hours</span></h3>
              <dl aria-labelledby="hours-title">
                <dt>Monday - Thursday:</dt>
                <dd>11:00 AM - 10:00 PM</dd>
                <dt>Friday - Saturday:</dt>
                <dd>11:00 AM - 11:00 PM</dd>
                <dt>Sunday:</dt>
                <dd>12:00 PM - 9:00 PM</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;