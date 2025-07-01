import React, { useState, useRef, useContext } from "react"; // <-- add useContext
import "./WhatWeDo.css";
import { assets } from "../assets/assets";
import { LanguageContext } from "../LanguageProvider"; // Import LanguageContext

const WhatWeDo = () => {
  const { content } = useContext(LanguageContext); // Use useContext to get content

  const [activeTab, setActiveTab] = useState(0);
  const impactRef = useRef(null);

  const colors = {
    primary: "#2429b6",
    primaryLight: "#8b5cf6",
    secondary: "#454ada",
    accent: "#f97316",
    success: "#10b981",
    warning: "#eab308",
    dark: "#0f172a",
    darkMedium: "#1e293b",
    darkLight: "#334155",
    light: "#f1f5f9",
    white: "#ffffff",
    text: "#dbdbe1",
    textDark: "#334155",
    pink : "#f44273",
    blue : "#0b1dfe",
    white:"#fff"
  };

  // Refactor impactStats to use content keys
  const impactStats = [
    {
      number: "1000",
      labelKey: "wwdStatLivesTransformedLabel",
      icon: "👥",
      color: colors.pink,
      descriptionKey: "wwdStatLivesTransformedDescription",
    },
    {
      number: "3 ",
      labelKey: "wwdStatDistrictsCoveredLabel",
      icon: "🌺",
      color: colors.secondary,
      descriptionKey: "wwdStatDistrictsCoveredDescription",
    },
    {
      number: "4",
      labelKey: "wwdStatPanchayatsLabel",
      icon: "🎯",
      color: colors.accent,
      descriptionKey: "wwdStatPanchayatsDescription",
    },
    {
      number: "35+",
      labelKey: "wwdStatVillagesLabel",
      icon: "🤝",
      color: colors.success,
      descriptionKey: "wwdStatVillagesDescription",
    },
  ];

  // Refactor programTabs to use content keys
  const programTabsData = [
    {
      titleKey: "wwdProgramHealthWellbeingTitle", // Matches original `title` for Health
      subtitleKey: "wwdProgramHealthWellbeingSubtitle", // Matches original `subtitle` for Health
      content: {
        descriptionKey: "wwdProgramHealthWellbeingDescription",
        featuresKeys: [
          "wwdProgramHealthWellbeingFeature1",
          "wwdProgramHealthWellbeingFeature2",
          "wwdProgramHealthWellbeingFeature3",
          "wwdProgramHealthWellbeingFeature4",
        ],
        impactKey: "wwdProgramHealthWellbeingImpact",
        icon: "❤️",
      },
    },
    {
      titleKey: "wwdProgramWomenEmpowermentTitle", // Matches original `title` for Livelihood (now Women Empowerment)
      subtitleKey: "wwdProgramWomenEmpowermentSubtitle", // Matches original `subtitle` for Livelihood
      content: {
        descriptionKey: "wwdProgramWomenEmpowermentDescription",
        featuresKeys: [
          "wwdProgramWomenEmpowermentFeature1",
          "wwdProgramWomenEmpowermentFeature2",
          "wwdProgramWomenEmpowermentFeature3",
          "wwdProgramWomenEmpowermentFeature4",
        ],
        impactKey: "wwdProgramWomenEmpowermentImpact",
        icon: "💪",
      },
    },
    {
      titleKey: "wwdProgramEnvironmentalConservationTitle", // Environmental Conservation
      subtitleKey: "wwdProgramEnvironmentalConservationSubtitle",
      content: {
        descriptionKey: "wwdProgramEnvironmentalConservationDescription",
        featuresKeys: [
          "wwdProgramEnvironmentalConservationFeature1",
          "wwdProgramEnvironmentalConservationFeature2",
          "wwdProgramEnvironmentalConservationFeature3",
          "wwdProgramEnvironmentalConservationFeature4",
        ],
        impactKey: "wwdProgramEnvironmentalConservationImpact",
        icon: "🌳",
      },
    },
    {
      titleKey: "wwdProgramCleanlinessSanitationTitle", // Cleanliness & Sanitation
      subtitleKey: "wwdProgramCleanlinessSanitationSubtitle",
      content: {
        descriptionKey: "wwdProgramCleanlinessSanitationDescription",
        featuresKeys: [
          "wwdProgramCleanlinessSanitationFeature1",
          "wwdProgramCleanlinessSanitationFeature2",
          "wwdProgramCleanlinessSanitationFeature3",
          "wwdProgramCleanlinessSanitationFeature4",
        ],
        impactKey: "wwdProgramCleanlinessSanitationImpact",
        icon: "💧",
      },
    },
    {
      titleKey: "wwdProgramCommunityAwarenessTitle", // Community Awareness
      subtitleKey: "wwdProgramCommunityAwarenessSubtitle",
      content: {
        descriptionKey: "wwdProgramCommunityAwarenessDescription",
        featuresKeys: [
          "wwdProgramCommunityAwarenessFeature1",
          "wwdProgramCommunityAwarenessFeature2",
          "wwdProgramCommunityAwarenessFeature3",
          "wwdProgramCommunityAwarenessFeature4",
        ],
        impactKey: "wwdProgramCommunityAwarenessImpact",
        icon: "🗣️",
      },
    },
    {
      titleKey: "wwdProgramEducationForAllTitle", // Education for All
      subtitleKey: "wwdProgramEducationForAllSubtitle",
      content: {
        descriptionKey: "wwdProgramEducationForAllDescription",
        featuresKeys: [
          "wwdProgramEducationForAllFeature1",
          "wwdProgramEducationForAllFeature2",
          "wwdProgramEducationForAllFeature3",
          "wwdProgramEducationForAllFeature4",
        ],
        impactKey: "wwdProgramEducationForAllImpact",
        icon: "📚",
      },
    },
  ];

  // Refactor pillars to use content keys and image icons
  const pillarsData = [
    {
      titleKey: "wwdEmpowermentPillarTitle",
      descriptionKey: "wwdEmpowermentPillarDescription",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a1.svg", // Lightning bolt SVG
      color: colors.primary,
    },
    {
      titleKey: "wwdCommunityEngagementPillarTitle",
      descriptionKey: "wwdCommunityEngagementPillarDescription",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f30d.svg", // Globe SVG
      color: colors.pink,
    },
    {
      titleKey: "wwdLeadershipDevelopmentPillarTitle",
      descriptionKey: "wwdLeadershipDevelopmentPillarDescription",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f451.svg", // Crown SVG
      color: colors.accent,
    },
    {
      titleKey: "wwdPartnershipsPillarTitle",
      descriptionKey: "wwdPartnershipsPillarDescription",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f91d.svg", // Handshake SVG
      color: colors.success,
    },
    {
      titleKey: "wwdImpactPillarTitle",
      descriptionKey: "wwdImpactPillarDescription",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3af.svg", // Dartboard SVG
      color: colors.warning,
    },
    {
      titleKey: "wwdInnovationPillarTitle",
      descriptionKey: "wwdInnovationPillarDescription",
      icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg", // Rocket SVG
      color: colors.primaryLight,
    },
  ];

  const ProgramSection = () => {
    return (
      <section
        className="program-section program-bg"
        style={{
          backgroundImage: `url(${assets.image13})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="program-container">
          <h2 className="section-heading">{content.wwdProgramsHeading}</h2>{" "}
          {/* Translated */}
          <p className="section-subtext">
            {content.wwdProgramsSubtext} {/* Translated */}
          </p>
          {programTabsData.map((program, idx) => (
            <div key={idx} className="program-block">
              <div className="program-content">
                <div>
                  <h3 className="program-title">{content[program.titleKey]}</h3>{" "}
                  {/* Translated */}
                  <p className="program-sub">
                    ({content[program.subtitleKey]})
                  </p>{" "}
                  {/* Translated */}
                  <p className="program-desc">
                    {content[program.content.descriptionKey]}
                  </p>{" "}
                  {/* Translated */}
                  <div className="program-impact">
                    {content[program.content.impactKey]}
                  </div>{" "}
                  {/* Translated */}
                </div>
                <div>
                  <h4 className="program-feature-heading">Key Features:</h4>{" "}
                  {/* Static for now, can be translated if needed */}
                  <ul className="program-features">
                    {program.content.featuresKeys.map((itemKey, featureIdx) => (
                      <li key={featureIdx} className="feature-card">
                        {content[itemKey]} {/* Translated */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  function PillarsSection() {
    return (
      <section className="pillars-wrapper">
        <h2 className="pillars-heading">{content.wwdPillarsHeading}</h2>
        <div className="pillars-grid">
          {pillarsData.map((pillar, index) => (
            <div
              className="pillar-card"
              key={index}
              style={{
                borderBottom: `6px solid ${pillar.color}`,
                boxShadow: "0 4px 24px 0 rgba(26,52,77,0.08)",
                background: "white",
                color: "#fff",
              }}
            >
              <img
                src={pillar.icon}
                alt={content[pillar.titleKey]}
                className="pillar-icon"
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 12,
                  background: "#fff",
                  borderRadius: "50%",
                  padding: 8,
                  boxShadow: "0 2px 8px 0 rgba(26,52,77,0.10)",
                  objectFit: "contain",
                }}
              />
              <h3 className="pillar-title">{content[pillar.titleKey]}</h3>
              <p className="pillar-description">
                {content[pillar.descriptionKey]}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const ImpactSection = () => {
    return (
      <div className="impact-section">
        <div className="magazine-container">
          <h2>{content.wwdImpactSectionHeading}</h2> {/* Translated */}
          <p className="intro">
            {content.wwdImpactSectionIntro} {/* Translated */}
          </p>
          <div className="magazine-layout">
            {/* Left Main Block */}
            <div className="main-feature">
              <img
                src={assets.image8}
                alt={content.wwdImpactPeopleTitle} // Translated alt text
              />
            </div>

            {/* Right Text Content */}
            <div className="side-content">
              <h3>{content.wwdImpactPeopleTitle}</h3> {/* Translated */}
              <p>
                {content.wwdImpactPeopleDescription} {/* Translated */}
              </p>
            </div>

            {/* Bottom Cards */}
            <div className="bottom-row">
              <div className="card">
                <img
                  src={assets.image10}
                  alt={content.wwdImpactModelsTitle} // Translated alt text
                />
                <h4>{content.wwdImpactModelsTitle}</h4> {/* Translated */}
                <p>
                  {content.wwdImpactModelsDescription} {/* Translated */}
                </p>
              </div>

              <div className="card">
                <img
                  src={assets.image1}
                  alt={content.wwdImpactScalingUpTitle} // Translated alt text
                />
                <h4>{content.wwdImpactScalingUpTitle}</h4> {/* Translated */}
                <p>
                  {content.wwdImpactScalingUpDescription} {/* Translated */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Refactor goals to use content keys
  const goalsData = [
    {
      icon: "📚",
      titleKey: "wwdGoalEducationTitle",
      descriptionKey: "wwdGoalEducationDescription",
    },
    {
      icon: "💙",
      titleKey: "wwdGoalHealthTitle",
      descriptionKey: "wwdGoalHealthDescription",
    },
    {
      icon: "💪",
      titleKey: "wwdGoalWomenEmpowermentTitle",
      descriptionKey: "wwdGoalWomenEmpowermentDescription",
    },
    {
      icon: "🌳",
      titleKey: "wwdGoalEnvironmentTitle",
      descriptionKey: "wwdGoalEnvironmentDescription",
    },
    {
      icon: "✨",
      titleKey: "wwdGoalHygieneTitle",
      descriptionKey: "wwdGoalHygieneDescription",
    },
    {
      icon: "🗣️",
      titleKey: "wwdGoalAwarenessTitle",
      descriptionKey: "wwdGoalAwarenessDescription",
    },
  ];

  function GoalsSection() {
    return (
      <section className="goals-wrapper">
        <div className="goal-grid">
          {goalsData.map((goal, index) => (
            <div className="goal-card" key={index}>
              <div className="goal-icon">{goal.icon}</div>
              <h3 className="goal-title">{content[goal.titleKey]}</h3>{" "}
              {/* Translated */}
              <p
                className="goal-desc"
                dangerouslySetInnerHTML={{
                  __html: content[goal.descriptionKey],
                }} // Translated
              ></p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="whatwedo-container">
      {/* Hero Section */}
      <section className="hero-section-what">
        <div className="hero-section-grid-wrapper">
          <div className="hero-section-grid">
            <div className="hero-text">
              <h1 className="hero-heading">{content.wwdHeroHeading}</h1>{" "}
              {/* Translated */}
              <p className="hero-subtext">
                {content.wwdHeroSubtext} {/* Translated */}
              </p>
              <button
                className="explore-button"
                onClick={() =>
                  impactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {content.wwdExploreImpactButton} {/* Translated */}
              </button>
            </div>
            <div className="stats-grid">
              {impactStats.map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div
                    className="stat-number"
                    style={{ color: stat.color, fontWeight: 700 }}
                  >
                    {stat.number}
                  </div>
                  <div className="stat-label">{content[stat.labelKey]}</div>{" "}
                  {/* Translated */}
                  <div className="stat-desc" style={{color : colors.white}}>
                    {content[stat.descriptionKey]}
                    
                  </div>{" "}
                  {/* Translated */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <ProgramSection />

      {/* Pillars Section */}
      <PillarsSection />

      {/* Impact Section with ref */}
      <div ref={impactRef}>
        <ImpactSection />
      </div>

      {/* OUR JOURNEY SECTION */}
      <section className="journey-section">
        <div className="journey-container">
          <h2 className="section-heading-light">{content.wwdGoalsHeading}</h2>{" "}
          {/* Translated */}
          <p className="section-subtext-light">
            {content.wwdGoalsSubtext} {/* Translated */}
          </p>
          <div className="journey-block">
            <div className="journey-text">
              <h3 className="journey-title" style={{ color: colors.accent }}>
                {content.wwdVision2025Title} {/* Translated */}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: content.wwdVision2025Description,
                }}
              >
                {/* Translated, uses dangerouslySetInnerHTML because of bold text */}
              </p>
            </div>
            <div
              className="journey-icon"
              
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjk9ZnVHLvlJKay80hXEPCBZpYpxPKD8oG3A&s"
                alt=""
              />
            </div>
          </div>
          <div className="journey-block reverse">
            <div
              className="journey-icon"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              }}
            >
              🌟
            </div>
            <div className="journey-text">
              <h3 className="journey-title" style={{ color: colors.secondary }}>
                {content.wwdTheVisionTitle} {/* Translated */}
              </h3>
              <p>
                {content.wwdTheVisionDescription} {/* Translated */}
              </p>
              <blockquote className="journey-quote">
                {content.wwdTheVisionQuote} {/* Translated */}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <GoalsSection />
    </div>
  );
};

export default WhatWeDo;
