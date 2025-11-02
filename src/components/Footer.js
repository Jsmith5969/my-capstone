import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Little Lemon</h3>
            <p className="footer-description">
              A family-owned Mediterranean restaurant serving traditional recipes with a modern twist.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Mediterranean Ave</p>
              <p>📍 Chicago, IL 60614</p>
              <p>📞 (312) 555-0123</p>
              <p>✉️ info@littlelemon.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📘</span>
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://instagram.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📷</span>
                <span className="social-name">Instagram</span>
              </a>
              <a href="https://twitter.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">🐦</span>
                <span className="social-name">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;