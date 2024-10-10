// src/pages/Receta.jsx

// Importaciones necesarias
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import recetasData from '../data/recetasData'; // Datos de las recetas
import '../styles/Receta.css';

// Componente que muestra los detalles de una receta específica
function Receta() {
  // Obtenemos el nombre de la receta desde los parámetros de la URL
  const { nombre } = useParams();

  // Buscamos la receta correspondiente en los datos
  const receta = Object.values(recetasData).find((rec) => rec.nombre === nombre);

  // Si la receta no existe, mostramos un mensaje de error
  if (!receta) {
    return (
      <div className="page">
        <Header />
        <main className="main-content">
          <h2>Receta no encontrada</h2>
          <p>La receta solicitada no existe.</p>
        </main>
        <Footer />
      </div>
    );
  }

  // Si la receta existe, renderizamos sus detalles
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <section className='seccion-tarjeta-ingredientes'>
          <div className='seccion-tarjeta'>
            <h2 className='nombre-receta'>{receta.nombre}</h2>
            <div className='seccion-descripcion-imagen'>
              <p className='descripcion'>{receta.descripcion}</p>
              <img src={receta.imagen} alt={receta.nombre} className="receta-imagen" />
            </div>
          </div>

          <div className='seccion-ingredientes'>
            <h3 className='ingredientes-titulo'>Ingredientes</h3>
            <div className='contenedor-ingredientes'>
                <ul className='ingredientes'>
                {receta.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className='preparacion'>
          <h3 className='titulo-pasos'>Pasos</h3>
          <div className='explicacion-pasos'>
              <ol >
              {receta.pasos.map((paso, index) => (
              <li key={index}>{paso}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Receta;
