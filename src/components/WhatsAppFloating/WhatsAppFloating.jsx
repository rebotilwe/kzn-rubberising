// components/WhatsAppFloating.jsx
import "./WhatsAppFloating.css";

const WhatsAppFloating = () => {
  const phoneNumber = "+27311234567"; // Your WhatsApp number
  const message = "Hello KZN Rubberising, I'm interested in your services!";
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon">💬</div>
      <span className="whatsapp-text">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppFloating;