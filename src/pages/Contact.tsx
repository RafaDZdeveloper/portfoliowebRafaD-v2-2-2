import React from 'react';
import './Contact.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h1 className="contact-title">¡Hablemos!</h1>
        <p className="contact-description">
          Si tienes preguntas o comentarios, no dudes en conectar a través de los siguientes canales.
        </p>
      </div>
      <div className="contact-icons">
        <a href="mailto:rafael.doradozamoro@gmail.com" className="contact-icon" aria-label="Email">
          <img src="public/images/email-icon.png" alt="Email" />
        </a>
        <a href="tel:+34648791998" className="contact-icon" aria-label="Phone">
          <img src="public/images/phone-icon.png" alt="Phone" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-dorado-zamoro/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
          <img src="public/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/rdisquete/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Instagram">
          <img src="public/images/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
