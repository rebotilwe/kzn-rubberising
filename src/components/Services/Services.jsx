// Services.jsx - Complete Updated Version
import "./Services.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  const services = [
    {
      id: 1,
      title: "Bin-Lining Solutions",
      icon: "📦",
      description: "Professional leak-proof lining for bins, containers, vehicles, and storage units.",
      features: [
        "Leak Protection - Lines boxes and containers",
        "Vehicle Protection - Van canopies & load beds",
        "Storage Solutions - Shelves and cupboards",
        "Cold Room Applications - Low-temperature integrity",
        "Garden & Landscaping - Weed & soil collection",
        "Pet Care - Hygienic waste management"
      ],
      color: "blue",
      popular: true
    },
    {
      id: 2,
      title: "Rubberising Services",
      icon: "🛡️",
      description: "Durable rubber coating for industrial flooring, waterproofing, and protection.",
      features: [
        "Industrial Flooring - Slip-resistant surfaces",
        "Waterproofing - Roofs, gutters, tanks",
        "Noise Reduction - Sound dampening",
        "Vehicle Load Areas - Impact protection",
        "Marine & Outdoor - Weather resistance",
        "Maintenance - Surface restoration"
      ],
      color: "red",
      popular: false
    },
    {
      id: 3,
      title: "Maintenance & Support",
      icon: "🔧",
      description: "Ongoing service, inspections, and scheduled maintenance programs.",
      features: [
        "Scheduled Servicing - Contract-based",
        "Surface Repairs - Quick restoration",
        "Liner Replacement - Timely updates",
        "Emergency Support - 24/7 availability",
        "Quality Materials - Premium supplies",
        "Expert Technicians - Certified professionals"
      ],
      color: "dark-blue",
      popular: true
    }
  ];

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">What We Offer</span>
          <h2>Our <span className="highlight">Professional</span> Services</h2>
          <p className="section-description">
            Premium protection solutions for industrial, commercial, and residential applications across KwaZulu-Natal
          </p>
          <div className="title-underline"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card service-${service.color}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="popular-badge">
                  <span className="badge-icon">🔥</span>
                  <span className="badge-text">Most Popular</span>
                </div>
              )}

              {/* Card Header */}
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <span className="service-badge">Professional Grade</span>
              </div>

              {/* Card Description */}
              <p className="service-description">{service.description}</p>

              {/* Features List */}
              <div className="features-section">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="check-icon">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="service-cta">
                  <span className="cta-text">Need</span>
                  <span className="cta-service">{service.title}?</span>
                </div>
                <motion.button 
                  className="card-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  aria-label={`Get a quote for ${service.title}`}
                >
                  Get Quote
                  <span className="button-arrow">→</span>
                </motion.button>
              </div>

              {/* Hover Overlay */}
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Complete Features:</h4>
                  <ul className="overlay-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="overlay-feature">
                        <span className="overlay-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    className="overlay-button"
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Get a custom quote"
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          className="stats-counter"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="stat">
            <div className="stat-icon">🏆</div>
            <h4>500+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <div className="stat-icon">🚀</div>
            <h4>24/7</h4>
            <p>Emergency Support</p>
          </div>
          <div className="stat">
            <div className="stat-icon">⭐</div>
            <h4>100%</h4>
            <p>Satisfaction Guarantee</p>
          </div>
          <div className="stat">
            <div className="stat-icon">👷</div>
            <h4>10+</h4>
            <p>Years Experience</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to Protect Your Assets?</h3>
            <p>Get a free, no-obligation quote for your specific needs</p>
            <div className="cta-buttons">
              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request a custom quote for your project"
              >
                Request Free Quote
              </motion.a>
              <motion.a 
                href="tel:+27311234567" 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Call our emergency support line"
              >
                <span className="phone-icon">📞</span>
                Call: +27 31 123 4567
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;