import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 className="thank-you" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
        Thank You!
      </motion.h1>

      <motion.h2
        className="contact-heading"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Talk to Us Regarding...!
      </motion.h2>

      <motion.div
        className="contact-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="contact-image"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="https://t4.ftcdn.net/jpg/08/04/36/29/360_F_804362990_0n7bGLz9clMBi5ajG52k8OAUQTneMbj4.jpg" alt="Contact Person" />
        </motion.div>

        <div className="contact-details">
          <motion.div className="contact-item" whileHover={{ x: 10 }}>
            <FaPhoneAlt className="icon" />
            <div>
              <p className="label">Phone</p>
              <p className="value">+91 8709945694</p>
            </div>
          </motion.div>

          <motion.div className="contact-item" whileHover={{ x: 10 }}>
            <FaEnvelope className="icon" />
            <div>
              <p className="label">Mail</p>
              <p className="value">namastepunchlight@gmail.com</p>
            </div>
          </motion.div>

          <motion.div className="contact-item" whileHover={{ x: 10 }}>
            <FaMapMarkerAlt className="icon" />
            <div>
              <p className="label">Address</p>
              <p className="value">
                Village- Araria Basti, Masjid Road, Ward No. 05,<br /> Panchayat- Araria Basti, Post- Araria Basti,<br />
                Police Station- Araria, Dist - Araria - 854311 (Bihar) India
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;