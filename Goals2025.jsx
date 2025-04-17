import React from "react";
import "./Goals2025.css";
import { motion } from "framer-motion";

const goals = [
  "शिक्षा का विस्तार",
  "स्वास्थ्य सेवाएँ",
  "महिला सशक्तिकरण",
  "पर्यावरण संरक्षण",
  "स्वच्छता",
  "समुदाय जागरूकता",
];

const Goals2025 = () => {
  return (
    <div className="goals2025-container">
      <div className="goals2025-wrapper">
        <motion.div
          className="goals2025-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://www.shutterstock.com/image-photo/ayodhya-india-jan-27-happy-260nw-1146402248.jpg" alt="2025 Goals" />
        </motion.div>

        <motion.div
          className="goals2025-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our 2025 Goals</h2>
          <p className="goals2025-description">
            2025 तक पंचलाइट फाउंडेशन अपने प्रयासों से अलग-अलग कार्यक्रमों के माध्यम से कम से कम <strong>20,000 लोगों</strong> के जीवन में सकारात्मक बदलाव लाना।
          </p>

          <div className="goals-grid">
            {goals.map((goal, index) => (
              <motion.div
                className="goal-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {goal}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Goals2025;
