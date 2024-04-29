import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    equalizeCardHeights();

  }, [posts]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const equalizeCardHeights = () => {
    const cards = document.querySelectorAll('.blog-card');
    let maxHeight = 0;

    cards.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  };

  const truncateTitle = (title) => {
    if (title.length > 50) {
      return title.slice(0, 50) + '...';
    }
    return title;
  };

  return (
    <Container id="blog" className="blog">
      <h2 className="mb-4">Latest Blog Posts</h2>
      <Row className="equal-height">
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Link to={`/blog/${post.id}`} className="blog-post-link">
              <Card className="blog-card">
                <div className="blog-image" style={{ backgroundImage: `url(http://127.0.0.1:8000/storage/${post.filepath})` }}/>
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Author: {post.author}</Card.Subtitle>
                <Card.Title dangerouslySetInnerHTML={{ __html: truncateTitle(post.headline) }} />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
