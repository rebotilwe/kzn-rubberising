// Footer.jsx
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo">
            <div className="logo-icon">🛡️</div>
            <div className="logo-text">
              <span className="logo-primary">KZN</span>
              <span className="logo-accent">Rubberising</span>
            </div>
          </div>

          <p className="brand-tagline">
            Professional protection solutions for industrial & commercial applications.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            {['📘', '💼', '📸'].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>


        {/* Services */}
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="links-title">Core Services</h4>

          <ul className="links-list">
            {[
              "Bin-Lining Solutions",
              "Rubberising Services", 
              "Industrial Flooring",
              "Maintenance Contracts"
            ].map((service) => (
              <li key={service}>
                <a href="#services" className="footer-link">
                  <span className="link-bullet">→</span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>


        {/* Industries */}
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="links-title">Key Industries</h4>

          <ul className="links-list">
            {[
              "Warehouses",
              "Construction",
              "Property Management",
              "Municipalities"
            ].map((industry) => (
              <li key={industry}>
                <a href="#industries" className="footer-link">
                  <span className="link-bullet">→</span>
                  {industry}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>


        {/* Contact */}
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="contact-title">Contact</h4>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <a href="tel:+27683035963" className="contact-link">
                 +27 68 303 5963
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <a
                href="https://wa.me/27683035963"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                WhatsApp Chat
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <a
                href="mailto:info@kznrubberising.co.za"
                className="contact-link"
              >
                info@kznrubberising.co.za
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span className="contact-text">
                Durban, KZN
              </span>
            </div>

          </div>

          {/* Emergency */}
          <div className="emergency-note">
            <span className="emergency-icon">⚡</span>
            <span>24/7 Emergency Service</span>
          </div>

        </motion.div>

      </div>


      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">

          <div className="copyright">
            © {currentYear} KZN Rubberising. All rights reserved.
            <br />
            Developed by{" "}
            <a
              href="https://afribizconnect.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-brand"
            >
              Afribiz Connect
            </a>
          </div>


          <motion.div 
            className="back-to-top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="back-text">Back to top</span>
            <span className="arrow-up">↑</span>
          </motion.div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
