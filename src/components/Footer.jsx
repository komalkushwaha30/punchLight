import React, { useContext } from 'react'; // Import useContext
import { LanguageContext } from '../LanguageProvider'; // Import LanguageContext
import './Footer.css';

const Footer = () => {
  const { content } = useContext(LanguageContext); // Access the content object

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{content.hopeForAllTitle}</h3> 
            <p>{content.hopeForAllDescription}</p> 
          </div>

          <div className="footer-column">
            <h3>{content.quickLinks}</h3> 
            <ul className="footer-links">
              <li><a href="#mission">{content.footerOurMission}</a></li> 
              <li><a href="#programs">{content.programs}</a></li> 
              <li><a href="#gallery">{content.gallery}</a></li> 
              <li><a href="#donate">{content.donate}</a></li> 
              <li><a href="#volunteer">{content.volunteer}</a></li> 
            </ul>
          </div>

          <div className="footer-column">
            <h3>{content.contactUs}</h3> 
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt"></i> Village- Araria Basti, Masjid Road, Ward No. 05, Panchayat- Araria Basti, Post- Araria Basti, Police Station- Araria, Dist - Araria - 854311 (Bihar) India</li>
              <li><i className="fas fa-phone"></i> +91 8709945694</li>
              <li><i className="fas fa-envelope"></i> namastepunchlight@gmail.com</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>{content.followUs}</h3> 
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <button className="go-to-top" onClick={scrollToTop}>
          ↑ {content.goToTop} 
        </button>

        <div className="copyright">
          <p>{content.copyright} | <a href="#">{content.privacyPolicy}</a> | <a href="#">{content.termsOfService}</a></p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;