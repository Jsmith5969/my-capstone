import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { timesReducer, initialTimes } from './utils/timesUtils';
import './styles/typography.css';
import './styles/navigation.css';
import './styles/dropdown-nav.css';
import './styles/Hero.css';
import './styles/menu.css';
import './styles/About.css';
import './styles/images.css';
import './styles/dropdown-menu.css';
import './styles/reservation-dropdown.css';
import './styles/pages.css';
import './styles/confirmed-booking.css';

// Main component wrapper to use navigation
function MainContent() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  // Submit form function
  const submitForm = (formData) => {
    // Check if submitAPI exists, otherwise use mock implementation
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      
      // If submission is successful, navigate to confirmation page
      if (success) {
        navigate('/booking-confirmed');
      }
      
      return success;
    } else {
      // Mock implementation if API is not available
      console.log('Booking submitted (mock):', formData);
      navigate('/booking-confirmed');
      return true;
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;