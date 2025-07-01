// Refactored and improved About component with cleaner design sections and animations
import React, { useContext } from "react"; // Import useContext
import { Link } from "react-router-dom";
import "../assets/assets"; // Ensure this path is correct

import "./About.css"; // Assuming you still have your CSS file for styling
import { assets } from "../assets/assets"; // Assuming this path is correct
import { LanguageContext } from "../LanguageProvider"; // Import LanguageContext

function About() {
  const { content } = useContext(LanguageContext); // Use useContext to get content

  // Refactored aboutContent to use keys from the LanguageContext content object
  const aboutDetailedContent = [
    {
      headingKey: "approachLearningCenteredHeading",
      descriptionKey: "approachLearningCenteredDescription",
      img: assets.image4,
    },
    {
      headingKey: "approachTheatreToolHeading",
      descriptionKey: "approachTheatreToolDescription",
      img: assets.image5,
      reverse: true,
    },
    {
      headingKey: "approachCommunityLedHeading",
      descriptionKey: "approachCommunityLedDescription",
      img: assets.image6,
    },
    {
      headingKey: "approachEquityInclusionHeading",
      descriptionKey: "approachEquityInclusionDescription",
      img: assets.image7,
      reverse: true,
    },
    {
      headingKey: "approachCollaborationHeading",
      descriptionKey: "approachCollaborationDescription",
      img: assets.image8,
    },
    {
      headingKey: "approachCulturalSensitivityHeading",
      descriptionKey: "approachCulturalSensitivityDescription",
      img: assets.image9,
      reverse: true,
    },
  ];

  // Legal details mapping to content keys for translation
  const legalDetails = [
    { titleKey: "legalTrustAct", detailKey: "legalTrustActDetail" },
    {
      titleKey: "legalTrustRegistration",
      detailKey: "legalTrustRegistrationDetail",
    },
    { titleKey: "legalPAN", detailKey: "legalPANDetail" },
    { titleKey: "legalNGODarpan", detailKey: "legalNGODarpanDetail" },
    { titleKey: "legal12ACertificate", detailKey: "legal12ACertificateDetail" },
    { titleKey: "legal80GCertificate", detailKey: "legal80GCertificateDetail" },
    { titleKey: "legalGSTIN", detailKey: "legalGSTINDetail" },
  ];

  // Safely extract title parts for 'About Punchlight Foundation' section
  const aboutTitle = content.aboutPunchlightTitle || ""; // Ensure it's a string
  const aboutTitleParts = aboutTitle.split(" ");
  const aboutFirstPart = aboutTitleParts[0] || "";
  const aboutRemainingParts = aboutTitleParts.slice(1).join(" ") || "";

  // Safely extract founder story parts for 'Sanjay Kumar Thakur'
  const founderStory1 = content.founderStoryP1 || "";
  const founderStory1Parts = founderStory1.split("Sanjay Kumar Thakur");
  const founderStory1Before = founderStory1Parts[0] || "";
  const founderStory1After =
    founderStory1Parts.length > 1
      ? founderStory1Parts.slice(1).join("Sanjay Kumar Thakur")
      : "";

  // Safely extract founder story parts for 'Neeraj Kumar' and 'education, health, hygiene, and street theatre'
  const founderStory2 = content.founderStoryP2 || "";
  const founderStory2PartsNeeraj = founderStory2.split("Neeraj Kumar");
  const founderStory2BeforeNeeraj = founderStory2PartsNeeraj[0] || "";
  const founderStory2AfterNeeraj =
    founderStory2PartsNeeraj.length > 1
      ? founderStory2PartsNeeraj.slice(1).join("Neeraj Kumar")
      : "";

  const founderStory2PartsEdu = founderStory2AfterNeeraj.split(
    "education, health, hygiene, and street theatre"
  );
  const founderStory2BeforeEdu = founderStory2PartsEdu[0] || "";
  const founderStory2AfterEdu =
    founderStory2PartsEdu.length > 1
      ? founderStory2PartsEdu
          .slice(1)
          .join("education, health, hygiene, and street theatre")
      : "";

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `url(${assets.image19}) no-repeat center center/cover`,
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">{content.aboutHeroTitle}</h1>{" "}
          {/* Translated */}
          <p className="hero-subtitle">
            {content.aboutHeroSubtitle} {/* Translated */}
          </p>
          <button className="hero-button">{content.aboutUsButton}</button>{" "}
          {/* Translated */}
        </div>
      </section>

      {/* About Section Enhanced */}
      <section className="about-section-enhanced" id="about-mission">
        {" "}
        {/* Added ID for Navbar scroll */}
        <div className="about-enhanced-container">
          <div className="about-enhanced-image">
            <img src={assets.image25} alt="Punchlight Foundation" />
          </div>
          <div className="about-enhanced-text">
            <h2>
              {aboutFirstPart}{" "}
              {aboutRemainingParts && <span>{aboutRemainingParts}</span>}{" "}
              {/* Safer split handling */}
            </h2>
            <div className="divider"></div>
            <p id="about-vision">{content.aboutPunchlightP1}</p>{" "}
            {/* Translated, added ID for Navbar scroll */}
            <p>{content.aboutPunchlightP2}</p> {/* Translated */}
            <p>
              {content.aboutPunchlightP3.split("street theatre")[0]}
              <strong>street theatre</strong>
              {content.aboutPunchlightP3.split("street theatre")[1]}{" "}
              {/* Translated, keeping strong tag */}
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="founding-story-alt-section" id="about-team">
        {" "}
        {/* Added ID for Navbar scroll (assuming this section relates to team/founders) */}
        <div className="founding-story-alt-container">
          <div className="founder-image-wrapper">
            <img src={assets.image10} alt="Founders of Punchlight Foundation" />
          </div>
          <div className="founder-text-wrapper">
            <h2 className="founder-heading">{content.foundingStoryHeading}</h2>{" "}
            {/* Translated */}
            <p className="founder-subtitle">
              {content.foundingStorySubtitle}
            </p>{" "}
            {/* Translated */}
            <div className="founder-text-body">
              <p>
                {founderStory1Before}
                <strong>Sanjay Kumar Thakur</strong>
                {founderStory1After} {/* Safer split handling */}
              </p>
              <p>
                {founderStory2BeforeNeeraj}
                <strong>Neeraj Kumar</strong>
                {founderStory2BeforeEdu}
                <strong>education, health, hygiene, and street theatre</strong>
                {founderStory2AfterEdu} {/* Safer split handling */}
              </p>
              <p>
                {content.founderStoryP3} {/* Translated */}
              </p>
              <blockquote className="founder-quote">
                {content.founderQuote} {/* Translated */}
              </blockquote>
            </div>
          </div>
        </div>
      </section>


      {/* Action Boxes */}
      <section className="action-boxes">
        <Link to="/donation" className="box">
          {content.donateNowLink} {/* Translated */}
        </Link>
        <Link to="/team" className="box">
          {content.getInvolvedLink} {/* Translated */}
        </Link>
        <Link to="/contact" className="box">
          {content.contactLink} {/* Translated */}
        </Link>
      </section>
      
      {/* Legal Section */}
      <section className="legal-section">
        <div className="legal-container">
          <h2 className="legal-heading">{content.legalHeading}</h2>
          {/* Translated */}
          <p className="legal-subheading">
            {content.legalSubheading}
          </p>
          <div className="legal-container">
            <div className="legal-directional-row">
              <div className="legal-directional">
                <div className="legal-banner">
                  <h3 className="legal-banner-title">{content.legalTrustAct}</h3>
                  <p className="legal-banner-text">{content.legalTrustActDetail}</p>
                </div>
              </div>
              <div className="legal-directional">
                <div className="legal-banner">
                  <h3 className="legal-banner-title">{content.legalTrustRegistration}</h3>
                  <p className="legal-banner-text">{content.legalTrustRegistrationDetail}</p>
                </div>
              </div>
              <div className="legal-directional">
                <div className="legal-banner">
                  <h3 className="legal-banner-title">{content.legalPAN}</h3>
                  <p className="legal-banner-text">{content.legalPANDetail}</p>
                </div>
              </div>
              <div className="legal-directional">
                <div className="legal-banner">
                  <h3 className="legal-banner-title">{content.legalNGODarpan}</h3>
                  <p className="legal-banner-text">{content.legalNGODarpanDetail}</p>
                </div>
              </div>
            </div>

            <div className="legal-content">
              <div className="legal-main-body">
                <img
                  src={assets.image9}
                  alt="Legal Banner"
                  className="legal-main-image"
                />
              </div>

              <div className="legal-sidebar">
                <div className="legal-directional">
                  <div className="legal-banner">
                    <h3 className="legal-banner-title">{content.legal12ACertificate}</h3>
                    <p className="legal-banner-text">{content.legal12ACertificateDetail}</p>
                  </div>
                </div>
                <div className="legal-directional">
                  <div className="legal-banner">
                    <h3 className="legal-banner-title">{content.legal80GCertificate}</h3>
                    <p className="legal-banner-text">{content.legal80GCertificateDetail}</p>
                  </div>
                </div>
                <div className="legal-directional">
                  <div className="legal-banner">
                    <h3 className="legal-banner-title">{content.legalGSTIN}</h3>
                    <p className="legal-banner-text">{content.legalGSTINDetail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Approach Section (Summary) */}
      <section className="approach-section">
        <div className="approach-container">
          <h2 className="approach-heading">{content.approachHeading}</h2>{" "}
          {/* Translated */}
          <div className="approach-divider"></div>
          <p className="approach-text">
            {content.approachText} {/* Translated */}
          </p>
        </div>
      </section>

      {/* Causes Section (Detailed Approach) */}
      <section className="causes-section">
        <div className="causes-container">
          {aboutDetailedContent.map((cause, i) => (
            <div
              key={i}
              className={`cause-block ${cause.reverse ? "reverse" : ""}`}
            >
              <div className="cause-content">
                <h2 className="cause-heading">{content[cause.headingKey]}</h2>{" "}
                {/* Translated */}
                <p className="cause-description">
                  {content[cause.descriptionKey]}
                </p>{" "}
                {/* Translated */}
              </div>
              <div className="cause-image">
                <img src={cause.img} alt={content[cause.headingKey]} />{" "}
                {/* Translated alt text */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

