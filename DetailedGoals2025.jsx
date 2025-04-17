import React from "react";
import "./DetailedGoals2025.css";
import { motion } from "framer-motion";

const goals = [
  {
    title: "शिक्षा का विस्तार",
    points: [
      "500 से अधिक जरूरतमंद बच्चों को मुफ्त शिक्षा और आवश्यक शैक्षिक सामग्री उपलब्ध कराना।",
      "ग्रामीण क्षेत्रों में 5 नए अधिगमशालाएं स्थापित करना।",
    ],
    area: "education",
  },
  {
    title: "स्वास्थ्य सेवाएँ",
    points: [
      "5 ग्रामीण और शहरी क्षेत्रों में स्वास्थ्य शिविरों का आयोजन।",
      "2 ग्रामीण या शहरी क्षेत्रों में रक्तदान शिविरों का आयोजन।",
    ],
    area: "health",
  },
  {
    title: "महिला सशक्तिकरण",
    points: [
      "50 महिलाओं को कौशल विकास प्रशिक्षण देना।",
      "10,000 से अधिक महिलाओं के लिए नुक्कड़ नाटकों का आयोजन।",
    ],
    area: "women",
  },
  {
    title: "पर्यावरण संरक्षण",
    points: [
      "10,000 से अधिक लोगों को स्वच्छता के लिए नुक्कड़ नाटक।",
      "5000 लोगों में Single Use Plastic के खिलाफ जागरूकता।",
    ],
    area: "environment",
  },
  {
    title: "स्वच्छता",
    points: [
      "गांवों और बस्तियों में विशेष स्वच्छता अभियान।",
      "40,000 से अधिक लोगों को प्रेरित करना।",
    ],
    area: "cleanliness",
  },
  {
    title: "समुदाय जागरूकता",
    points: [
      "50,000+ लोगों में शिक्षा, रोजगार, स्वच्छता आदि के लिए नाटकों का आयोजन।",
      "2000+ महिलाओं में जागरूकता अभियान।",
    ],
    area: "community",
  },
];

const DetailedGoals2025 = () => {
  return (
    <div className="detailed-goals-container">
      <motion.h2
        className="goals-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our 2025 Goals
      </motion.h2>

      <motion.p
        className="goals-subheading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        2025 तक पंचलाइट फाउंडेशन अपने प्रयासों से <strong>कम से कम 20,000</strong> लोगों के जीवन में सकारात्मक बदलाव लाना।
      </motion.p>

      <div className="goals-fancy-grid">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            className={`goal-card fancy-card ${goal.area}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3>{goal.title}</h3>
            <ul>
              {goal.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DetailedGoals2025;
