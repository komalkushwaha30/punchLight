import React, { useState, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProgramsSection.css";
import { assets } from "../assets/assets";
import { LanguageContext } from "../LanguageProvider";

const ProgramsSection = () => {
  const [carouselIndexes, setCarouselIndexes] = useState({});
  const { content } = useContext(LanguageContext);

  const imageSections = [
    {
      titleKey: "progNatyaTitle",
      className: "natya",
      content: (
        <>
          <p>
            <strong>{content.progNatyaIntro1Highlight}</strong>
            {content.progNatyaIntro1}
          </p>
          <p>{content.progNatyaIntro2}</p>
          <p>{content.progNatyaIntro3}</p>
          <div className="community-card-section">
            <div className="community-card">
              <img
                src={assets.image22}
                alt={content.progNatyaCard1Title}
                className="community-card-image"
              />
              <div className="community-card-content">
                <h2>
                  <span className="community-highlight">
                    {content.progNatyaCard1TitleHighlight}
                  </span>{" "}
                  {content.progNatyaCard1Title}
                </h2>
                <p>{content.progNatyaCard1Text}</p>
              </div>
            </div>
            <div className="community-card">
              <img
                src={assets.image24}
                alt={content.progNatyaCard2Title}
                className="community-card-image"
              />
              <div className="community-card-content">
                <h2>
                  <span className="community-highlight">
                    {content.progNatyaCard2TitleHighlight}
                  </span>{" "}
                  {content.progNatyaCard2Title}
                </h2>
                <p>{content.progNatyaCard2Text}</p>
              </div>
            </div>
          </div>
          <div className="impact-highlights">
            <span>{content.progNatyaImpact1}</span>
            <span>{content.progNatyaImpact2}</span>
          </div>
        </>
      ),
      images: [assets.image15, assets.image16, assets.image17, assets.image18, assets.image19,assets.image20,assets.image22,assets.image23,assets.image24,],
    },
    {
      titleKey: "progShalaTitle",
      className: "shala",
      content: (
        <>
          <p>
            🚀 <strong>{content.progShalaMissionHighlight}</strong>:{" "}
            {content.progShalaMission}
          </p>
          <p>
            🎯 <strong>{content.progShalaVisionHighlight}</strong>:{" "}
            {content.progShalaVision}
          </p>
          <div className="adhigamshala-card">
            <img
              src={assets.image61}
              alt={content.progShalaCardTitle}
              className="adhigamshala-card-image"
            />
            <div className="adhigamshala-card-content">
              <h2>
                <span className="adhigamshala-highlight">
                  {content.progShalaCardTitleHighlight}
                </span>{" "}
                {content.progShalaCardTitle}
              </h2>
              <p>{content.progShalaCardText1}</p>
              <p>{content.progShalaCardText2}</p>
              <p>{content.progShalaCardText3}</p>
              <p>{content.progShalaCardText4}</p>
            </div>
          </div>
          <div className="impact-highlights">
            <span>{content.progShalaImpact1}</span>
            <span>{content.progShalaImpact2}</span>
          </div>
        </>
      ),
      images: [assets.image1, assets.image26, assets.image27, assets.image28,assets.image29,assets.image30,assets.image62,assets.image63,assets.image64],
    },
    {
      titleKey: "progSvasthyaTitle",
      className: "svasthya",
      content: (
        <>
          <p>{content.progSvasthyaText1}</p>
          <p>{content.progSvasthyaText2}</p>
          <p>{content.progSvasthyaText3}</p>
          <p>{content.progSvasthyaText4}</p>
          <p>{content.progSvasthyaText5}</p>
          <div className="impact-highlights">
            <span>{content.progSvasthyaImpact1}</span>
            <span>{content.progSvasthyaImpact2}</span>
          </div>
        </>
      ),
      images: [assets.image31, assets.image32, assets.image33, assets.image34,assets.image35,],
    },
    {
      titleKey: "progSvavalambanTitle",
      className: "swavalamban",
      content: (
        <>
          <p>{content.progSvavalambanText1}</p>
          <div className="adhigamsvavalamban-card">
            <img
              src={assets.image42}
              alt={content.progSvavalambanCardTitle}
              className="adhigamsvavalamban-card-image"
            />
            <div className="adhigamsvavalamban-card-content">
              <h2>
                <span className="adhigamsvavalamban-highlight">
                  {content.progSvavalambanCardTitleHighlight}
                </span>{" "}
                {content.progSvavalambanCardTitle}
              </h2>
              <p>{content.progSvavalambanCardText1}</p>
              <p>{content.progSvavalambanCardText2}</p>
              <p>{content.progSvavalambanCardText3}</p>
            </div>
          </div>
          <div className="impact-highlights">
            <span>{content.progSvavalambanImpact1}</span>
            <span>{content.progSvavalambanImpact2}</span>
          </div>
        </>
      ),
      images: [
        assets.image39,
        assets.image37,
        assets.image36,
        assets.image38,
        assets.image40,
        assets.image41,
        assets.image42,
        
      ],
    },
  ];

  const handleNext = (index) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % imageSections[index].images.length,
    }));
  };

  const handlePrev = (index) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [index]:
        ((prev[index] || 0) - 1 + imageSections[index].images.length) %
        imageSections[index].images.length,
    }));
  };

  return (
    <div className="presentation-container">
      {imageSections.map((section, index) => (
        <div key={index} className={`section-block ${section.className}`}>
          <h1 className="slide-title">{content[section.titleKey]}</h1>
          <div className="text-section">{section.content}</div>

          {section.images.length > 0 && (
            <div className="image-carousel">
              <button
                className="carousel-btn"
                onClick={() => handlePrev(index)}
              >
                <ChevronLeft />
              </button>
              <div>
                <img
                  src={section.images[carouselIndexes[index] || 0]}
                  alt={`Image ${carouselIndexes[index] || 0 + 1}`}
                  className="carousel-image"
                />
              </div>
              <button
                className="carousel-btn"
                onClick={() => handleNext(index)}
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramsSection;