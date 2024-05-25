import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-ternary fixed-top bg-white shadow">
      <Container>
        <Navbar.Brand href="#home">Epi Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;