import React from 'react';
import '../styles/navigation.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo from public/images folder */}
        <div className="header-logo">
          <img 
            src="/images/logo.svg" 
            alt="Little Lemon Logo" 
            className="logo-image"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <h1 className="header-title" style={{display: 'none'}}>Little Lemon</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;