import React from "react";
import PropiedadCard from "../components/PropiedadCard";

function Home() {
  // Datos de ejemplo (puedes reemplazarlos por datos reales)
  const propiedadesMock = [
    {
      id: 1,
      titulo: "Terreno con vista al valle",
      descripcion: "Parcela amplia ideal para proyecto residencial.",
      precio: "$50.000.000",
      imagen: "https://via.placeholder.com/800x600?text=Terreno+1"
    },
    {
      id: 2,
      titulo: "Lote urbano céntrico",
      descripcion: "Excelente conectividad y servicios.",
      precio: "$35.000.000",
      imagen: "https://via.placeholder.com/800x600?text=Lote+2"
    },
    {
      id: 3,
      titulo: "Propiedad con frente a calle",
      descripcion: "Ideal para comercio o vivienda.",
      precio: "$75.000.000",
      imagen: "https://via.placeholder.com/800x600?text=Propiedad+3"
    },
    {
      id: 4,
      titulo: "Terreno agrícola",
      descripcion: "Suelo fértil y riego disponible.",
      precio: "$22.000.000",
      imagen: "https://via.placeholder.com/800x600?text=Terreno+4"
    }
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <h1>Encuentra tu próximo terreno o propiedad</h1>
          <p className="lead">Propiedades seleccionadas por GyC Inmo — calidad y confianza.</p>
        </div>
      </section>

      <section className="list-section container">
        <div className="filters-row">
          <div className="filters-left">Mostrando <strong>{propiedadesMock.length}</strong> propiedades</div>
          <div className="filters-right">
            <label className="me-2">Ordenar por:</label>
            <select aria-label="Ordenar" className="form-select form-select-sm">
              <option>Relevancia</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        <div className="card-grid">
          {propiedadesMock.map(p => (
            <div key={p.id} className="card-grid-item">
              <PropiedadCard propiedad={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;