import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar expand="lg" className="gyc-navbar" variant="dark" sticky="top">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="gyc-brand">
          {/* Simple inline logo */}
          <span className="gyc-logo" aria-hidden>🏡</span>
          <span className="gyc-title">GyC Inmo</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="gyc-navbar-nav" />
        <BsNavbar.Collapse id="gyc-navbar-nav">
          <Nav className="me-auto gyc-navlinks">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

          <Form className="d-flex gyc-search" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="search"
              placeholder="Buscar por ciudad, tipo o referencia"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-light" size="sm">Buscar</Button>
          </Form>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;