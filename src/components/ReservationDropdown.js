import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/reservation-dropdown.css';

function ReservationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const reservationOptions = [
    {
      title: 'Quick Reservation',
      description: 'Reserve a table for today',
      time: 'Next available slot',
      action: () => {
        closeDropdown();
        navigate('/booking');
      }
    },
    {
      title: 'Book for Tonight',
      description: 'Dinner reservation for this evening',
      time: '6:00 PM - 10:00 PM',
      action: () => {
        closeDropdown();
        navigate('/booking');
      }
    },
    {
      title: 'Weekend Booking',
      description: 'Reserve for this weekend',
      time: 'Saturday or Sunday',
      action: () => {
        closeDropdown();
        navigate('/booking');
      }
    },
    {
      title: 'Custom Reservation',
      description: 'Choose your own date and time',
      time: 'Pick any date',
      action: () => {
        closeDropdown();
        navigate('/booking');
      }
    },
    {
      title: 'Special Event',
      description: 'Birthday, anniversary, or celebration',
      time: 'Special arrangements',
      action: () => {
        closeDropdown();
        navigate('/booking');
      }
    }
  ];

  return (
    <div className="reservation-dropdown" ref={dropdownRef}>
      <button 
        className={`cta-button reservation-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        aria-label="Reserve a table"
        aria-expanded={isOpen}
      >
        Reserve a Table
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="reservation-dropdown-menu">
          <div className="dropdown-header">
            <h3>Choose Your Reservation</h3>
            <p>Select the best option for your dining experience</p>
          </div>
          
          <div className="reservation-options">
            {reservationOptions.map((option, index) => (
              <div
                key={index}
                className="reservation-option"
                onClick={option.action}
              >
                <div className="option-content">
                  <h4>{option.title}</h4>
                  <p className="option-description">{option.description}</p>
                  <span className="option-time">{option.time}</span>
                </div>
                <div className="option-arrow">→</div>
              </div>
            ))}
          </div>
          
          <div className="dropdown-footer">
            <p>Need help? Call us at (555) 123-4567</p>
          </div>
        </div>
      )}
      
      {isOpen && <div className="reservation-overlay" onClick={closeDropdown}></div>}
    </div>
  );
}

export default ReservationDropdown;