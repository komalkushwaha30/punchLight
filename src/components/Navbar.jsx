import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <a href="#home" className="nav-home-link" onClick={handleLinkClick}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
            alt="Punchlight Logo"
            className="nav-logo-img"
          />
          <span className="nav-logo-text">Punchlight</span>
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
        <li><a href="#mission" onClick={handleLinkClick}>Mission & Vision</a></li>
        <li><a href="#pillar" onClick={handleLinkClick}>Pillar</a></li>
        <li><a href="#story" onClick={handleLinkClick}>Story</a></li>
        <li><a href="#project" onClick={handleLinkClick}>Project</a></li>
        <li><a href="#goal" onClick={handleLinkClick}>Goal</a></li>
        <li><a href="#testimonial" onClick={handleLinkClick}>Testimonial</a></li>
        <li><a href="#team" onClick={handleLinkClick}>Team</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
