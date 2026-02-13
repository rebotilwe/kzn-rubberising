// Services.jsx - COMPLETELY UPDATED with polyurea/polyurethane coating services
import React from "react";
import "./Services.css";
import { FaShieldAlt, FaTruck, FaIndustry, FaHome, FaFlask, FaRuler } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Bin-Lining & Bakkies",
    description: "Professional polyurea coating for load bins and bakkies that adheres directly to metal, preventing water trapping and rust.",
    specs: ["3mm standard thickness", "5mm heavy-duty option", "Water-look textured finish"],
    features: ["Chemical resistant", "Impact proof >40 in/lbs", "Full cure in 24 hours"]
  },
  {
    id: 2,
    icon: <FaIndustry />,
    title: "Industrial Surfaces",
    description: "Corrosion control coating for industrial floors, tanks, and equipment requiring high tensile strength and chemical resistance.",
    specs: ["5200 PSI tensile", "70-73 Shore D hardness", "Abrasion resistant"],
    features: ["Acid & fuel resistant", "No cracking on 3\" mandrel", "Thermal stable"]
  },
  {
    id: 3,
    icon: <FaHome />,
    title: "Waterproofing & Roofs",
    description: "Polyurethane waterproofing solutions for residential and commercial roofs with superior flexibility and weather resistance.",
    specs: ["Seamless membrane", "UV stable", "Elastic recovery"],
    features: ["Prevents leaks", "Temperature tolerant", "15+ year lifespan"]
  },
  {
    id: 4,
    icon: <FaFlask />,
    title: "Chemical Containment",
    description: "Secondary containment lining for chemical storage areas, preventing corrosion from acids, oils, and industrial solvents.",
    specs: ["Chemical barrier", "Fuel resistant", "Non-porous finish"],
    features: ["Bonded directly", "Zero water ingress", "Easy cleanup"]
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-subtitle">Polyurea · Polyurethane</span>
          <h2>Corrosion Control <span className="highlight">Coatings</span></h2>
          <p className="section-description">
            Professional rubberising and protective coatings with certified physical properties. 
            ASTM-tested durability for industrial, commercial, and residential applications.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-card">
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                
                <div className="specs-badge-container">
                  {service.specs.map((spec, idx) => (
                    <span key={idx} className="spec-badge">{spec}</span>
                  ))}
                </div>
                
                <p className="service-description">{service.description}</p>
              </div>
              
              <div className="features-section">
                <h4 className="features-title">Key Properties</h4>
                <ul className="features-list">
                  {service.features.map((feat, index) => (
                    <li key={index} className="feature-item">
                      <span className="check-icon">✓</span>
                      <span className="feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <div className="warranty-info">
                  <span className="warranty-badge">1-3 Year Warranty</span>
                </div>
                <a href="#contact" className="card-button">
                  Get Quote <span className="button-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Summary Section */}
        <div className="technical-summary">
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">Abrasion Resistance</span>
              <span className="summary-value">110mg (ASTM D-4060)</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Impact Resistance</span>
              <span className="summary-value">&gt;40 in/lbs (ASTM G-14)</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Hardness</span>
              <span className="summary-value">70-73 Shore D (ASTM D-2240)</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Flexibility</span>
              <span className="summary-value">No cracking, 3" mandrel (ASTM D-522)</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Tensile Strength</span>
              <span className="summary-value">5200 psi (ASTM D-412)</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Cure Time</span>
              <span className="summary-value">24 hours to full strength</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;