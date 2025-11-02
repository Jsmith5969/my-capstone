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
    <main className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <p className="booking-intro">Book your table at Little Lemon and experience authentic Mediterranean cuisine in the heart of Chicago.</p>
        
        <BookingForm availableTimes={availableTimes} submitForm={handleFormSubmit} />

        {bookingData.length > 0 && (
          <div className="bookings-table-container">
            <h2>Current Reservations</h2>
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Occasion</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.firstName} {booking.lastName}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.occasion}</td>
                    <td>
                      <div>{booking.email}</div>
                      <div>{booking.phone}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

export default BookingPage;