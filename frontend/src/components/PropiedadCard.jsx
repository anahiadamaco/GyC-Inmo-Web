import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PropiedadCard({ propiedad }) {
  const imageSrc = propiedad.imagen || "https://via.placeholder.com/600x400?text=Imagen+no+disponible";

  return (
    <Card className="prop-card shadow-sm">
      <div className="prop-card-imgwrap">
        <Card.Img variant="top" src={imageSrc} className="prop-card-img" />
        <div className="price-badge">{propiedad.precio}</div>
      </div>

      <Card.Body className="prop-card-body">
        <Card.Title className="prop-card-title">{propiedad.titulo}</Card.Title>
        <Card.Text className="prop-card-desc">{propiedad.descripcion}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button as={Link} to={`/propiedad/${propiedad.id}`} variant="outline-primary" size="sm">
            Ver detalle
          </Button>
          <small className="text-muted">Ref: {propiedad.id}</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PropiedadCard;