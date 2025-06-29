import React from "react";
import "./PublicationsSection.css";

const publications = [
  {
    title: "AdhigamShala Learning Journey",
    embed: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/g9FRlzB70ko?si=J8t65MH7ueDg-RyZ"
        title="AdhigamShala Learning Journey"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "Community Awareness through Theatre",
    embed: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/hUV9MtvLdRI?si=0bzdXvQa9lIIkN2n"
        title="Community Awareness through Theatre"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];

const PublicationsSection = () => {
  return (
    <section className="publications-container">
      <h2 className="section-title">Publications & Media</h2>
      <div className="publications-grid">
        {publications.map((pub, index) => (
          <div key={index} className="publication-card">
            {pub.embed}
            <h3 className="publication-title">{pub.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;