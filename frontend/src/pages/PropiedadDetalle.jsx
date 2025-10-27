import React from "react";

function PropiedadDetalle() {
  // Placeholder data — en producción reemplazar con fetch por id
  const propiedad = {
    id: 1,
    titulo: "Terreno con vista al valle",
    descripcion: "Parcela amplia ideal para proyecto residencial. Superficie: 1.200 m². Buen acceso y servicios cercanos.",
    precio: "$50.000.000",
    imagenes: [
      "https://via.placeholder.com/1000x600?text=Imagen+1",
      "https://via.placeholder.com/1000x600?text=Imagen+2",
      "https://via.placeholder.com/1000x600?text=Imagen+3"
    ]
  };

  return (
    <div className="container propiedad-detalle">
      <div className="detalle-grid">
        <div className="galeria">
          <img src={propiedad.imagenes[0]} alt="principal" className="galeria-main" />
          <div className="galeria-thumbs">
            {propiedad.imagenes.map((src, i) => (
              <img key={i} src={src} alt={`thumb-${i}`} className="galeria-thumb" />
            ))}
          </div>
        </div>

        <aside className="detalle-info">
          <h2>{propiedad.titulo}</h2>
          <p className="precio-detalle">{propiedad.precio}</p>
          <p>{propiedad.descripcion}</p>

          <ul className="caracteristicas">
            <li>Superficie: 1.200 m²</li>
            <li>Servicios: agua, electricidad a pie de lote</li>
            <li>Acceso: camino pavimentado</li>
          </ul>

          <div className="acciones">
            <a href="/contacto" className="btn btn-primary">Contactar</a>
            <a href="#" className="btn btn-outline-secondary ms-2">Solicitar visita</a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PropiedadDetalle;