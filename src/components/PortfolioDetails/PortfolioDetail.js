import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import projectData from '../content/projectData';

function PortfolioDetail() {
  const { id } = useParams();
  const project = projectData.find(project => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="portfolio-detail">
      <Container>
        <div className="portfolio-detail-container mt-5">
          <div className="portfolio-detail-image" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
          <div className="portfolio-detail-content">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
          <div className="mt-4">
            <p>{project.content}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PortfolioDetail;
