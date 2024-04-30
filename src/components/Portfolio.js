import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectData from './content/projectData';

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

  const getImageUrl = (relativeUrl) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}${relativeUrl}`;
  };

  return (
    <section id="portfolio" className="portfolio bg-dark">
      <Container>
        <h2 className="text-white mb-5">My Portfolio</h2>
        <Row>
          {projectData.map(project => (
            <Col md={4} key={project.id}>
              <Link to={`/portfolio/${project.id}`} style={{ textDecoration: 'none' }}>
                <Card className="portfolio-item" ref={el => cardRefs.current[project.id - 1] = el}>
                  <div className="portfolio-image" style={{ backgroundImage: `url(${getImageUrl(project.imageUrl)})` }}></div>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <button>View Project</button>
                    </div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
