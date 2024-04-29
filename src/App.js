import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Blog from './components/Blog';
import BlogPostDetail from './components/BlogPostDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog/:id" element={<BlogPostDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div>
      <Welcome />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

function BlogPostDetailPage() {
  return (
    <div>
      <BlogPostDetail />
    </div>
  );
}

export default App;
