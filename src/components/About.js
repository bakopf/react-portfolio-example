import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <div className="section-title">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Row className="gx-5">
          <Col lg={4}>
            <div className="about-image"></div>
          </Col>
          <Col lg={8}>
            <div className="about-details">
              <div className="about-item">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <div className="about-text">
                  <h4>Name</h4>
                  <p>John Doe</p>
                </div>
              </div>
              <div className="about-item">
                <FontAwesomeIcon icon={faCalendar} className="icon" />
                <div className="about-text">
                  <h4>Age</h4>
                  <p>30</p>
                </div>
              </div>
              <div className="about-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <div className="about-text">
                  <h4>Location</h4>
                  <p>New York, USA</p>
                </div>
              </div>
            </div>
            <div className="skill-bars">
              
              <div className="progress-wrapper">
                <span>Skills</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress-wrapper">
                <span>HTML</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress-wrapper">
                <span>CSS</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress-wrapper">
                <span>JavaScript</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
              </div>
              <div className="progress-wrapper">
                <span>React</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress-wrapper">
                <span>MySql</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
