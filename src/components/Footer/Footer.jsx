import "./Footer.css";
import { motion } from "framer-motion";
import Logo from "../../assets/images/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: "📘", label: "Facebook", url: "#" },
    { icon: "💼", label: "LinkedIn", url: "#" },
    { icon: "📸", label: "Instagram", url: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#home" className="logo">
            <img
              src={Logo}
              alt="KZN Rubber Logo"
              className="logo-icon"
            />
            <div className="logo-text">
              <span className="logo-primary">KZN</span>
              <span className="logo-accent">Rubber</span>
            </div>
          </a>
        </motion.div>

        {/* Brand Section */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="brand-tagline">
            Professional protection solutions for industrial & commercial applications across KwaZulu-Natal.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social-icon"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="links-title">Core Services</h4>

          <ul className="links-list">
            {[
              "Bin-Lining Solutions",
              "Rubberising Services",
              "Industrial Flooring",
              "Maintenance Contracts",
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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="links-title">Key Industries</h4>

          <ul className="links-list">
            {[
              "Warehouses",
              "Construction",
              "Property Management",
              "Municipalities",
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="contact-title">Contact</h4>

          <div className="contact-details">

            {/* Phone 1 */}
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <a href="tel:+27683035963" className="contact-link">
                +27 68 303 5963
              </a>
            </div>

            {/* Phone 2 */}
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <a href="tel:+27813142095" className="contact-link">
                +27 81 314 2095
              </a>
            </div>

            {/* WhatsApp */}
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

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <a
                href="mailto:info@kznrubber.co.za"
                className="contact-link"
              >
                info@kznrubber.co.za
              </a>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span className="contact-text">
                Durban, KwaZulu-Natal
              </span>
            </div>

            {/* Working Hours */}
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <span className="contact-text">
                Mon-Fri: 7AM - 5PM
                <br />
                Sat: 8AM - 1PM
              </span>
            </div>

          </div>

          {/* Emergency Note */}
          <div className="emergency-note">
            <span className="emergency-icon">⚡</span>
            <span>24/7 Emergency Service Available</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">

          <div className="copyright">
            © {currentYear} KZN Rubber. All rights reserved.
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

            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms" className="legal-link">Terms of Service</a>
            </div>
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
