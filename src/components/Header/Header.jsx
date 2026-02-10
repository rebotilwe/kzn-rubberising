import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/logo1.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // WhatsApp message template
  const whatsappMessage = `Hello True Seal Rubberising! I'm interested in your services. Please contact me.`;
  const whatsappLink = `https://wa.me/27683035963?text=${encodeURIComponent(whatsappMessage)}`;

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for links (only for navigation links)
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link, .mobile-link");
    const headerHeight = 85;
    links.forEach((link) => {
      const handleClick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
        setMenuActive(false); // close mobile menu
      };
      link.addEventListener("click", handleClick);
      return () => link.removeEventListener("click", handleClick);
    });
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#hero" className="logo">
          <img src={logo} alt="Logo" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-kzn">True</span>
            <span className="logo-rubberising">Seal Rubberising</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          {/* Desktop Contact Buttons */}
          <div className="contact-buttons">
            <a href="tel:+27683035963" className="nav-phone">
              <span className="btn-icon">📞</span>
              <span className="btn-text">Call</span>
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-whatsapp"
            >
              <span className="btn-icon">💬</span>
              <span className="btn-text">WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`mobile-menu-btn ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle menu"
          aria-expanded={menuActive}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu - ONLY NAVIGATION LINKS */}
      <div className={`mobile-menu ${menuActive ? "active" : ""}`}>
        {/* Navigation Links Only */}
        <div className="mobile-nav-links">
          <a href="#about" className="mobile-link" onClick={() => setMenuActive(false)}>
            About
          </a>
          <a href="#services" className="mobile-link" onClick={() => setMenuActive(false)}>
            Services
          </a>
          <a href="#contact" className="mobile-link" onClick={() => setMenuActive(false)}>
            Contact
          </a>
        </div>

        {/* Icon-Only Contact Buttons */}
        <div className="mobile-contact-icons">
          <a 
            href="tel:+27683035963" 
            className="mobile-icon-btn mobile-icon-phone"
            aria-label="Call us"
            onClick={() => setMenuActive(false)}
          >
            <span className="icon">📞</span>
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-icon-btn mobile-icon-whatsapp"
            aria-label="Chat on WhatsApp"
            onClick={() => setMenuActive(false)}
          >
            <span className="icon">💬</span>
          </a>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {menuActive && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuActive(false)}
        />
      )}
    </header>
  );
};

export default Header;