// src/components/Header.jsx

// Importaciones necesarias
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

// Componente Header
function Header() {
  // Estados para controlar la visibilidad de los menús desplegables
  const [showDepartamentos, setShowDepartamentos] = useState(false);
  const [showTipos, setShowTipos] = useState(false);
  const headerRef = useRef(null);

  // Función para alternar el menú de Departamentos
  const toggleDepartamentos = (e) => {
    e.stopPropagation();
    setShowDepartamentos(!showDepartamentos);
    setShowTipos(false); // Cierra el otro menú si está abierto
  };

  // Función para alternar el menú de Tipos de plato
  const toggleTipos = (e) => {
    e.stopPropagation();
    setShowTipos(!showTipos);
    setShowDepartamentos(false); // Cierra el otro menú si está abierto
  };

  // Efecto para cerrar los menús al hacer clic fuera del header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowDepartamentos(false);
        setShowTipos(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Render del componente Header
  return (
    <header className="header" ref={headerRef}>
      <div className="header-content">
        <div className="left-section">
          {/* Logo y nombre del sitio */}
          <div className="logo-section">
            <img className="logo-placeholder" src="/assets/img_logo.png" alt="Logo" />
            <h1 className="site-name">Mickuy</h1>
          </div>
          {/* Menú de navegación */}
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Inicio</Link>
            {/* Menú desplegable de Departamentos */}
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDepartamentos}>Departamentos</button>
              {showDepartamentos && (
                <div className="dropdown-content">
                  <Link to="/departamento/cochabamba">Cochabamba</Link>
                  <Link to="/departamento/la-paz">La Paz</Link>
                  <Link to="/departamento/santa-cruz">Santa Cruz</Link>
                  <Link to="/departamento/pando">Pando</Link>
                  <Link to="/departamento/beni">Beni</Link>
                  <Link to="/departamento/tarija">Tarija</Link>
                  <Link to="/departamento/oruro">Oruro</Link>
                  <Link to="/departamento/potosi">Potosí</Link>
                  <Link to="/departamento/chuquisaca">Chuquisaca</Link>
                </div>
              )}
            </div>
            {/* Menú desplegable de Tipos de plato */}
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleTipos}>Tipos de plato</button>
              {showTipos && (
                <div className="dropdown-content">
                  <Link to="/tipo/bebidas">Bebidas</Link>
                  <Link to="/tipo/entradas">Entradas</Link>
                  <Link to="/tipo/plato-principal">Plato Principal</Link>
                  <Link to="/tipo/postres">Postres</Link>
                  <Link to="/tipo/reposteria">Repostería</Link>
                  <Link to="/tipo/sopas">Sopas</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
