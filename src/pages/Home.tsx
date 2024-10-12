import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './Home.css';

interface Formacion {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
}

interface Experiencia {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

type Item = Formacion | Experiencia;

const Home: React.FC = () => {
  const [showFormacion, setShowFormacion] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState('light'); // Tema inicial como 'light'

  useEffect(() => {
    // Verificamos el tema inicial del documento
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Observamos los cambios en el atributo data-theme del elemento raíz (html)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          setTheme(newTheme || 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const formacionData: Formacion[] = [
    { id: '1', title: 'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS', institution: 'Udemy', year: '2024', description: 'Un curso completo sobre JavaScript que cubre desde lo básico hasta temas avanzados como jQuery, Angular y NodeJS.' },
    { id: '2', title: 'React y TypeScript - La Guía Completa', institution: 'Udemy', year: '2024', description: 'Curso exhaustivo sobre React y TypeScript, ideal para aprender a construir aplicaciones web modernas.' },
    { id: '3', title: 'Postgrado en Desarrollador Full Stack Developer', institution: 'Euroinnova', year: '2023', description: 'Formación avanzada en desarrollo Full Stack, incluyendo tecnologías front-end y back-end.' },
    { id: '4', title: 'Front End Development Libraries', institution: 'FreeCodeCamp.org', year: '2023', description: 'Curso sobre las principales bibliotecas y frameworks para el desarrollo front-end.' },
    { id: '5', title: 'JavaScript Algorithms and Data Structures', institution: 'FreeCodeCamp.org', year: '2023', description: 'Enseña algoritmos y estructuras de datos utilizando JavaScript.' },
    { id: '6', title: 'Responsive Web Design', institution: 'FreeCodeCamp.org', year: '2023', description: 'Curso sobre técnicas y prácticas para diseñar sitios web que se adaptan a diferentes dispositivos y tamaños de pantalla.' },
    { id: '7', title: 'Certificado de Profesionalidad en Productos Audiovisuales Multimedia Interactivos', institution: 'SEXPE', year: '2021', description: 'Certificación en la creación y gestión de productos audiovisuales multimedia interactivos.' }
  ];

  const experienciaData: Experiencia[] = [
    { id: '1', title: 'Diseñador de páginas web, fotógrafo y editor de vídeo', company: 'ADV Studio', period: 'Septiembre 2024 - Actualmente', description: "Responsable de la creación y diseño de páginas web personalizadas para diversas empresas, asegurando una experiencia de usuario óptima y un diseño visual atractivo. Además, edito y produzco contenido audiovisual para proyectos de marketing y branding, aportando creatividad y precisión técnica." },
    { id: '2', title: 'Asesor Comercial Productos Apple', company: 'Mecanorba', period: 'Mayo 2024 - Septiembre 2024', description: 'Asesoramiento y atención comercial a clientes particulares y empresas. Gestión de almacén, facturación e incidencias técnicas. Configuración de dispositivos en sus diferentes sistemas operativos. Asistencia técnica a clientes.' },
    { id: '3', title: 'Fotógrafo y Filmmaker', company: 'P.D. Fotógrafos', period: 'Septiembre 2012 - 2023', description: 'Fotógrafo y editor. Edición de video, gestión y diseño de redes sociales, diseño web.' },
    { id: '4', title: 'Técnico de Sonido y Docente', company: 'Gestor.Ex', period: 'Agosto 2014 - Octubre 2014', description: 'Técnico de sonido en programas en directo para Radio Marca. Docente en Workcamp.' },
    { id: '5', title: 'Auxiliar de Video y Sonido', company: 'Uveauve', period: 'Mayo 2011 - Septiembre 2011', description: 'Auxiliar de vídeo y sonido para retransmisiones en directo. Montaje y desmontaje de equipos de sonido.' }
  ];

  const handleToggle = () => {
    setShowFormacion(prevState => !prevState);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <div className="home">
      <div className="scroll-container">
        {/* Sección Hero */}
        <section className="section hero">
          <div className="hero-content">
            <img
              src={theme === 'dark' ? "public/images/img_6012_byn.png" : "public/images/img_6012_byn.png"}
              alt="Mi foto"
              className="hero-image"
            />
            <div className="text-content">
              <h1>¡Hola soy Rafa!</h1>
              <p>Desarrollador web</p>
            </div>
          </div>
        </section>



        {/* Sección del Carrusel */}
        <section className="section carousel-section">
          <h2 className="carousel-title">Proyectos</h2>
          <div className="carousel-container">
            <Carousel />
          </div>
          <Link to="/projects" className="projects-button">Ir a Proyectos</Link>
        </section>

        {/* Sección de Formación y Experiencia */}
        <section className="section grid-section">
          <h2 className="grid-title">Formación y Experiencia</h2>
          <button className="toggle-button" onClick={handleToggle}>
            {showFormacion ? 'Ver Experiencia' : 'Ver Formación'}
          </button>
          <div className="grid-container">
            {(showFormacion ? formacionData : experienciaData).map(item => (
              <div
                key={item.id}
                className="grid-item"
                onClick={() => handleItemClick(item)}
              >
                <h3 className="grid-item-title">{item.title}</h3>
                <p className="grid-item-subtitle">
                  {showFormacion ? (item as Formacion).institution : (item as Experiencia).company}
                </p>
                <p className="grid-item-date">
                  {showFormacion ? (item as Formacion).year : (item as Experiencia).period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Descargar CV */}
        <section className="section cv-download-section">
          <a href="/CV Rafael Dorado Zamoro- Desarrollador web.pdf" download className="button download-button">
            Descargar CV
          </a>
        </section>
      </div>

      {/* Pop-up */}
      {showPopup && selectedItem && (
        <div className="popup-overlay" onClick={handleOutsideClick}>
          <div className="popup-content">
            <h3 className="popup-title">{selectedItem.title}</h3>
            {showFormacion ? (
              <>
                <p className="popup-institution">{(selectedItem as Formacion).institution}</p>
                <p className="popup-year">{(selectedItem as Formacion).year}</p>
                <p className="popup-description">{(selectedItem as Formacion).description}</p>
              </>
            ) : (
              <>
                <p className="popup-company">{(selectedItem as Experiencia).company}</p>
                <p className="popup-period">{(selectedItem as Experiencia).period}</p>
                <p className="popup-description">{(selectedItem as Experiencia).description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
