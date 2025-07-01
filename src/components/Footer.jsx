import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';
import './Footer.css';

const Footer = () => {
  const { content } = useContext(LanguageContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{content.hopeForAllTitle}</h3> {/* Translated */}
            <p>{content.hopeForAllDescription}</p> {/* Translated */}
          </div>

          <div className="footer-column">
            <h3>{content.quickLinks}</h3> {/* Translated */}
            <ul className="footer-links">
              <li><a href="#mission">{content.footerOurMission}</a></li> {/* Translated */}
              <li><a href="#programs">{content.programs}</a></li> {/* Translated */}
              <li><a href="#gallery">{content.gallery}</a></li> {/* Translated */}
              <li><a href="#donate">{content.donate}</a></li> {/* Translated */}
              <li><a href="#volunteer">{content.volunteer}</a></li> {/* Translated */}
            </ul>
          </div>

          <div className="footer-column">
            <h3>{content.contactUs}</h3> {/* Translated */}
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt"></i> Village- Araria Basti, Masjid Road, Ward No. 05, Panchayat- Araria Basti, Post- Araria Basti, Police Station- Araria, Dist - Araria - 854311 (Bihar) India</li>
              <li><i className="fas fa-phone"></i> +91 8709945694</li>
              <li><i className="fas fa-envelope"></i> namastepunchlight@gmail.com</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>{content.followUs}</h3> {/* Translated */}
            <div className="social-links">
              <a href="https://www.facebook.com/groups/205778818753718/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/Punchlight2024?t=MILObWcQ9NYuwwf1892hqQ&s=09" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/punchlight_foundation?igsh=YnR3bWlyN25zcWph" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/groups/9514415" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com/@punchlightchannel?si=oYX_5jkmfWjOlddA" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <button className="go-to-top" onClick={scrollToTop}>
          ↑ {content.goToTop} {/* Translated */}
        </button>

        <div className="copyright">
          <p>{content.copyright} | <a href="#">{content.privacyPolicy}</a> | <a href="#">{content.termsOfService}</a></p> {/* Translated */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
