// Hero.jsx
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
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Professional <span className="highlight">Bin-Lining</span> <br />
          & <span className="highlight">Rubberising</span> Services
        </h1>

        <div className="typewriter-container">
          <h2 className="typewriter-text">{text}</h2>
          <span className="cursor">|</span>
        </div>

        <p className="hero-description">
          Protecting your assets with durable, waterproof, and reliable solutions
          across KwaZulu-Natal.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
          </a>
        </div>

        {/* Stats Preview */}
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