import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar  expand="lg">
      <Navbar.Brand href="/">YourApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/availability">Availability</Nav.Link>
          <Nav.Link as={Link} to="/bookings">Bookings</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link href="/login" target="_blank" rel="noopener noreferrer">Login</Nav.Link>
          <Nav.Link href="/signup" target="_blank" rel="noopener noreferrer">Signup</Nav.Link>
          <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
