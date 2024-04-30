import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const getLinkPath = path => {
    return `/#${path}`;
  };

  const handleLinkClick = (path) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${path}`;
    }
  };
  
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={location.pathname === '/' ? 'a' : Link} to="/">
          <img src="/logo192.png" height="30" className="d-inline-block align-top" alt="MyPage Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={showMobileMenu ? 'show' : ''}>
          <Nav className="ml-auto">
          <Nav.Link href={getLinkPath('home')} onClick={handleLinkClick}>Home</Nav.Link>
          <Nav.Link href={getLinkPath('about')} onClick={handleLinkClick}>About</Nav.Link>
          <Nav.Link href={getLinkPath('portfolio')} onClick={handleLinkClick}>Portfolio</Nav.Link>
          <Nav.Link href={getLinkPath('blog')} onClick={handleLinkClick}>Blog</Nav.Link>
          <Nav.Link href={getLinkPath('contact')} onClick={handleLinkClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
