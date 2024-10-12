import React from 'react';
import './Footer.css'; // Asegúrate de tener este archivo CSS para los estilos

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Portfolio web de Rafa Dorado</p>
      </div>
      <div className="footer-bottom">
        <a href="mailto:rafael.doradozamoro@gmail.com.com" className="footer-button">
          <img src="public/images/email-icon.png" alt="Email" />
        </a>
        <a href="tel:+34648791998" className="footer-button">
          <img src="public/images/phone-icon.png" alt="Teléfono" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-dorado-zamoro/" target="_blank" rel="noopener noreferrer" className="footer-button">
          <img src="public/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/rdisquete/" target="_blank" rel="noopener noreferrer" className="footer-button">
          <img src="public/images/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
