import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info" expand="lg" variant="dark" className="py-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bolder">
          📚 Book Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/add-book" className="text-white">
              Add Books +
            </Nav.Link>
            <Nav.Link as={Link} to="/view-bookList" className="text-white">
              View Books
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
