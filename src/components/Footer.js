import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5"> {/* Added py-5 for vertical padding */}
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0"> {/* Added mb-4 for bottom margin */}
            <h3>MyPage</h3>
            <p>Your description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0"> {/* Added mb-4 for bottom margin */}
            <h3>Useful Links</h3>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Social Media</h3>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faFacebook} /><a href="#" className="ml-2 text-white">Facebook</a></li>
              <li><FontAwesomeIcon icon={faTwitter} /><a href="#" className="ml-2 text-white">Twitter</a></li>
              <li><FontAwesomeIcon icon={faLinkedin} /><a href="#" className="ml-2 text-white">LinkedIn</a></li>
              <li><FontAwesomeIcon icon={faInstagram} /><a href="#" className="ml-2 text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2024 MyPage. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
