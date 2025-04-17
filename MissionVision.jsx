import "./MissionVision.css";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <div
      className="mission-vision-container"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <div className="mission-vision-overlay">
        <motion.div
          className="mission-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Mission</h2>
          <p>
            To empower underprivileged children with quality education,
            healthcare, and the support needed to build a better life, fostering
            growth and equality in underserved communities.
          </p>
        </motion.div>

        <motion.div
          className="vision-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Our Vision</h2>
          <p>
            A world where every child has equal opportunities to thrive and
            reach their full potential, regardless of their socio-economic
            background.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
