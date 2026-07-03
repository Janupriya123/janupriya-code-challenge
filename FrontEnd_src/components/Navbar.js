import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() { 
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cricket Team Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/players">
              Player List
            </Nav.Link>
            <Nav.Link as={Link} to="/add-player">
              Add Player
            </Nav.Link>
            <Nav.Link as={Link} to="/get-player">
              Get Player
            </Nav.Link>
            <Nav.Link as={Link} to="/get-player-by-team">
              Get Player By Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;
