import React from "react";
import "./OurPrograms.css";

const timelineData = [
  {
    position: "right",
    title: "स्वास्थ्य और जागरूकता कार्यक्रम",
    date: "2018-Present",
    content: [
      "स्वास्थ्य सेवाओं की पहुँच बढ़ाना और जागरूकता फैलाना",
      "नुक्कड़ नाटकों के माध्यम से 12,000 लोगों को स्वास्थ्य योजनाओं के बारे में जागरूक किया गया",
      "100+ लोगों को आयुष्मान कार्ड दिलाने में सहायता",
      "10 लोगों को आयुष्मान कार्ड से कैंसर का ऑपरेशन करवाने में सहायता",
    ],
  },
  {
    position: "left",
    title: "स्वच्छता कार्यक्रम",
    date: "2015-Present",
    preamble: "लक्ष्य: स्वच्छता की आदतें बढ़ाना और जागरूकता पैदा करना",
    content: [
      "नुक्कड़ नाटक के माध्यम से 6,000 लोगों को स्वच्छता के प्रति जागरूक किया गया",
      "दीवार लेखन के माध्यम से स्वच्छता संदेश फैलाया गया",
    ],
  },
  {
    position: "right",
    title: "आजीविका कार्यक्रम",
    date: "2018-Present",
    preamble: "लक्ष्य: रोजगार और आर्थिक अवसर प्रदान करना",
    content: [
      "200+ स्ट्रीट वेंडर्स (महिला उद्यमियों सहित) को पीएम स्वनिधि योजना का लाभ दिलाया गया",
      "महिलाओं को छोटे व्यवसाय शुरू करने के लिए सहायता प्रदान की",
    ],
  },
  {
    position: "left",
    title: "जागरूकता कार्यक्रम",
    date: "2015-Present",
    preamble: "लक्ष्य: सामाजिक और पर्यावरणीय मुद्दों पर जागरूकता फैलाना",
    content: [
      "सामाजिक मुद्दों पर नुक्कड़ नाटक के माध्यम से जागरूकता",
      "दीवार लेखन के माध्यम से सामाजिक संदेश फैलाना",
    ],
  },
];

const OurPrograms = () => {
  return (
    <section id="projects">
      <div className="section-title">
        <h2>हमारे प्रोजेक्ट्स</h2>
        <p>हमारे कार्यक्रमों की झलक</p>
      </div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.position}`}>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              {item.preamble && <p>{item.preamble}</p>}
              <ul>
                {item.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="timeline-date">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
