import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../LanguageProvider';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage, content } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTOC, setHoveredTOC] = useState(null);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  const handleMouseEnter = (item) => setHoveredTOC(item);
  const handleMouseLeave = () => setHoveredTOC(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setHoveredTOC(null);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <Link to="/" className="nav-home-link" onClick={handleLinkClick}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
            alt="Punchlight Logo"
            className="nav-logo-img"
          />
          <span className="nav-logo-text">Punchlight</span>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/about"
            className={isActive('/about') ? 'active-link' : ''}
            onClick={handleLinkClick} 
          >
            {content.aboutNav}
          </Link>
          {hoveredTOC === 'about' && (
            <ul className="toc">
              
              <li onClick={() => scrollToSection('about-mission')}>{content.aboutMission}</li>
              <li onClick={() => scrollToSection('about-vision')}>{content.aboutVision}</li>
              <li onClick={() => scrollToSection('about-team')}>{content.aboutTeam}</li>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => handleMouseEnter('whatwedo')}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/whatwedo"
            className={isActive('/whatwedo') ? 'active-link' : ''}
            onClick={handleLinkClick} 
          >
            {content.whatWeDoNav} 
          </Link>
          {hoveredTOC === 'whatwedo' && (
            <ul className="toc">
              {/* Used translated content for sub-menu items */}
              <li onClick={() => scrollToSection('education')}>{content.education}</li>
              <li onClick={() => scrollToSection('healthcare')}>{content.healthcare}</li>
              <li onClick={() => scrollToSection('empowerment')}>{content.empowerment}</li>
            </ul>
          )}
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
            className={isActive('/donation') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.donationNav}
          </Link>
        </li>
        <li>
          <Link
            to="/impact"
            className={isActive('/impact') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.impactNav}
          </Link>
        </li>
        <li>
          
          <Link
            to="/media"
            className={isActive('/impact') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            {content.impactNav}
          </Link>
        </li>
        
        <li>
          <button onClick={() => setLanguage("en")} className={language === "en" ? "active-link" : ""}>English</button>
          <button onClick={() => setLanguage("hi")} className={language === "hi" ? "active-link" : ""}>हिन्दी</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;