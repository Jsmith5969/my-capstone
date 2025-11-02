import React from 'react';
import About from '../components/About';

function AboutPage() {
  return (
    <main className="about-page">
      <About />
      <section className="extended-about">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Little Lemon has been serving authentic Mediterranean cuisine for over 20 years. 
            Founded by Adrian and Mario, our restaurant brings the flavors of the Mediterranean 
            coast directly to your table.
          </p>
          <p>
            We pride ourselves on using only the freshest ingredients, sourced locally when 
            possible, and preparing every dish with the care and attention it deserves.
          </p>
          
          <h2>Our Chefs</h2>
          <p>
            Our culinary team is led by Executive Chef Maria Gonzalez, who brings over 15 years 
            of experience in Mediterranean cuisine. Chef Maria trained in some of the finest 
            restaurants across Greece, Italy, and Spain.
          </p>
          
          <h2>Awards &amp; Recognition</h2>
          <ul>
            <li>🏆 Best Mediterranean Restaurant 2025</li>
            <li>🍷 Wine Spectator Award of Excellence</li>
            <li>⭐ TripAdvisor Travelers' Choice Award</li>
            <li>📰 Local Food &amp; Wine Magazine - Restaurant of the Year</li>
          </ul>
          
          <h2>Visit Us</h2>
          <div className="location-info">
            <address className="address">
              <h3>📍 Location</h3>
              <p>123 Mediterranean Ave<br />
                 Chicago, IL 60601<br />
                 United States</p>
            </address>
            <div className="hours">
              <h3>🕒 Hours</h3>
              <p>Monday - Thursday: 11:00 AM - 10:00 PM<br />
                 Friday - Saturday: 11:00 AM - 11:00 PM<br />
                 Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;