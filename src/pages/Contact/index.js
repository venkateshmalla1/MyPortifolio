import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '917411064722';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="contact-container d-flex flex-column justify-content-center align-items-center text-center">
      <h2 className="mb-4">Contact Me</h2>
      <textarea
        className="form-control mb-3 contact-textarea"
        rows="4"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button 
        className="btn btn-outline-danger w-50" 
        onClick={handleWhatsAppRedirect}
      >
        Connect with Me
      </button>
    </div>
  );
};

export default Contact;
