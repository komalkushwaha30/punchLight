import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you still have your CSS file for styling
import { assets } from "../assets/assets"; // Assuming this path is correct
import { LanguageContext } from '../LanguageProvider'; // Import LanguageContext

function Home() {
  const { content } = useContext(LanguageContext); // Use useContext to get content

  const images = [
    { image: assets.image30 },
    { image: assets.image34 },
    { image: assets.image17 },
    { image: assets.image4 },
    { image: assets.image5 },
    { image: assets.image6 },
    { image: assets.image7 },
    { image: assets.image8 },
    { image: assets.image33 },
    { image: assets.image9 },
    { image: assets.image10 },
    { image: assets.image11 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Define partners data with keys that can be looked up in the content object
  const partnersData = [
    { key: "partnerUrbanDevelopment", image: assets.image43 },
    { key: "partnerProjectPotential", image: assets.image44 },
    { key: "partnerPureIndiaTrust", image: assets.image1 },
    { key: "partnerLearningLinksFoundation", image: assets.image1 },
    { key: "partnerRuralDevelopmentInitiative", image: assets.image1 },
    { key: "partnerWomenEmpowermentSociety", image: assets.image1 },
    { key: "partnerEducationForAll", image: assets.image1 },
    { key: "partnerHealthCarePartners", image: assets.image1 },
  ];

  const PartnersSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= partnersData.length - 3 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex <= 0 ? partnersData.length - 3 : prevIndex - 1
      );
    };

    return (
      <section className="partners-section">
        <div className="partners-container">
          <h2 className="section-title">{content.partnersTitle}</h2> 
          <p className="section-subtitle">
            {content.partnersSubtitle}
          </p>

          <div className="carousel-container">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="partners-carousel">
              <div
                className="partners-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
              >
                {partnersData.map((partner, index) => (
                  <div key={index} className="partner-card">
                    <div className="partner-logo-container">
                      <img
                        src={partner.image}
                        alt={content[partner.key]} 
                        className="partner-logo"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="partner-placeholder"
                        style={{ display: "none" }}
                      >
                        <span>
                          {/* Use content for partner name, then extract initials */}
                          {content[partner.key]
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <p className="partner-name">{content[partner.key]}</p> 
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-btn next-btn" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="carousel-indicators">
            {Array.from({ length: Math.max(1, partnersData.length - 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              )
            )}
          </div>
        </div>
      </section>
    );
  };

  const partnerImages = [
    "https://static.wixstatic.com/media/aa3a70_2fe770ade7ed4a1bbe70b8cf54a3e82a~mv2.png/v1/fill/w_139,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa3a70_2fe770ade7ed4a1bbe70b8cf54a3e82a~mv2.png",
    "https://www.pureindia.org/wp-content/uploads/2023/08/cropped-pure-new-logo.png",
     // Add image59 or any other image for the 4th partner
  ];

  // Add a ref to the gallery section
  const galleryRef = useRef(null);

  // Scroll to #gallery if hash is present
  useEffect(() => {
    if (window.location.hash === "#gallery" && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // slight delay to ensure DOM is ready
    }
  }, []);

  return (
    <div className="home-container bg-white">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="hero-text">
          <h2>{content.heroMainTitle}</h2> 
          <h1>{content.heroMainTitle}</h1> 
          <p>
            {content.heroSubtitle} 
          </p>
          <div className="hero-buttons">
            <button
              className="btn orange"
              onClick={() => navigate("/donation")}
            >
              {content.donationButton}
            </button>
            <button
              className="btn bordered"
              onClick={() => navigate("/contact")}
            >
              {content.volunteerButton} 
            </button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      
      <section className="vision-section">
  <div className="vision-content">
    <h2>
      <span>{content.visionMissionProblemTitle.split('&')[0]}</span>
      &{content.visionMissionProblemTitle.split('&')[1]}
    </h2>
    <p>
      <strong>{content.visionLabel}</strong> {content.visionText}
    </p>
    <p>
      <strong>{content.missionLabel}</strong> {content.missionText}
    </p>
    <p>
      <strong>{content.problemStatementLabel}</strong> {content.problemStatementText}
    </p>
  </div>
  <div className="vision-image">
    <img src={assets.image11} alt="Empowerment" />
  </div>
</section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery" ref={galleryRef}>
        <div style={{textAlign: "center"}}>

        <h2 className="gallery-title" style={{ display: 'inline-block', borderBottom: '2px solid #000', paddingBottom: '4px' }}>{content.galleryTitle}</h2> 
        </div>
        
        <p className="gallery-subtitle">
          {content.gallerySubtitle} 
        </p>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div
              className="gallery-item"
              key={idx}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.image} alt={`gallery-${idx}`} />
              <div className="overlay">
                <span>{content.previewText}</span> 
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage.image} alt="enlarged" />
            </div>
          </div>
        )}
      </section>

      {/* Overlay Section */}
      <section className="overlay-section">
        <div className="overlay-content">
          <h2>
            {content.overlayTitle} 
          </h2>
          <p>
            {content.overlayP1} 
          </p>
          <p>
            {content.overlayP2} 
          </p>
          <p>
            {content.overlayP3} 
          </p>
          <p>
            <strong>
              {content.overlayBelieveText} 
            </strong>
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-container">
        <div className="testimonial-text">
          <h2>{content.testimonialTitle}</h2> 
          <p>
            {content.testimonialP1} 
          </p>
          <p>
            {content.testimonialP2} 
          </p>
          <p>
            {content.testimonialP3} 
          </p>
          <strong>{content.testimonialAuthor}</strong> 
        </div>
        <div className="testimonial-image">
          <img src={assets.image16} alt="Chandan Kumar Sah" />
          <div className="testimonial-name">
            <strong>{content.testimonialAuthor}</strong> 
            <br />
            {content.testimonialAuthorTitle} 
          </div>
        </div>
      </section>

      {/* Professional Partners Row Section */}
      <section className="partners-row-section">
        <h2 className="partners-row-title">{content.partnersRowTitle}</h2>
        <div className="partners-row">
          {partnerImages.map((img, idx) => (
            <div className="partner-logo-animated" key={idx}>
              <img
                src={img}
                alt={`Partner ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

// The original PartnersCarousel component was moved inside Home to be able to use content,
// but if it's reused elsewhere, it should be defined globally and content passed as prop.
// For now, I've integrated its logic directly or adjusted the call in Home.
// The ProfileCard component was not used in the Home component, so it remains as is.

