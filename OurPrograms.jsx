import React from "react";
import "./OurPrograms.css";
import { motion } from "framer-motion";

const programs = [
  {
    title: "शिक्षा कार्यक्रम (Education Program)",
    goal: "लक्ष्य: वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करना।",
    projects: ["अधिगमशाला: वर्तमान में 30 बच्चे निःशुल्क शिक्षा प्राप्त कर रहे हैं।"],
  },
  {
    title: "स्वास्थ्य और जागरूकता कार्यक्रम (Health and Awareness Program)",
    goal: "लक्ष्य: स्वास्थ्य सेवाओं की पहुँच बढ़ाना और जागरूकता फैलाना।",
    projects: [
      "अधिगमकला: नुक्कड़ नाटकों के माध्यम से 12000 लोगों को स्वास्थ्य योजनाओं के बारे में जागरूक किया गया।",
      "अधिगमसहायता:",
      "1. अब तक 100 लोगों को आयुष्मान कार्ड दिलाने में सहायता।",
      "2. अब तक 1 लोगों को आयुष्मान कार्ड से कैंसर का ऑपरेशन करवाने में सहायता।",
    ],
  },
  {
    title: "स्वच्छता कार्यक्रम (Cleanliness and Sanitation Program)",
    goal: "लक्ष्य: स्वच्छता की आदतें बढ़ाना और जागरूकता पैदा करना।",
    projects: [
      "अधिगमस्वच्छता:",
      "1. 1 नगर परिषद में नुक्कड़ नाटक के माध्यम से 6000 लोगों को स्वच्छता के प्रति जागरूक किया गया।",
      "2. 1 नगर परिषद में दीवार लेखन के माध्यम से लोगों को स्वच्छता के प्रति जागरूता।",
    ],
  },
  {
    title: "आजीविका कार्यक्रम (Livelihood Program)",
    goal: "लक्ष्य: रोजगार और आर्थिक अवसर प्रदान करना।",
    projects: [
      "अधिगमउन्नति: 200 स्ट्रीट वेंडर्स को पीएम स्वनिधि योजना का लाभ दिलाया गया।",
      "अधिगमशक्ति: महिलाओं को छोटे व्यवसाय शुरू करने के लिए सहायता।",
    ],
  },
  {
    title: "जागरूकता कार्यक्रम (Awareness Program)",
    goal: "लक्ष्य: सामाजिक और पर्यावरणीय मुद्दों पर जागरूकता फैलाना।",
    projects: [
      "अधिगमनुक्कड़: सामाजिक मुद्दों पर नुक्कड़ नाटक के माध्यम से जागरूकता।",
      "अधिगमलेखन: दीवार लेखन के माध्यम से सामाजिक संदेश फैलाना।",
    ],
  },
];

const OurPrograms = () => {
  return (
    <div className="programs-section">
      <div className="overlay" />
      <h2 className="section-title">हमारे कार्यक्रम</h2>
      <div className="programs-container">
        {programs.map((program, index) => (
          <motion.div
            className="program-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="program-title">{program.title}</h3>
            <p className="program-goal">{program.goal}</p>
            <ul>
              {program.projects.map((proj, idx) => (
                <li key={idx}>{proj}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
