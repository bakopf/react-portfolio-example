import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <Container className="blog-post">
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: post.headline }} />
          <p dangerouslySetInnerHTML={{ __html: post.text }} />
          <p>Author: {post.author}</p>
        </div>
      ) : (
        <p>No post found.</p>
      )}
    </Container>
  );
};

export default BlogPostDetail;
