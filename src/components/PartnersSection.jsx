import React from "react";
import "./PartnersSection.css";

const partners = [
  {
    name: "Urban Development & Housing Dept.",
    image: "/images/partners/urban_dev_logo.png",
  },
  {
    name: "Project Potential",
    image: "/images/partners/project_potential_logo.png",
  },
  {
    name: "Pure India Trust",
    image: "/images/partners/pure_india_trust_logo.png",
  },
];

const PartnersSection = () => {
  return (
    <section className="partners-container">
      <h2 className="section-title">Our Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.image} alt={partner.name} className="partner-logo" />
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
