import "./TeamSection.css";
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageProvider';

const TeamSection = () => {
  const { content } = useContext(LanguageContext);

  const teamData = [
    {
      name: content.prashantPalName,
      position: content.prashantPalPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.prashantPalDescription,
    },
    {
      name: content.shMasoomName,
      position: content.shMasoomPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.shMasoomDescription,
    },
    {
      name: content.abodhKumarName,
      position: content.abodhKumarPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.abodhKumarDescription,
    },
    {
      name: content.amitKumarThakurName,
      position: content.amitKumarThakurPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.amitKumarThakurDescription,
    },
    {
      name: content.sanjayKumarThakurName,
      position: content.sanjayKumarThakurPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.sanjayKumarThakurDescription,
    },
    {
      name: content.rajaniJhaName,
      position: content.rajaniJhaPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.rajaniJhaDescription,
    },
    {
      name: content.ramashankarDasName,
      position: content.ramashankarDasPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.ramashankarDasDescription,
    },
    {
      name: content.lakshmiDeviName,
      position: content.lakshmiDeviPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.lakshmiDeviDescription,
    },
    {
      name: content.akankshaBhartiName,
      position: content.akankshaBhartiPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.akankshaBhartiDescription,
    },
    {
      name: content.jiwachhRamName,
      position: content.jiwachhRamPosition,
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/bd652c1a-29c4-46e9-8d1b-99d0c05b0534/professional-headshot-tips-for-men-business",
      description: content.jiwachhRamDescription,
    },
  ];

  const involvementOptions = [
    {
      title: content.volunteerWithUsTitle,
      desc: content.volunteerWithUsDesc,
    },
    {
      title: content.becomeAdhigamSarthiTitle,
      desc: content.becomeAdhigamSarthiDesc,
    },
    {
      title: content.supportPerformanceTitle,
      desc: content.supportPerformanceDesc,
    },
    {
      title: content.donateTitle,
      desc: content.donateDesc,
    },
    {
      title: content.partnerWithUsTitle,
      desc: content.partnerWithUsDesc,
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <>
      <div className={`team-container ${selectedMember ? "blurred" : ""}`}>
        <div className="team-header">
          <h2>{content.meetOurTeam}</h2>
          <h4>{content.leadingWithVision}</h4>
          <p>{content.teamIntro}</p>
        </div>

        <div className="team-grid">
          {teamData.map((member, idx) => (
            <div key={idx} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                {member.description && (
                  <button
                    className="read-more-btn"
                    onClick={() => openModal(member)}
                  >
                    {content.readMore}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-image"
            />
            <h3>{selectedMember.name}</h3>
            <p className="modal-position">{selectedMember.position}</p>
            <p className="modal-description">{selectedMember.description}</p>
          </div>
        </div>
      )}

      <section className="involved-section">
        <div className="involved-header">
          <h2>{content.getInvolved}</h2>
          <p>{content.getInvolvedIntro}</p>
        </div>

        <div className="involved-cards">
          {involvementOptions.map((item, index) => (
            <div className="involved-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="join-us-section">
        <div className="join-left">
          <h3>
            {content.beAVoiceForChange}
          </h3>
          <img
            src="https://img.freepik.com/free-photo/confident-architect-with-blueprints-hardhat_1098-18345.jpg"
            alt="Join Us Visual"
            className="join-image"
          />
        </div>

        <div className="join-right">
          <h2>{content.joinPunchlightFoundation}</h2>
          <p>{content.joinPunchlightDesc1}</p>
          <p>{content.joinPunchlightDesc2}</p>
          <Link to="/contact" className="join-button">
            {content.joinNow}
          </Link>
        </div>
      </section>
    </>
  );
}

export default TeamSection