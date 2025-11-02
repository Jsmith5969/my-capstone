import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        {/* Logo from public/images folder */}
        <Link to="/" className="header-logo" aria-label="Little Lemon - Go to homepage">
          <img 
            src="/images/logo.svg" 
            alt="Little Lemon restaurant logo" 
            className="logo-image"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <h1 className="header-title" style={{display: 'none'}}>Little Lemon</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;