import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/confirmed-booking.css';

function ConfirmedBooking() {
  return (
    <main className="confirmed-booking">
      <section className="confirmation-container">
        <div className="confirmation-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1>Booking Confirmed!</h1>
        <p className="confirmation-message">
          Thank you for choosing Little Lemon. Your reservation has been successfully confirmed.
        </p>
        <p className="confirmation-details">
          A confirmation email has been sent to your email address with all the details of your reservation.
        </p>
        <div className="confirmation-actions">
          <Link to="/" className="btn-home">Return to Home</Link>
          <Link to="/booking" className="btn-new-booking">Make Another Reservation</Link>
        </div>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
