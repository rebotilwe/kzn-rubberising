// Contact.jsx - CLEAN MODERN VERSION
import "./Contact.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Bin-Lining Solutions",
    "Rubberising Services",
    "Industrial Flooring",
    "Waterproofing",
    "Vehicle Protection",
    "Maintenance Contracts",
    "Other"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-container">
        {/* Left Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="info-header">
            <span className="section-subtitle">Get in Touch</span>
            {/* 🔥 REMOVED highlight span */}
            <h2>Request Your Free Quote</h2>
            {/* 🔥 REMOVED title-underline */}
          </div>

          <p className="info-description">
            Ready to protect your assets? Contact us for a free, no-obligation 
            quote tailored to your specific needs.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+27683035963" className="detail-link">
                  +27 68 303 5963
                </a>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:info@kznrubberising.co.za" className="detail-link">
                  info@kznrubberising.co.za
                </a>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p className="detail-text">Durban, KwaZulu-Natal, South Africa</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🕐</div>
              <div>
                <h4>Business Hours</h4>
                <p className="detail-text">
                  Mon-Fri: 8:00-17:00<br />
                  Sat: 8:00-13:00
                </p>
              </div>
            </div>
          </div>

          <div className="emergency-contact">
            <h4 className="emergency-title">🚨 Emergency Service?</h4>
            <p className="emergency-text">
              We offer 24/7 emergency services for urgent protection needs.
            </p>
            <a href="tel:+27683035963" className="btn-emergency">
              📞 Call Now: +27 68 303 5963
            </a>
          </div>
        </motion.div>

        {/* Form - UNCHANGED (already clean) */}
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-card">
            <h3 className="form-title">Get Your Quote</h3>
            
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">✓</div>
                <h4>Thank You!</h4>
                <p>We'll contact you within 24 hours.</p>
                <button 
                  className="btn-success"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 12 345 6789"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, location, timeline, and any specific requirements..."
                    rows="5"
                    required
                    className="form-textarea"
                  />
                </div>

                <div className="form-footer">
                  <p className="form-note">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Quote Request'
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
