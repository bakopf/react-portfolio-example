import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top"> {/* Set bg="dark" and variant="dark" for dark colors */}
      <Container>
        <Navbar.Brand href="#home">
          <img src="logo192.png" height="30" className="d-inline-block align-top" alt="MyPage Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={showMobileMenu ? 'show' : ''}>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
