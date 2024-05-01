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
import PortfolioDetail from './components/PortfolioDetails/PortfolioDetail';
import QuoteOfTheDay from './components/QuoteOfTheDay';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog/:id" element={<BlogPostDetailPage />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
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
      <QuoteOfTheDay />
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
