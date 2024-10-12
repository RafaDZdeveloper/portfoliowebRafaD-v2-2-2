import React, { useState } from 'react';
import './Projects.css'; // Asegúrate de que tienes un archivo CSS con los estilos mencionados

const projects = [
  {
    id: 1,
    title: 'Buscador de bebidas',
    shortDescription: 'Aplicación web para explorar y gestionar recetas de bebidas, diseñada con React Router, Tailwind CSS, Zustand y Zod, que ofrece una navegación fluida y una experiencia visual atractiva y responsive, con acceso a una amplia variedad de recetas a través de la API de The Cocktail DB.',
    description: 'Es una aplicación web desarrollada con React Router, Tailwind CSS, Zustand y Zod. Permite explorar y gestionar recetas de bebidas de manera eficiente, con navegación fluida entre la página de inicio y la sección de favoritos. Su diseño, estilizado con Tailwind CSS, asegura una experiencia visual atractiva y responsive en cualquier dispositivo. Zustand maneja el estado global para las recetas y favoritos, mientras que Zod valida los datos para garantizar la precisión de la información. La integración con la API de The Cocktail DB permite acceder a una amplia variedad de recetas y detalles.',
    imageUrl: 'public/images/buscadorbibidas.png',
    link: 'https://buscadordebebidasrafadz.netlify.app',
    previewImage: 'public/images/buscadorbibidas.png'
  },
  {
    id: 2,
    title: 'CryptoApp',
    shortDescription: 'Aplicación en tiempo real para seguir precios de criptomonedas, creada con React, TypeScript, Zod y Zustand, que presenta datos actualizados mediante una interfaz diseñada con Google Fonts.',
    description: 'Desarrollada con React, TypeScript, Zod y Zustand, esta aplicación permite seguir los precios de criptomonedas en tiempo real. He diseñado la estructura de la aplicación utilizando HTML para la base y Google Fonts para la interfaz. TypeScript gestiona el estado y las acciones de la aplicación, mientras que Zustand se encarga del almacenamiento. La app realiza llamadas a una API para obtener datos actualizados y presenta la información a través de componentes React, como spinners de carga y formularios de búsqueda.',
    imageUrl: 'public/images/appcrypto.png',
    link: 'https://cryptoapprafadz.netlify.app',
    previewImage: 'public/images/appcrypto.png'
  },
  {
    id: 3,
    title: 'App de clima',
    shortDescription: 'Aplicación de clima desarrollada con React y TypeScript, que usa la API de OpenWeatherMap para mostrar el clima de cualquier ciudad. Emplea Axios para obtener datos y React Hooks para gestionar el estado, con una interfaz que incluye búsqueda, spinner de carga, y alertas de error.',
    description: 'Una aplicación de clima desarrollada con React, TypeScript, CSS Modules, Axios, Zod y la API de OpenWeatherMap. Esta aplicación permite a los usuarios buscar el clima de cualquier ciudad ingresando su nombre y país. Utiliza Axios para obtener datos meteorológicos y React Hooks para manejar el estado y las actualizaciones de la interfaz. La experiencia incluye un formulario de búsqueda, un spinner de carga, y mensajes de alerta para manejar errores de búsqueda.',
    imageUrl: 'public/images/appclima.png',
    link: 'https://appclimardz.netlify.app',
    previewImage: 'public/images/appclima.png'
  },
  {
    id: 4,
    title: 'Seguimiento de pacientes',
    shortDescription: 'Aplicación de gestión de pacientes para clínicas veterinarias, desarrollada con React, Zustand y Tailwind CSS. Permite registrar, listar, editar y eliminar pacientes, ofreciendo una experiencia fluida con validación de formularios y notificaciones en tiempo real.',
    description: 'Una aplicación de seguimiento de pacientes para clínicas veterinarias. Utilizando React, Zustand, react-hook-form, react-toastify y Tailwind CSS, he desarrollado una solución integral para la gestión de pacientes. La aplicación permite registrar nuevos pacientes, listar todos los registros, y editar o eliminar información existente. Los usuarios disfrutan de una experiencia fluida gracias a la gestión eficiente del estado, validación reactiva de formularios y notificaciones en tiempo real.',
    imageUrl: 'public/images/seguimientodepacientes.png',
    link: 'https://seguimientoclinicarafaeldorado.netlify.app',
    previewImage: 'public/images/seguimientodepacientes.png'
  },
  {
    id: 5,
    title: 'Calculadora de gastos',
    shortDescription: 'Herramienta de finanzas personales desarrollada con React y TypeScript, que incluye un rastreador de presupuesto visual y manejo eficiente del estado con Context y Reducer. También permite configurar presupuestos y filtrar gastos.',
    description: 'Desarrollada con React y TypeScript, esta herramienta facilita la gestión de finanzas personales mediante una interfaz intuitiva y robusta. Utilicé Context y Reducer para manejar el estado global de manera eficiente, mejorando la escalabilidad del proyecto. Destaca el rastreador de presupuesto con un indicador circular, creado con react-circular-progressbar, que ofrece una visualización clara del gasto. Además, he implementado componentes reutilizables y personalizados para mantener el código limpio y modular. Con funcionalidades adicionales como el establecimiento de presupuestos iniciales y filtrado de gastos.',
    imageUrl: 'public/images/calculadoragastos.png',
    link: 'https://calculadordegastos-rafaeldorado.netlify.app',
    previewImage: 'public/images/calculadoragastos.png'
  },
  {
    id: 6,
    title: 'Contador de calorias',
    shortDescription: 'Aplicación web de seguimiento de calorías desarrollada con React y TypeScript, que utiliza useReducer, useEffect y useMemo para una gestión eficiente del estado. Incorpora componentes reutilizables y un sistema de reductor para manejar actividades, haciendo la aplicación robusta y escalable.',
    description: 'Una aplicación web de seguimiento de calorías desarrollada con React y TypeScript. En este proyecto, he implementado componentes reutilizables y una gestión eficiente del estado utilizando useReducer, useEffect y useMemo, lo que me permitió crear una aplicación modular y fácil de mantener. Destaco la incorporación de un sistema de reductor (activityReducer) para manejar acciones clave como guardar, eliminar y reiniciar actividades, haciendo que la aplicación sea robusta y escalable.',
    imageUrl: 'public/images/contadorcalorias.png',
    link: 'https://calorietracker-rafadorado.netlify.app',
    previewImage: 'public/images/contadorcalorias.png'
  },
  {
    id: 7,
    title: 'Calculadora de descuentos',
    shortDescription: 'Aplicación desarrollada con React, Tailwind CSS y Vite, que ofrece una experiencia fluida y atractiva. Utiliza un Custom Hook y useMemo para optimizar el manejo de datos y mejorar la eficiencia, con renderización condicional para mantener un rendimiento ágil con grandes conjuntos de datos.',
    description: 'Una aplicación utilizando React, Tailwind CSS y Vite, enfocándome en ofrecer una experiencia de usuario fluida y atractiva. Implementé un Custom Hook para optimizar el manejo de datos y mejorar la reutilización de lógica, y utilicé useMemo para calcular valores memorizados, garantizando una experiencia más eficiente. La renderización condicional de componentes también mejora el rendimiento, asegurando que la aplicación sea ágil incluso con conjuntos de datos grandes. Este proyecto destaca por su rendimiento optimizado y su interfaz moderna.',
    imageUrl: 'public/images/calculadoradescuentos.png',
    link: 'https://calculadoradescuentosrafadorado.netlify.app',
    previewImage: 'public/images/calculadoradescuentos.png'
  },
  {
    id: 8,
    title: 'GuitarLa',
    shortDescription: 'Aplicación en ReactJS con una interfaz intuitiva y atractiva para explorar modelos de guitarras, consultar especificaciones e información detallada. El diseño es totalmente responsivo, ofreciendo una experiencia fluida en cualquier dispositivo.',
    description: 'Utilizando ReactJS, he creado una interfaz intuitiva y atractiva que permite a los usuarios navegar por diferentes modelos de guitarras, consultar especificaciones y obtener información detallada. El diseño es completamente responsivo, asegurando una experiencia de usuario fluida en cualquier dispositivo.',
    imageUrl: 'public/images/guitarlab.png',
    link: 'https://guitarlarafaeldorado.netlify.app',
    previewImage: 'public/images/guitarlab.png'
  },
  // Añade más proyectos según sea necesario
];

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleCardClick = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  const handleClosePopup = () => {
    setSelectedProjectId(null);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleClosePopup();
    }
  };

  const selectedProjectData = projects.find(project => project.id === selectedProjectId);

  return (
    <div className="projects">
      <h1 className="title-gradient">Mis Proyectos</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project.id)}
          >
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-overlay">
              <div className="project-overlay-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-short-description">{project.shortDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProjectData && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content">
            <h2 className="title-gradient">{selectedProjectData.title}</h2> {/* Aplicar la clase aquí */}
            <a href={selectedProjectData.link} target="_blank" rel="noopener noreferrer">
              <img src={selectedProjectData.previewImage} alt={selectedProjectData.title} className="popup-image" />
            </a>
            <p>{selectedProjectData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;