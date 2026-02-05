// About.jsx - CLEAN MODERN VERSION
import "./About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        {/* Left Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-subtitle">Who We Are</span>
            {/* 🔥 REMOVED highlight span */}
            <h2>About KZN Rubberising</h2>
            {/* 🔥 REMOVED title-underline */}
          </div>

          <p className="about-description">
            KZN Rubberising is a professional service provider specializing in 
            {/* 🔥 REMOVED highlight-text spans */}
            bin-lining, rubberising, and surface protection solutions 
            for industrial, commercial, and residential clients across KwaZulu-Natal.
          </p>

          <p className="about-mission">
            Our mission is to deliver <strong>durable, waterproof, and long-lasting </strong> 
            protection solutions that safeguard your assets, reduce maintenance costs, 
            and extend operational lifespan.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div>
                <h4>Premium Protection</h4>
                <p>Industry-leading materials and techniques</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div>
                <h4>Quick Turnaround</h4>
                <p>Minimal disruption to your operations</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">👷</div>
              <div>
                <h4>Expert Technicians</h4>
                <p>Certified professionals with 10+ years experience</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <div>
                <h4>Scheduled Maintenance</h4>
                <p>Contract-based servicing for peace of mind</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="stats-header">
            {/* 🔥 REMOVED highlight span */}
            <h3>Our Track Record</h3>
            <p>Proven results across KwaZulu-Natal</p>
          </div>

          <div className="stats-grid">
            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">📅</div>
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Years Experience</p>
            </motion.div>

            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">✅</div>
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Projects Completed</p>
            </motion.div>

            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">😊</div>
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Happy Clients</p>
            </motion.div>

            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🕒</div>
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Emergency Support</p>
            </motion.div>
          </div>

          <div className="stats-cta">
            <p className="cta-text">
              <strong>Need reliable protection?</strong>
            </p>
            <a href="#contact" className="btn-outline">
              Get Your Free Quote →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
