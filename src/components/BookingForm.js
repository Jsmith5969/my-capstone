import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    occasion: 'Birthday',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name || name.trim().length < 2) {
      return 'Must be at least 2 characters';
    }
    if (name.length > 50) {
      return 'Must be less than 50 characters';
    }
    if (!/^[A-Za-z\s\-']+$/.test(name)) {
      return 'Only letters, spaces, hyphens, and apostrophes allowed';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    }
    if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone) {
      return 'Phone number is required';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (digitsOnly.length > 20) {
      return 'Phone number is too long';
    }
    if (!/^[\d\s\-\(\)\+]+$/.test(phone)) {
      return 'Please enter a valid phone number';
    }
    return '';
  };

  const validateDate = (date) => {
    if (!date) {
      return 'Date is required';
    }
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return 'Cannot select a past date';
    }
    
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    if (selectedDate > maxDate) {
      return 'Cannot book more than 3 months in advance';
    }
    return '';
  };

  const validateTime = (time) => {
    if (!time) {
      return 'Time is required';
    }
    return '';
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {
      firstName: validateName(formData.firstName),
      lastName: validateName(formData.lastName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      date: validateDate(formData.date),
      time: validateTime(formData.time)
    };

    setErrors(newErrors);

    // Check if form is valid (no errors)
    const isValid = Object.values(newErrors).every(error => error === '');
    setIsFormValid(isValid);
    
    return isValid;
  };

  // Validate on field change
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      date: true,
      time: true
    });

    // Validate before submission
    if (validateForm()) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" aria-labelledby="booking-title">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-z\s\-']+"
            title="Please enter a valid first name (letters, spaces, hyphens, and apostrophes only)"
            className={touched.firstName && errors.firstName ? 'error' : ''}
            aria-invalid={touched.firstName && errors.firstName ? 'true' : 'false'}
            aria-describedby={touched.firstName && errors.firstName ? 'firstName-error' : undefined}
          />
          {touched.firstName && errors.firstName && (
            <span id="firstName-error" className="error-message" role="alert">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-z\s\-']+"
            title="Please enter a valid last name (letters, spaces, hyphens, and apostrophes only)"
            className={touched.lastName && errors.lastName ? 'error' : ''}
            aria-invalid={touched.lastName && errors.lastName ? 'true' : 'false'}
            aria-describedby={touched.lastName && errors.lastName ? 'lastName-error' : undefined}
          />
          {touched.lastName && errors.lastName && (
            <span id="lastName-error" className="error-message" role="alert">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Please enter a valid email address (e.g., user@example.com)"
            maxLength={100}
            className={touched.email && errors.email ? 'error' : ''}
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="email-error" className="error-message" role="alert">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            pattern="[\d\s\-\(\)\+]+"
            minLength={10}
            maxLength={20}
            title="Please enter a valid phone number (10-20 digits, may include spaces, dashes, parentheses, or +)"
            placeholder="(123) 456-7890"
            className={touched.phone && errors.phone ? 'error' : ''}
            aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
            aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
          />
          {touched.phone && errors.phone && (
            <span id="phone-error" className="error-message" role="alert">{errors.phone}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Choose date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onBlur={handleBlur}
            min={new Date().toISOString().split('T')[0]}
            max={(() => {
              const maxDate = new Date();
              maxDate.setMonth(maxDate.getMonth() + 3);
              return maxDate.toISOString().split('T')[0];
            })()}
            required
            title="Please select a date within the next 3 months"
            className={touched.date && errors.date ? 'error' : ''}
            aria-invalid={touched.date && errors.date ? 'true' : 'false'}
            aria-describedby={touched.date && errors.date ? 'date-error' : undefined}
          />
          {touched.date && errors.date && (
            <span id="date-error" className="error-message" role="alert">{errors.date}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose time *</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            title="Please select an available time slot"
            className={touched.time && errors.time ? 'error' : ''}
            aria-invalid={touched.time && errors.time ? 'true' : 'false'}
            aria-describedby={touched.time && errors.time ? 'time-error' : undefined}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {touched.time && errors.time && (
            <span id="time-error" className="error-message" role="alert">{errors.time}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="guests">Number of guests *</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            min={1}
            max={10}
            title="Please select number of guests (1-10)"
          >
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            title="Select the occasion for your reservation"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="specialRequests">Special Requests</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any dietary restrictions, accessibility needs, or special arrangements..."
          rows="4"
          maxLength={500}
          title="Enter any special requests (max 500 characters)"
        />
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={!isFormValid && Object.keys(touched).length > 0}
        aria-disabled={!isFormValid && Object.keys(touched).length > 0 ? 'true' : 'false'}
        aria-label="On Click: Confirm Reservation"
      >
        Confirm Reservation
      </button>
    </form>
  );
}

export default BookingForm;
