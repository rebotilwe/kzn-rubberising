import React from "react";
import "./Services.css";
import { FaTools, FaCog, FaShieldAlt, FaBolt } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaTools />,
    title: "Premium Repairs",
    badge: "Best",
    description: "We offer high-quality repair services using the latest equipment.",
    features: ["Fast turnaround", "Quality parts", "Warranty included"]
  },
  {
    id: 2,
    icon: <FaCog />,
    title: "Maintenance Services",
    badge: "",
    description: "Regular maintenance to keep your machines running efficiently.",
    features: ["Routine checks", "Preventive care", "Expert technicians"]
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Safety Checks",
    badge: "Popular",
    description: "Comprehensive safety inspections for peace of mind.",
    features: ["Certified inspectors", "Full report", "Follow-up support"]
  },
  {
    id: 4,
    icon: <FaBolt />,
    title: "Emergency Services",
    badge: "",
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
          <h2>
            Our <span className="highlight">Services</span>
          </h2>
          <p className="section-description">
            From routine maintenance to emergency repairs, we provide a complete range of services to keep your operations smooth and safe.
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-card service-blue">
              {service.badge && <div className="popular-badge">{service.badge}</div>}
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <span className="service-badge">{service.badge}</span>
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
