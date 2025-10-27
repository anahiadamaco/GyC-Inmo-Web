import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h5>GyC Inmo</h5>
          <p>Mostramos terrenos y propiedades seleccionadas. Confianza y servicio local.</p>
        </div>

        <div className="footer-col">
          <h5>Enlaces</h5>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contacto</h5>
          <p>Tel: (00) 1234-5678<br/>Email: info@gycinmo.cl</p>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} GyC Inmo — Todos los derechos reservados</small>
      </div>
    </footer>
  );
}

export default Footer;