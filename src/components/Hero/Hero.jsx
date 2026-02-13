// Hero.jsx - UPDATED (removed 24/7 from stats)
import "./Hero.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState('');
  const phrases = ["Protection.", "Durability.", "Reliability."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[currentIndex];
    
    if (text.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText('');
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);
    }
    
    return () => clearTimeout(timeout);
  }, [text, currentIndex]);

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Professional Bin-Lining <br />
          & Polyurea Rubberising
        </h1>

        <div className="typewriter-container">
          <h2 className="typewriter-text">{text}</h2>
          <span className="cursor">|</span>
        </div>

        <p className="hero-description">
          Advanced polyurethane corrosion control coatings and rubberising solutions 
          for industrial, commercial, and residential applications across KwaZulu-Natal.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
          </a>
        </div>

        <div className="hero-stats">
          {[
            { number: "500+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "10+", label: "Years Exp" },
            { number: "5,200", label: "PSI Strength" } // Replaced 24/7 with tensile strength
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;