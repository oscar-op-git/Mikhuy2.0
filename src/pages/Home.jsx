// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import recetasData from '../data/recetasData'; // Importamos los datos
import '../styles/Home.css';

function Home() {
  const recetas = Object.values(recetasData);

  return (
    <div className="home">
      <Header />
      <main className="main-content">
        {/* Recuadro superior en el body */}
        <section className="hero-section">
          <div className="hero-content" >
            <h1 className="hero-title">Mickuy</h1>
            <p className="hero-description">
              No cualquiera puede ser un gran artista,<br />
              pero un gran artista puede provenir <br />
              de cualquier lado.
            </p>
          </div>
          
        </section>

        {/* Título "Recomendaciones" */}
        <h2 className="section-title">Recomendaciones</h2>

        {/* Grid de recetas */}
        <section className="recipes-grid">
          {recetas.map((receta) => (
            <div className="recipe-card" key={receta.nombre}>
              <img src={receta.imagen} alt={receta.nombre} />
              <Link to={`/receta/${receta.nombre}`} className="recipe-name">
                {receta.nombre}
              </Link>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
