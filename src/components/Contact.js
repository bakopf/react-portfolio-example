import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact bg-dark">
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-container">
              <div className="contact-info">
                <h3 className="text-white mb-5">Contact Information</h3>
                <div className="mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <span className="text-white">123 Street, City, Country</span>
                </div>
                <div className="mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <span className="text-white">info@example.com</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <span className="text-white">+123 456 789</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form">
              <h2 className="text-center text-white mb-4">Contact Us</h2>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className="text-white">Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formWebsite" className="mb-3">
                  <Form.Label className="text-white">Website</Form.Label>
                  <Form.Control type="text" placeholder="Enter your website (optional)" />
                </Form.Group>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label className="text-white">Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-5">
                  <Form.Label className="text-white">Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
