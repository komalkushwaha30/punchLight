import React, { useState } from "react";
import "./Home.css";
import PartnersSection from "./PartnersSection";
import ProgramsSection from "./ProgramsSection";

function Home() {
  const images = [
    "https://media.gettyimages.com/id/496276728/photo/group-of-happy-gypsy-indian-children-desert-village-india.jpg?s=612x612&w=gi&k=20&c=B37mpIc7Y2xUY6yNRLfnuu5NCHd7O3oD4MaaJ--arDI=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrRD1_YO-J5F4Q_1l9Q6ODKSqqO5vnSrGdQ&s",
    "https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww",
    "https://st4.depositphotos.com/1561509/20296/i/1600/depositphotos_202969004-stock-photo-mandu-india-february-2017-unidentified.jpg",
    "https://www.shutterstock.com/image-photo/unidentified-poor-children-playing-posing-260nw-2414721027.jpg",
    "https://www.shutterstock.com/image-photo/kenya-rusinga-island-utajo-village-600nw-1180465816.jpg",
    "https://t3.ftcdn.net/jpg/05/98/10/80/360_F_598108068_o04Tbckl8FmgD0Cx6rnZuhjyJqLTOan6.jpg",
    "https://images.pexels.com/photos/13819209/pexels-photo-13819209.jpeg?cs=srgb&dl=pexels-mnannapaneni-13819209.jpg&fm=jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        {/* Video Background */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div className="hero-text">
          <h2>Non profit Charity Foundation</h2>
          <h1>Raise Your Helping Hand</h1>
          <p>
            Healthcare organizations can provide medical treatments &
            essentials, supplies like clean water and simple things to grow.
          </p>
          <div className="hero-buttons">
            <button className="btn orange">Popular Causes</button>
            <button className="btn bordered">Become a Volunteer</button>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">Gallery</h2>
        <p className="gallery-subtitle">Lorem ipsum dolor sit amet.</p>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div
              className="gallery-item"
              key={idx}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`gallery-${idx}`} />
              <div className="overlay">
                <span>👁 Preview</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage} alt="enlarged" />
            </div>
          </div>
        )}
      </section>

      <section className="vision-section">
        <div className="vision-content">
          <h2>
            <span>Vision, Mission</span> & Problem Statement
          </h2>
          <p>
            <strong>Vision:</strong> To build an inclusive and empowered society
            by using theatre, education, and community dialogue—especially for
            women and girls in rural India.
          </p>
          <p>
            <strong>Mission:</strong> To enable awareness, expression, and
            self-reliance among marginalized communities through creative and
            participatory platforms.
          </p>
          <p>
            <strong>Problem Statement:</strong> In rural India, especially in
            districts like Araria, women and youth lack access to quality
            education, health awareness, skill-building, and public platforms
            for voice and leadership.
          </p>
        </div>
        <div className="vision-image">
          <img
            src="https://images.pexels.com/photos/13819209/pexels-photo-13819209.jpeg?cs=srgb&dl=pexels-mnannapaneni-13819209.jpg&fm=jpg"
            alt="Empowerment"
          />
        </div>
      </section>

      <section className="testimonial-container">
        <div className="testimonial-text">
          <h2>Chandan Kumar Sah – An Inspiring Journey</h2>
          <p>
            "Punchlight Foundation played a vital role in changing my life.
            Earlier I used to sell vegetables from a handcart all the time, but
            after joining the organization, I got a chance to work as an actor
            in street plays. This experience increased my confidence and skills.
          </p>
          <p>
            Today, with the help of Punchlight Foundation, I am working as
            Junior Officer, Skill Enhancement & Entrepreneurship at Learning
            Links Foundation. My financial condition has improved, and my family
            is now doing well.
          </p>
          <p>
            I thank Punchlight Foundation from the bottom of my heart for giving
            me this opportunity and recognizing my potential."
          </p>
          <strong>— Chandan Kumar Sah</strong>
        </div>
        <div className="testimonial-image">
          <img
            src="https://images.pexels.com/photos/14049052/pexels-photo-14049052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Chandan Kumar Sah"
          />
          <div className="testimonial-name">
            <strong>Chandan Kumar Sah</strong>
            <br />
            Junior Officer, Learning Links Foundation
          </div>
        </div>
      </section>
      <section className="overlay-section">
        <div className="overlay-content">
          <h2>
            We believe that lasting change begins when communities find their
            voice.
          </h2>
          <p>
            At Punchlight Foundation, we harness the power of street theatre,
            education, and community dialogue to ignite awareness and action in
            rural India.
          </p>
          <p>
            Our focus is on empowering women and youth in the most underserved
            districts through participatory and creative means.
          </p>
          <p>
            From performing plays on health, gender, and livelihoods in village
            squares, to building local learning spaces and nurturing young
            educators and artists — we work hand-in-hand with communities to
            spark dignity, confidence, and self-reliance.
          </p>
          <p>
            <strong>
              Because we believe: real change is not delivered — it's discovered
              together.
            </strong>
          </p>
        </div>
      </section>
      <section>
        <PartnersSection/>
        
        
      </section>
    </div>
  );
}

export default Home;
