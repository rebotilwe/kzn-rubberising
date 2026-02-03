// Header.jsx - Improved Version
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // WhatsApp message template
  const whatsappMessage = `Hello KZN Rubberising! I'm interested in your services. Please contact me.`;
  const whatsappLink = `https://wa.me/27311234567?text=${encodeURIComponent(whatsappMessage)}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        {/* Logo / Brand */}
        <a href="#home" className="logo">
          <div className="logo-icon">🛡️</div>
          <div className="logo-text">
            <span className="logo-kzn">KZN</span>
            <span className="logo-rubberising">Rubberising</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>

          {/* Contact Buttons Container */}
          <div className="contact-buttons">
            {/* Phone */}
            <a 
              href="tel:+27311234567" 
              className="nav-phone"
              aria-label="Call us"
            >
              <span className="btn-icon">📞</span>
              <span className="btn-text">Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <span className="btn-icon">💬</span>
              <span className="btn-text">WhatsApp</span>
            </a>

            {/* Get Quote */}
            <a href="#contact" className="btn-nav">
              Get Quote
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</a>
          
          <div className="mobile-contact-buttons">
            <a 
              href="tel:+27311234567" 
              className="mobile-phone"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mobile-icon">📞</span>
              Call Us
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mobile-icon">💬</span>
              WhatsApp
            </a>
            <a 
              href="#contact" 
              className="mobile-quote"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;