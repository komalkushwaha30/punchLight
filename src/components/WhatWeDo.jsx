import React, { useState } from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const colors = {
    primary: '#6366f1',
    primaryLight: '#8b5cf6',
    secondary: '#06b6d4',
    accent: '#f97316',
    success: '#10b981',
    warning: '#eab308',
    dark: '#0f172a',
    darkMedium: '#1e293b',
    darkLight: '#334155',
    light: '#f1f5f9',
    white: '#ffffff',
    text: '#64748b',
    textDark: '#334155'
  };

  const impactStats = [
    { number: "50K+", label: "Lives Transformed", icon: "👥", color: colors.primary, description: "Individuals reached across Bihar" },
    { number: "15+", label: "Districts Covered", icon: "🌺", color: colors.secondary, description: "Extensive geographical reach" },
    { number: "100+", label: "Community Programs", icon: "🎯", color: colors.accent, description: "Active interventions running" },
    { number: "25+", label: "Partner Organizations", icon: "🤝", color: colors.success, description: "Collaborative partnerships" }
  ];

  const pillarsData = [
    { title: "Empowerment", hindi: "सशक्तिकरण", description: "Building capacity and confidence in communities to drive their own development", icon: "⚡", color: colors.primary },
    { title: "Community Engagement", hindi: "सामुदायिक सहयोग", description: "Fostering active participation and collective decision-making processes", icon: "🌍", color: colors.secondary },
    { title: "Leadership Development", hindi: "नेतृत्व विकास", description: "Nurturing local leaders and change-makers within communities", icon: "👑", color: colors.accent },
    { title: "Sustainable Innovation", hindi: "स्थायी नवाचार", description: "Creating lasting solutions through creative and innovative approaches", icon: "🚀", color: colors.success }
  ];

  const programTabs = [
    {
      title: "Health Education through Dialogue",
      subtitle: "Adhigamsvasthya",
      content: {
        description:
          "We promote awareness on health, hygiene, and nutrition through workshops and theatre. We also assist in Ayushman card registration and conduct menstrual health workshops to break taboos and ensure dignity.",
        features: [
          "Health, hygiene, and nutrition workshops",
          "Menstrual health education to break taboos",
          "Ayushman card registration support",
          "Community theatre for health awareness"
        ],
        impact: "Reached 15,000+ individuals with health education",
        icon: "🏥"
      }
    },
    {
      title: "Livelihood Empowerment",
      subtitle: "Adhigamsvavalamban",
      content: {
        description:
          "We offer tailoring and skills training, and support street vendors and informal workers by connecting them with government schemes like PM SVANidhi, promoting economic self-reliance.",
        features: [
          "Tailoring and skill development training",
          "Support for street vendors and informal workers",
          "Linkages to PM SVANidhi and other government schemes",
          "Programs for economic self-reliance"
        ],
        impact: "Trained 3,000+ individuals in various skills",
        icon: "💼"
      }
    },
    {
      title: "Street Theatre for Awareness",
      subtitle: "Adhigamnatyya",
      content: {
        description:
          "We use street plays, folk arts, and open dialogues to raise awareness on issues like health, gender equality, environment, and child rights — driven by local artists.",
        features: [
          "Street plays and folk art performances",
          "Open community dialogues",
          "Awareness on gender, health, child rights, environment",
          "Led by local theatre artists"
        ],
        impact: "Conducted 200+ performances across communities",
        icon: "🎭"
      }
    },
    {
      title: "Community Learning",
      subtitle: "Adhigamshala",
      content: {
        description:
          "We run local learning spaces to build foundational literacy, creative skills, and leadership in children — especially girls — led by trained youth educators (Adhigam Sarthis).",
        features: [
          "Foundational literacy programs",
          "Creative skill building activities",
          "Leadership training focused on girls",
          "Youth-led learning spaces by Adhigam Sarthis"
        ],
        impact: "Established 50+ learning centers",
        icon: "📚"
      }
    }
  ];

  return (
    <div className="whatwedo-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-section-grid-wrapper">
          <div className="hero-section-grid">
            <div className="hero-text">
              <h1 className="hero-heading">Transforming Communities</h1>
              <p className="hero-subtext">
                Through innovative programs and grassroots engagement, we're building a sustainable future for underserved communities across Bihar.
              </p>
              <button className="explore-button">Explore Our Impact</button>
            </div>
            <div className="stats-grid">
              {impactStats.map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number" style={{ color: stat.color }}>{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-desc">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section">
        <div className="pillars-container">
          <h2 className="section-heading">Our Foundation Pillars</h2>
          <p className="section-subtext">The driving forces behind our mission and community development model</p>

          <div className="pillars-list">
            {pillarsData.map((pillar, index) => (
              <div className="pillar-card" key={index} style={{ backgroundColor: `${pillar.color}11` }}>
                <div className="pillar-icon" style={{ background: pillar.color }}>{pillar.icon}</div>
                <div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-sub">{pillar.hindi}</p>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="program-section">
        <div className="program-container">
          <h2 className="section-heading">Our Programs</h2>
          <p className="section-subtext">Comprehensive initiatives designed to address community needs through innovative approaches</p>

          <div className="tab-buttons">
            {programTabs.map((tab, idx) => (
              <button
                key={idx}
                className={activeTab === idx ? "tab-button active" : "tab-button"}
                onClick={() => setActiveTab(idx)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="program-content">
              <div>
                <div className="program-icon">{programTabs[activeTab].content.icon}</div>
                <h3 className="program-title">{programTabs[activeTab].title}</h3>
                <p className="program-sub">({programTabs[activeTab].subtitle})</p>
                <p className="program-desc">{programTabs[activeTab].content.description}</p>
                <div className="program-impact">{programTabs[activeTab].content.impact}</div>
              </div>
              <div>
                <h4 className="program-feature-heading">Key Features:</h4>
                <ul className="program-features">
                  {programTabs[activeTab].content.features.map((item, idx) => (
                    <li key={idx} className="feature-card">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY SECTION */}
      <section className="journey-section">
        <div className="journey-container">
          <h2 className="section-heading-light">Our Journey</h2>
          <p className="section-subtext-light">From a simple conversation to a transformative movement</p>

          <div className="journey-block">
            <div className="journey-text">
              <h3 className="journey-title" style={{ color: colors.accent }}>The Beginning</h3>
              <p>
                It all started with a simple conversation about the challenges faced by underprivileged communities.
                Sanjay Kumar Thakur, working in villages for years, recognized the absence of meaningful education,
                health, and livelihood programs.
              </p>
            </div>
            {/* CORRECTED LINE BELOW */}
            <div className="journey-icon" style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.warning})` }}>💡</div>
          </div>

          <div className="journey-block reverse">
            {/* CORRECTED LINE BELOW */}
            <div className="journey-icon" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>🌟</div>
            <div className="journey-text">
              <h3 className="journey-title" style={{ color: colors.secondary }}>The Vision</h3>
              <p>
                Sanjay Kumar from Araria district joined this vision, having witnessed how communities lack access
                to information and opportunities. Together, they believed in empowering people with the right guidance.
              </p>
              <blockquote className="journey-quote">
                "If some people start from the heart, even a small diya can change the direction of society."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;