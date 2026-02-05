// Hero.jsx - CLEAN MODERN VERSION
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
        {/* MAIN HEADING - NO SPANS */}
        <h1>
          Professional Bin-Lining <br />
          & Rubberising Services
        </h1>

        {/* TYPEWRITER */}
        <div className="typewriter-container">
          <h2 className="typewriter-text">{text}</h2>
          <span className="cursor">|</span>
        </div>

        {/* DESCRIPTION */}
        <p className="hero-description">
          Protecting your assets with durable, waterproof, and reliable solutions
          across KwaZulu-Natal.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
          </a>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          {[
            { number: "500+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "10+", label: "Years Exp" },
            { number: "24/7", label: "Support" }
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
