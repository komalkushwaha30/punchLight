import React from "react";
import "./TeamSection.css";
import { motion } from "framer-motion";

const teamData = {
  management: [
    {
      name: "Sanjay Kumar Thakur",
      role: "Founder And Managing Trustee",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
    {
      name: "Rajani Jha",
      role: "Trustee",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
    {
      name: "Lakshmi Devi",
      role: "Trustee",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
    {
      name: "Ramashankar Das",
      role: "Settlor And Advisor",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
  ],
  mentors: [
    {
      name: "Abodh Kumar",
      role: "Co-founder of Project Potential",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
    {
      name: "Amit Thakur",
      role: "Team Coordinator of Pradan",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
    {
      name: "Zubin Power Sharma",
      role: "Founder of Project Potential",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
    {
      name: "S. H. Masoom",
      role: "A Teacher, Author And Literacy Activist",
      img: "https://www.photostudio308.com/wp-content/uploads/2022/01/IMG_2164-683x1024.jpg",
    },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TeamCard = ({ member, index }) => (
  <motion.div
    className="team-card"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <img src={member.img} alt={member.name} className="team-img" />
    <h3>{member.name}</h3>
    <p>{member.role}</p>
  </motion.div>
);

const TeamSection = () => {
  return (
    <div className="team-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Our Management Team</h2>
      </motion.div>

      <div className="team-grid">
        {teamData.management.map((member, index) => (
          <TeamCard key={index} member={member} index={index} />
        ))}
      </div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Our Core Advisor And Mentor</h2>
        <p className="subtitle">Meet the Expert Behind Our Success</p>
      </motion.div>

      <div className="team-grid mentors">
        {teamData.mentors.map((mentor, index) => (
          <TeamCard key={index} member={mentor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
