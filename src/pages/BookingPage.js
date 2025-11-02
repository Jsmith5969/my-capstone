import React, { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import { readFromLocalStorage, writeToLocalStorage } from '../utils/localStorage';

function BookingPage({ availableTimes, submitForm }) {
  // Initialize state from local storage
  const [bookingData, setBookingData] = useState(() => readFromLocalStorage());

  // Save to local storage whenever bookingData changes
  useEffect(() => {
    writeToLocalStorage(bookingData);
  }, [bookingData]);

  // Wrapper function to handle form submission
  const handleFormSubmit = (formData) => {
    // Submit the form using the submitForm function
    const success = submitForm(formData);
    
    // If submission is successful, add to local bookingData array
    if (success) {
      const newBooking = {
        id: Date.now(),
        ...formData
      };
      setBookingData([...bookingData, newBooking]);
      
      console.log('Booking submitted successfully:', formData);
    } else {
      console.error('Booking submission failed');
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <main id="main-content" className="booking-page" role="main" aria-labelledby="booking-page-title">
      <div className="container">
        <h1 id="booking-page-title">Reserve a Table</h1>
        <p className="booking-intro">Book your table at Little Lemon and experience authentic Mediterranean cuisine in the heart of Chicago.</p>
        
        <BookingForm availableTimes={availableTimes} submitForm={handleFormSubmit} />

        {bookingData.length > 0 && (
          <section className="bookings-table-container" aria-labelledby="reservations-title">
            <h2 id="reservations-title">Current Reservations</h2>
            <table className="bookings-table" role="table" aria-label="List of current reservations">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Guests</th>
                  <th scope="col">Occasion</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.firstName} {booking.lastName}</td>
                    <td><time dateTime={booking.date}>{booking.date}</time></td>
                    <td><time>{booking.time}</time></td>
                    <td>{booking.guests}</td>
                    <td>{booking.occasion}</td>
                    <td>
                      <div><a href={`mailto:${booking.email}`}>{booking.email}</a></div>
                      <div><a href={`tel:${booking.phone.replace(/\D/g, '')}`}>{booking.phone}</a></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </main>
  );
}

export default BookingPage;