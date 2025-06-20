import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side routing
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define navigation links with paths for the router
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
  ];

  // Function to close the mobile menu, useful after a link is clicked
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-main">
          {/* Logo links to the Home page */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <svg className="logo-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.196-5.975M15 11a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
            <span className="logo-text">Brand</span>
          </Link>

          {/* Desktop Menu uses the Link component */}
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="desktop-icons">
             <button className="icon-button"><Search size={22}/></button>
             <button className="icon-button"><ShoppingCart size={22}/></button>
             <button className="icon-button"><User size={22}/></button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button-container">
            <button onClick={() => setIsOpen(!isOpen)} className="icon-button" aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu uses the Link component */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="mobile-nav-link" onClick={closeMobileMenu}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-icons">
            <button className="icon-button"><Search size={24}/></button>
            <button className="icon-button"><ShoppingCart size={24}/></button>
            <button className="icon-button"><User size={24}/></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
