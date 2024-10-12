import React from 'react';
import './Header.css';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <a href="/" className="logo-button">
          <img
            src={isDarkMode ? 'public/images/Logo oscuro.jpg' : 'public/images/Logo.png'}
            alt="Logo"
            className="logo"
          />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/about" className="nav-button">Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a href="/projects" className="nav-button">Proyectos</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-button">Contacto</a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="mode-toggle-button">
          <img
            src={isDarkMode ? 'public/images/bombilla apagada.png' : 'public/images/bombilla encendida.png'}
            alt={isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
            className="mode-icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
