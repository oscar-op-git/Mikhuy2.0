// src/App.jsx

// Importaciones principales
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Departamento from './pages/Departamento';
import Receta from './pages/Receta';
import TipoDeRecetas from './pages/TipoDeRecetas'; // Importamos el componente para tipos de recetas
import './styles/App.css';

// Componente principal de la aplicación
function App() {
  return (
    <div className="app-container">
      <div className="page-container">
        {/* Definición de las rutas de la aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departamento/:nombre" element={<Departamento />} />
          <Route path="/receta/:nombre" element={<Receta />} />
          <Route path="/tipo/:tipo" element={<TipoDeRecetas />} /> {/* Ruta para tipos de recetas */}
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
