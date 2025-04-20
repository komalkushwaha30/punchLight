import React from "react";
import "./ChandanTestimonial.css";
import { motion } from "framer-motion";

const ChandanTestimonial = () => {
  return (
    <section className="chandan-wrapper">
      <motion.h2
        className="story-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        चंदन कुमार साह – एक प्रेरणादायक यात्रा
      </motion.h2>

      <div className="chandan-container">
        <motion.div
          className="chandan-image left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="https://c8.alamy.com/comp/2GK545D/orchha-madhya-pradesh-india-march-2019-an-elderly-indian-man-having-a-conversation-outside-a-hindu-temple-in-the-town-of-orchha-2GK545D.jpg" alt="Chandan Image 1" />
        </motion.div>

        <motion.div
          className="chandan-text"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p>
            "पंचलाइट फाउंडेशन ने मेरी ज़िंदगी बदलने में एक महत्वपूर्ण भूमिका निभाई। पहले मैं पूरे
            समय ठेला लेकर सब्ज़ी बेचता था, लेकिन संस्था के साथ जुड़कर नुक्कड़ नाटक में एक्टर के
            रूप में काम करने का मौका मिला। इस अनुभव ने मेरी आत्मविश्वास और कौशल को बढ़ाया।
          </p>
          <p>
            आज, पंचलाइट फाउंडेशन की मदद से मैं <strong>Learning Links Foundation</strong> में
            <strong> Junior Officer, Skill Enhancement & Entrepreneurship</strong> के रूप में कार्य
            कर रहा हूँ। मेरी आर्थिक स्थिति में सुधार हुआ है, और मेरा परिवार अब अच्छे से चल रहा है।
          </p>
          <p>
            मैं पंचलाइट फाउंडेशन का तहे दिल से धन्यवाद करता हूँ, जिन्होंने मुझे यह अवसर दिया और मेरी
            क्षमता को पहचाना।"
          </p>
          <div className="chandan-author">— चंदन कुमार साह</div>
        </motion.div>

        <motion.div
          className="chandan-image right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="https://nandakishorevarma.wordpress.com/wp-content/uploads/2015/10/sainath.jpg" alt="Chandan Image 2" />
        </motion.div>
      </div>
    </section>
    
);
};

export default ChandanTestimonial;
