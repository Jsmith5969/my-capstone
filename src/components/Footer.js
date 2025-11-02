import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <section className="footer-section" aria-labelledby="footer-about">
            <h3 id="footer-about" className="footer-title">Little Lemon</h3>
            <p className="footer-description">
              A family-owned Mediterranean restaurant serving traditional recipes with a modern twist.
            </p>
          </section>
          
          <section className="footer-section" aria-labelledby="footer-contact">
            <h4 id="footer-contact" className="footer-heading">Contact Info</h4>
            <address className="contact-info">
              <p><span aria-hidden="true">📍</span> <span className="sr-only">Address:</span>123 Mediterranean Ave</p>
              <p><span aria-hidden="true">📍</span> Chicago, IL 60614</p>
              <p><span aria-hidden="true">📞</span> <a href="tel:+13125550123" aria-label="Phone number">(312) 555-0123</a></p>
              <p><span aria-hidden="true">✉️</span> <a href="mailto:info@littlelemon.com" aria-label="Email address">info@littlelemon.com</a></p>
            </address>
          </section>
          
          <section className="footer-section" aria-labelledby="footer-social">
            <h4 id="footer-social" className="footer-heading">Follow Us</h4>
            <nav className="social-links" aria-label="Social media">
              <a href="https://facebook.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <span className="social-icon" aria-hidden="true">📘</span>
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://instagram.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <span className="social-icon" aria-hidden="true">📷</span>
                <span className="social-name">Instagram</span>
              </a>
              <a href="https://twitter.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <span className="social-icon" aria-hidden="true">🐦</span>
                <span className="social-name">Twitter</span>
              </a>
            </nav>
          </section>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            <small>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</small>
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="separator" aria-hidden="true">|</span>
            <a href="#terms" className="legal-link">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;