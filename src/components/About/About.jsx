// About.jsx - UPDATED with rubberising key aspects and removed 24/7
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
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-subtitle">Who We Are</span>
            <h2>True Seal Rubberising</h2>
          </div>

          <p className="about-description">
            True Seal Rubberising specializes in premium polyurea/polyurethane corrosion control coatings 
            and professional rubberising solutions. Unlike traditional plastic liners, our coatings adhere 
            directly to metal surfaces, preventing water from trapping underneath and eliminating rust.
          </p>

          <p className="about-mission">
            Our mission is to deliver <strong>durable, waterproof, and chemically resistant </strong> 
            protection solutions with industry-leading physical properties: <strong>5200 PSI tensile strength</strong>, 
            <strong>70-73 Shore D hardness</strong>, and superior impact resistance exceeding 40 in/lbs.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div>
                <h4>Chemical Barrier</h4>
                <p>Protection against chemicals, oils, fuels, and acids</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div>
                <h4>Impact Resistant</h4>
                <p>&gt;40 in/lbs · ASTM G-14 certified</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <div>
                <h4>Abrasion Resistance</h4>
                <p>110mg loss · ASTM D-4060</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <div>
                <h4>Warranty Options</h4>
                <p>1-year or 3-year professional warranties</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="stats-header">
            <h3>Technical Specifications</h3>
            <p>Tested to international standards</p>
          </div>

          <div className="stats-grid">
            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🔬</div>
              <h3 className="stat-number">5,200</h3>
              <p className="stat-label">PSI Tensile</p>
              <span className="stat-method">ASTM D-412</span>
            </motion.div>

            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">⚖️</div>
              <h3 className="stat-number">70-73</h3>
              <p className="stat-label">Shore D</p>
              <span className="stat-method">ASTM D-2240</span>
            </motion.div>

            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">💥</div>
              <h3 className="stat-number">40+</h3>
              <p className="stat-label">Impact in/lbs</p>
              <span className="stat-method">ASTM G-14</span>
            </motion.div>

            <motion.div 
              className="stat-box"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🔄</div>
              <h3 className="stat-number">3"</h3>
              <p className="stat-label">Mandrel Bend</p>
              <span className="stat-method">No cracking · ASTM D-522</span>
            </motion.div>
          </div>

          <div className="stats-cta">
            <p className="cta-text">
              <strong>Need industrial-grade protection?</strong>
            </p>
            <a href="#contact" className="btn-outline">
              Request Technical Data →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;