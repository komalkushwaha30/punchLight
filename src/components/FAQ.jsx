import React, { useState, useContext } from "react"; // <-- add useContext
import "./FAQ.css";
import { Link } from "react-router-dom";
import { LanguageContext } from '../LanguageProvider'; // Import LanguageContext

const FaqSection = () => {
  const { content } = useContext(LanguageContext); // Use useContext to get content

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  // Refactor faqs to use content keys for dynamic translation
  const faqsData = [
    {
      questionKey: "faqQ1",
      answerKey: "faqA1",
    },
    {
      questionKey: "faqQ2",
      answerKey: "faqA2",
    },
    {
      questionKey: "faqQ3",
      answerKey: "faqA3",
    },
    {
      questionKey: "faqQ4",
      answerKey: "faqA4",
    },
    {
      questionKey: "faqQ5",
      answerKey: "faqA5",
    },
    {
      questionKey: "faqQ6",
      answerKey: "faqA6",
    },
    {
      questionKey: "faqQ7",
      answerKey: "faqA7",
    },
    {
      questionKey: "faqQ8",
      answerKey: "faqA8",
    },
    {
      questionKey: "faqQ9",
      answerKey: "faqA9",
    },
    {
      questionKey: "faqQ10",
      answerKey: "faqA10",
    },
    {
      questionKey: "faqQ11",
      answerKey: "faqA11",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">{content.faqTitle}</h1> {/* Translated */}
      <p className="faq-subtitle">
        {content.faqSubtitle} {/* Translated */}
      </p>
      <Link to="/contact" className="faq-contact-btn">
        {content.faqContactButton} {/* Translated */}
      </Link>

      <div className="faq-list">
        {faqsData.map((faq, i) => ( // Use faqsData
          <div
            className={`faq-item ${activeIndex === i ? "active" : ""}`}
            key={i}
          >
            <button className="faq-question" onClick={() => toggle(i)}>
              {content[faq.questionKey]} {/* Translated question */}
              <span>{activeIndex === i ? "▲" : "▼"}</span>
            </button>
            {activeIndex === i && (
              <div className="faq-answer">
                {content[faq.answerKey].split("\n").map((line, index) => ( // Translated answer
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
