import React, { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";
import "./About.css";

const About = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div className="page-container">
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">{content.heroTitle}</h1>
          <p className="hero-subtitle">{content.heroSubtitle}</p>
          <button className="hero-button">{content.donateNow}</button>
        </div>
      </section>

      {/* === ENHANCED ABOUT SECTION === */}
      <section className="about-section-enhanced">
        <div className="about-enhanced-container">
          <div className="about-enhanced-image">
            <img
              src="https://cdn.dribbble.com/users/5532299/screenshots/17713203/media/6257c326ff2a26d7ed07de14292f3b93.jpg?resize=400x0"
              alt="Punchlight Foundation"
            />
          </div>
          <div className="about-enhanced-text">
            <h2>{content.aboutPunchlightTitle}</h2>
            <div className="divider"></div>
            <p>{content.aboutPunchlightP1}</p>
            <p>{content.aboutPunchlightP2}</p>
            <p>{content.aboutPunchlightP3}</p>
          </div>
        </div>
      </section>

      {/* === LEGAL & REGISTRATION SECTION === */}
      <section className="legal-section">
        <div className="legal-container">
          <h2 className="legal-heading">{content.legalHeading}</h2>
          <div className="legal-grid">
            <div className="legal-item">
              <strong>{content.trustAct}</strong>
              <span>{content.trustActDetail}</span>
            </div>
            <div className="legal-item">
              <strong>{content.trustRegistration}</strong>
              <span>{content.trustRegistrationDetail}</span>
            </div>
            <div className="legal-item">
              <strong>{content.panNo}</strong>
              <span>{content.panNoDetail}</span>
            </div>
            <div className="legal-item">
              <strong>{content.ngoDarpanUid}</strong>
              <span>{content.ngoDarpanUidDetail}</span>
            </div>
            <div className="legal-item">
              <strong>{content.twelveANo}</strong>
              <span>{content.twelveANoDetail}</span>
            </div>
            <div className="legal-item">
              <strong>{content.eightyGNo}</strong>
              <span>{content.eightyGNoDetail}</span>
            </div>
            <div className="legal-item">
              <strong>{content.gstin}</strong>
              <span>{content.gstinDetail}</span>
            </div>
          </div>
        </div>
      </section>

      {/* === ACTION BOXES === */}
      <section className="action-boxes">
        <div className="box">{content.actionBoxDonate}</div>
        <div className="box">{content.actionBoxGetInvolved}</div>
        <div className="box">{content.actionBoxVolunteer}</div>
      </section>

      {/* === OUR APPROACH SECTION === */}
      <section className="approach-section">
        <div className="approach-container">
          <h2 className="approach-heading">{content.approachHeading}</h2>
          <div className="approach-divider"></div>
          <p className="approach-text">{content.approachText}</p>
        </div>
      </section>

      {/* === OUR CAUSES SECTION === */}
      <section className="causes-section">
        <div className="causes-container">
          {/* Our Mission Block */}
          <div className="cause-block">
            <div className="cause-content">
              <h2 className="cause-heading">{content.ourMissionHeading}</h2>
              <p className="cause-description">
                {content.ourMissionDescription}
              </p>
            </div>
            <div className="cause-image">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our Mission - helping communities"
              />
            </div>
          </div>

          {/* Our Story Block */}
          <div className="cause-block reverse">
            <div className="cause-image">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our Story - students learning"
              />
            </div>
            <div className="cause-content">
              <h2 className="cause-heading">{content.ourStoryHeading}</h2>
              <p className="cause-description">
                {content.ourStoryDescription}
              </p>
            </div>
          </div>

          {/* Learning-Centered Empowerment Block */}
          <div className="cause-block">
            <div className="cause-content">
              <h2 className="cause-heading">
                {content.learningEmpowermentHeading}
              </h2>
              <p className="cause-description">
                {content.learningEmpowermentDescription}
              </p>
            </div>
            <div className="cause-image">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Learning and Education"
              />
            </div>
          </div>

          {/* Theatre as Tool Block */}
          <div className="cause-block reverse">
            <div className="cause-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Theatre Performance"
              />
            </div>
            <div className="cause-content">
              <h2 className="cause-heading">{content.theatreAsToolHeading}</h2>
              <p className="cause-description">
                {content.theatreAsToolDescription}
              </p>
            </div>
          </div>

          {/* Community-Led Change Block */}
          <div className="cause-block">
            <div className="cause-content">
              <h2 className="cause-heading">
                {content.communityLedChangeHeading}
              </h2>
              <p className="cause-description">
                {content.communityLedChangeDescription}
              </p>
            </div>
            <div className="cause-image">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Community Leadership"
              />
            </div>
          </div>

          {/* Equity and Inclusion Block */}
          <div className="cause-block reverse">
            <div className="cause-image">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Equity and Inclusion"
              />
            </div>
            <div className="cause-content">
              <h2 className="cause-heading">{content.equityInclusionHeading}</h2>
              <p className="cause-description">
                {content.equityInclusionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;