import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../LanguageProvider';
import { assets } from '../assets/assets'; // <-- Add this import
import './Navbar.css'; // Assuming you still have your CSS file for styling

const Navbar = () => {
  const { language, setLanguage, content } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  // Check if a link is active for styling purposes
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <Link to="/" className="nav-home-link" onClick={handleLinkClick}>
          <img
            src={assets.image59} // <-- Use image59 from assets
            alt="Punchlight Logo"
            className="nav-logo-img"
          />

        </Link>
      </div>

      {/* Hamburger icon for mobile navigation */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>

      {/* Navigation links, dynamically show/hide based on isOpen state */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link
            to="/"
            className={`home-link${isActive('/') ? ' active-link' : ''}`}
            onClick={handleLinkClick}
          >
            {content.homeNav}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive('/about') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.aboutNav}
          </Link>
        </li>
        <li>
          <Link
            to="/whatwedo"
            className={isActive('/whatwedo') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.whatWeDoNav}
          </Link>
        </li>
        <li>
          <Link
            to="/programs"
            className={isActive('/programs') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.programsNav}
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className={isActive('/team') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.teamNav}
          </Link>
        </li>
        <li>
          <Link
            to="/publication"
            className={`publication-link${isActive('/publication') ? ' active-link' : ''}`}
            onClick={handleLinkClick}
          >
            {content.publicationNav}
          </Link>
        </li>
        <li>
          <Link
            to="/faqs"
            className={`faqs-link${isActive('/faqs') ? ' active-link' : ''}`}
            onClick={handleLinkClick}
          >
            {content.faqsNav}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.contactNav}
          </Link>
        </li>
        <li>
          <Link
            to="/donation"
            className={`donation-link${isActive('/donation') ? ' active-link' : ''}`}
            onClick={handleLinkClick}
          >
            {content.donationNav}
          </Link>
        </li>
        {/* Language selection buttons */}
        <li>
          <button 
            onClick={() => setLanguage("en")} 
            className={`lang-button ${language === "en" ? "active-link" : ""}`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage("hi")} 
            className={`lang-button ${language === "hi" ? "active-link" : ""}`}
          >
            हिन्दी
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
