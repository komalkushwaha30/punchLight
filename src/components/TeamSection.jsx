import "./TeamSection.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageProvider";
import { assets } from "../assets/assets";

const TeamSection = () => {
 const { content } = useContext(LanguageContext);

 // Define teamData with keys that can be looked up in the content object
 const teamData = [
 {
 nameKey: "prashantPalName",
 positionKey: "prashantPalPosition",
 image: assets.image43,
 descriptionKey: "prashantPalDescription",
 },
 {
 nameKey: "shMasoomName",
 positionKey: "shMasoomPosition",
 image: assets.image44,
 descriptionKey: "shMasoomDescription",
 },
 {
 nameKey: "abodhKumarName",
 positionKey: "abodhKumarPosition",
 image: assets.image45,
 descriptionKey: "abodhKumarDescription",
 },
 {
 nameKey: "amitKumarThakurName",
 positionKey: "amitKumarThakurPosition",
 image: assets.image46,
 descriptionKey: "amitKumarThakurDescription",
 },
 {
 nameKey: "sanjayKumarThakurName",
 positionKey: "sanjayKumarThakurPosition",
 image: assets.image47,
 descriptionKey: "sanjayKumarThakurDescription",
 },
 {
 nameKey: "rajaniJhaName",
 positionKey: "rajaniJhaPosition",
 image: assets.image48,
 descriptionKey: "rajaniJhaDescription",
 },
 {
 nameKey: "ramashankarDasName",
 positionKey: "ramashankarDasPosition",
 image: assets.image49,
 descriptionKey: "ramashankarDasDescription",
 },
 {
 nameKey: "lakshmiDeviName",
 positionKey: "lakshmiDeviPosition",
 image: assets.image50,
 descriptionKey: "lakshmiDeviDescription",
 },
 {
 nameKey: "akankshaBhartiName",
 positionKey: "akankshaBhartiPosition",
 image: assets.image51,
 descriptionKey: "akankshaBhartiDescription",
 },
 {
 nameKey: "jiwachhRamName",
 positionKey: "jiwachhRamPosition",
 image: assets.image52,
 descriptionKey: "jiwachhRamDescription",
 },
 {
 nameKey: "youName", // This one is dynamic for "You"
 positionKey: "youPosition",
 image:
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MUiR6cIbzkmy7NPLIsU21LJ4zXeruHa2WQ&s",
 descriptionKey: "youDescription",
 },
 ];

 const involvementOptions = [
 {
 titleKey: "volunteerWithUsTitle",
 descKey: "volunteerWithUsDesc",
 },
 {
 titleKey: "becomeAdhigamSarthiTitle",
 descKey: "becomeAdhigamSarthiDesc",
 },
 {
 titleKey: "supportPerformanceTitle",
 descKey: "supportPerformanceDesc",
 },
 {
 titleKey: "donateTitle",
 descKey: "donateDesc",
 },
 {
 titleKey: "partnerWithUsTitle",
 descKey: "partnerWithUsDesc",
 },
 ];

 const [selectedMember, setSelectedMember] = useState(null);

 const openModal = (member) => {
 setSelectedMember(member);
 document.body.classList.add("no-scroll"); // Add no-scroll class to body
 };

 const closeModal = () => {
 setSelectedMember(null);
 document.body.classList.remove("no-scroll"); // Remove no-scroll class from body
 };

 useEffect(() => {
 // Cleanup in case modal is closed via other methods
 return () => {
 document.body.classList.remove("no-scroll");
 };
 }, []);

 const mentors = teamData.slice(0, 4);
 const team = teamData.slice(4);

 return (
 <>
 <div className={`team-container ${selectedMember ? "blurred" : ""}`}>
 {/* Mentors Section */}
 <div className="team-group">
 <h2 className="team-group-heading">{content.teamMentorHeading}</h2>
 <p>{content.teamMentorSubheading}</p>
 <div className="mentors-grid">
 {mentors.map((member, idx) => (
 <div key={idx} className="team-card">
 <img
 src={member.image}
 alt={content[member.nameKey]}
 className="team-image"
 />
 <div className="team-info">
 <h3 className="team-name">{content[member.nameKey]}</h3>
 <p className="team-position">{content[member.positionKey]}</p>
 {member.descriptionKey && content[member.descriptionKey] && (
 <button
 className="read-more-btn"
 onClick={() =>
 openModal({
 name: content[member.nameKey],
 position: content[member.positionKey],
 image: member.image,
 description: content[member.descriptionKey],
 })
 }
 >
 {content.readMore}
 </button>
 )}
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Team Section */}
 <div className="team-group">
 <h2 className="team-group-heading">{content.teamTeamHeading}</h2>
 <h4>{content.teamTeamSubheading}</h4>
 <p>
 {content.teamTeamIntro}
 </p>
 <div className="team-members-grid">
 {team.map((member, idx) => (
 <div key={idx} className="team-card">
 <img
 src={member.image}
 alt={content[member.nameKey]}
 className="team-image"
 />
 <div className="team-info">
 <h3 className="team-name">{content[member.nameKey]}</h3>
 <p className="team-position">{content[member.positionKey]}</p>
 {member.descriptionKey && content[member.descriptionKey] && (
 <button
 className="read-more-btn"
 onClick={() =>
 openModal({
 name: content[member.nameKey],
 position: content[member.positionKey],
 image: member.image,
 description: content[member.descriptionKey],
 })
 }
 >
 {content.readMore}
 </button>
 )}
 </div>
 </div>
 ))}
 </div>
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
 <h2>{content.getInvolved}</h2> {/* Translated */}
 <p>{content.getInvolvedIntro}</p> {/* Translated */}
 </div>

 <div className="involved-cards">
 {involvementOptions.map((item, index) => (
 <div className="involved-card" key={index}>
 <h4>{content[item.titleKey]}</h4> {/* Translated */}
 <p>{content[item.descKey]}</p> {/* Translated */}
 </div>
 ))}
 </div>
 </section>

 <section className="join-us-section">
 <div className="join-left">
 <h3>{content.beAVoiceForChange}</h3> {/* Translated */}
 <img
 src={assets.image23}
 alt="Join Us Visual" // Alt text can be translated if image is dynamic
 className="join-image"
 />
 </div>

 <div className="join-right">
 <h2>{content.joinPunchlightFoundation}</h2> {/* Translated */}
 <p>{content.joinPunchlightDesc1}</p> {/* Translated */}
 <p>{content.joinPunchlightDesc2}</p> {/* Translated */}
 <Link to="/contact" className="join-button">
 {content.joinNow} {/* Translated */}
 </Link>
 </div>
 </section>
 </>
 );
};

export default TeamSection;
