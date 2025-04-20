import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-section">
          <h1 className="about-heading">About Us</h1>
          <p className="about-paragraph">
            Our NGO is dedicated to transforming the lives of underprivileged
            children by providing them access to education, healthcare, and
            a brighter future. We believe that every child deserves an equal
            opportunity to succeed, and we strive to make a meaningful
            difference in the communities we serve.
          </p>
        </div>

        <motion.div
          className="image-section"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7xDXZ7qbUfcV7eScaCU0zvwxOVTlPkbNFA&s"
            alt="Happy Children"
            className="about-image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
