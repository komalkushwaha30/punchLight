import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path; // Check if the path matches the current route

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
        <li>
          <Link
            to="/"
            className={isActive('/') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive('/about') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/mission"
            className={isActive('/mission') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            Mission & Vision
          </Link>
        </li>
        <li>
          <Link
            to="/whatwedo"
            className={isActive('/whatwedo') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            What We Do
          </Link>
        </li>
        

        
        
        <li>
          <Link
            to="/goal"
            className={isActive('/goal') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            Goal
          </Link>
        </li>
        <li>
          <Link
            to="/testimonial"
            className={isActive('/testimonial') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className={isActive('/team') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'active-link' : ''}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
