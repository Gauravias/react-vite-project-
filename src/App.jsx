import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Page Components
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';

// Import Global and App-level Styles
import './index.css';
import './App.css'; 

function App() {
  // A simple function to toggle dark mode for demonstration
  // In a real app, you might use Context or a state management library
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <Router>
      {/* Example dark mode toggle button - you can place this in your Navbar or a settings menu */}
      {/* <button onClick={toggleDarkMode} style={{position: 'fixed', top: '100px', right: '20px', zIndex: 100}}>Toggle Dark Mode</button> */}
      
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
