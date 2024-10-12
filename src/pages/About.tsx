import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './About.css';

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSkills = () => {
    setIsOpen(!isOpen);
  };

  // Detectar si el modo oscuro está activo
  useEffect(() => {
    const darkModeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const darkModeClass = document.body.classList.contains('dark-mode');
          setIsDarkMode(darkModeClass);
        }
      });
    });
  
    // Observar cambios en los atributos del body
    darkModeObserver.observe(document.body, { attributes: true });
  
    // Limpia el observer cuando el componente se desmonte
    return () => {
      darkModeObserver.disconnect();
    };
  }, []);
  

  // Definir los estilos del CircularProgressbar según el modo
  const progressBarStyles = buildStyles({
    pathColor: isDarkMode ? '#FF6F61' : '#4a0072', // Rosa para modo oscuro y violeta para modo claro
    textColor: isDarkMode ? '#FFF' : '#333', // Blanco para texto en modo oscuro y oscuro para modo claro
    trailColor: isDarkMode ? '#444' : '#E0E0E0', // Fondo del progreso para contraste
    strokeLinecap: 'round',
    textSize: '16px',
  });

  const skills = [
    { imageUrl: 'public/images/html-logo.png', percent: 90 },
    { imageUrl: 'public/images/css-logo.png', percent: 80 },
    { imageUrl: 'public/images/js-logo.png', percent: 85 },
    { imageUrl: 'public/images/react-logo.png', percent: 75 },
    { imageUrl: 'public/images/angular-logo.png', percent: 55 },
    { imageUrl: 'public/images/jquery-logo.png', percent: 70 },
    { imageUrl: 'public/images/sass-logo.png', percent: 60 },
    { imageUrl: 'public/images/nodejs-logo.png', percent: 55 },
    { imageUrl: 'public/images/redux-logo.png', percent: 60 },
    { imageUrl: 'public/images/tailwind-logo.png', percent: 80 },
    { imageUrl: 'public/images/mysql-logo.png', percent: 45 },
    { imageUrl: 'public/images/php-logo.png', percent: 35 },
    { imageUrl: 'public/images/wordpress-logo.png', percent: 55 },
  ];

  return (
    <div className="about">
      <h1>Sobre Mi</h1>
      <div className="about-content">
      <div className="about-image-container">
  <div className="frame">
    <img src="public/images/IMG_6012.png" alt="Foto Personal" className="about-image" />
  </div>
</div>

        <div className="about-text-container">
          <p className="about-text">
            Soy un desarrollador web con experiencia en la creación de aplicaciones modernas y eficientes. Mi pasión por la tecnología me ha llevado a explorar diversos campos del desarrollo, y estoy comprometido con la mejora continua y la innovación. Me especializo en el diseño y desarrollo de soluciones web adaptativas que cumplen con los estándares más altos de calidad. Estoy constantemente aprendiendo nuevas tecnologías y herramientas para ofrecer soluciones innovadoras a los desafíos que enfrento.
          </p>
        </div>
      </div>
      <div className="skills-section">
        <button onClick={toggleSkills} className="toggle-button">
          {isOpen ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
        </button>
        {isOpen && (
          <div className="skills-icons">
            {skills.map((skill, index) => (
              <div key={index} className="skill-container">
                <div className="skill-icon">
                  <img src={skill.imageUrl} alt={`Skill ${index + 1}`} className="skill-image" />
                </div>
                <div className="skill-progress">
                  <CircularProgressbar
                    value={skill.percent}
                    text={`${skill.percent}%`}
                    styles={progressBarStyles}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
