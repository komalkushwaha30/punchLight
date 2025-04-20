import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="nav-home-link">Punchlight</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/vision">Vision</Link></li>
        <li><Link to="/pillar">Pillar</Link></li>
        <li><Link to="/story">Story</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/goal">Goal</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
