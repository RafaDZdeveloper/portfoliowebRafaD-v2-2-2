// App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  // Inicializa el estado con el valor guardado en localStorage o por defecto en modo oscuro
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || savedMode === null ? true : false;
  });

  // Actualiza el classList del body y guarda el estado en localStorage cuando darkMode cambie
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <ScrollToTop />
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <main className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
