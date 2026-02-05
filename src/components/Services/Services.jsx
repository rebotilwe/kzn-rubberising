// Services.jsx - CLEAN MODERN VERSION
import React from "react";
import "./Services.css";
import { FaTools, FaCog, FaShieldAlt, FaBolt } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaTools />,
    title: "Premium Repairs",
    description: "We offer high-quality repair services using the latest equipment.",
    features: ["Fast turnaround", "Quality parts", "Warranty included"]
  },
  {
    id: 2,
    icon: <FaCog />,
    title: "Maintenance Services",
    description: "Regular maintenance to keep your machines running efficiently.",
    features: ["Routine checks", "Preventive care", "Expert technicians"]
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Safety Checks",
    description: "Comprehensive safety inspections for peace of mind.",
    features: ["Certified inspectors", "Full report", "Follow-up support"]
  },
  {
    id: 4,
    icon: <FaBolt />,
    title: "Emergency Services",
    description: "Rapid response for urgent repairs or maintenance issues.",
    features: ["24/7 availability", "Rapid dispatch", "Expert solutions"]
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-subtitle">What We Offer</span>
          {/* 🔥 REMOVED highlight span */}
          <h2>Our Services</h2>
          <p className="section-description">
            From routine maintenance to emergency repairs, we provide a complete range of services to keep your operations smooth and safe.
          </p>
          {/* 🔥 REMOVED title-underline */}
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-card">
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              
              <ul className="features-list">
                {service.features.map((feat, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">✔</span>
                    <span className="feature-text">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
