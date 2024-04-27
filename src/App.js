import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
