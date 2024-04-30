import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import project1Image from '../assets/1.jpg';
import project2Image from '../assets/2.jpg';
import project3Image from '../assets/3.jpg';
function Portfolio() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const setMaxHeight = () => {
      cardRefs.current.forEach(ref => {
        if (ref) {
          const width = ref.offsetWidth;
          ref.style.height = `${width}px`;
        }
      });
    };

    setMaxHeight();
    window.addEventListener('resize', setMaxHeight);
    return () => {
      window.removeEventListener('resize', setMaxHeight);
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio bg-dark py-5">
      <Container>
        <h2 className="text-white mb-5">My Portfolio</h2>
        <Row>
          <Col md={4}>
            <Card className="portfolio-item" ref={el => cardRefs.current[0] = el}>
              <div className="portfolio-image" style={{ backgroundImage: `url(${project1Image})` }}></div>
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <h4>Project Name</h4>
                  <p>Description of the project...</p>
                  <a href="#">View Project</a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="portfolio-item" ref={el => cardRefs.current[1] = el}>
              <div className="portfolio-image" style={{ backgroundImage: `url(${project2Image})` }}></div>
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <h4>Project Name</h4>
                  <p>Description of the project...</p>
                  <a href="#">View Project</a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="portfolio-item" ref={el => cardRefs.current[2] = el}>
              <div className="portfolio-image" style={{ backgroundImage: `url(${project3Image})` }}></div>
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <h4>Project Name</h4>
                  <p>Description of the project...</p>
                  <a href="#">View Project</a>
                </div>
              </div>
            </Card>
          </Col>
          {/* Add more Col components for additional projects */}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;