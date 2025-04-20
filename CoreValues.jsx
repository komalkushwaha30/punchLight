import React from "react";
import "./CoreValues.css";
import { motion } from "framer-motion";

const values = [
  {
    title: "सशक्तिकरण",
    subtitle: "Empowerment",
    description:
      "हम शिक्षा, स्वास्थ्य, ऊर्जा और आजीविका के माध्यम से समाज के वंचित वर्गों को सशक्त बनाने पर ध्यान केंद्रित करते हैं, ताकि हर व्यक्ति अपनी क्षमताओं का पूरा उपयोग कर सके।",
  },
  {
    title: "सामुदायिक सहभागिता",
    subtitle: "Community Engagement",
    description:
      "हम समुदायों को संगठित करते हैं और जागरूकता अभियानों, कार्यशालाओं और सामूहिक प्रयासों के माध्यम से उन्हें एकजुट होकर अपने जीवन को बेहतर बनाने में सक्षम बनाते हैं।",
  },
  {
    title: "नेतृत्व",
    subtitle: "Leadership",
    description:
      "हम पारंपरिक शक्ति संरचना के बजाय सहयोग और सामूहिक निर्णय पर आधारित एक नेतृत्व प्रणाली अपनाते हैं, जिससे सभी टीमों और समुदायों का प्रभावशाली जुड़ाव हो।",
  },
  {
    title: "प्रभाव",
    subtitle: "Impact",
    description:
      "हमारा उद्देश्य दीर्घकालिक और स्थायी परिणाम प्रदान करना है, यह सिद्ध करते हुए कि शिक्षा, स्वास्थ्य और सामुदायिक सशक्तिकरण के माध्यम से समग्र विकास संभव है।",
  },
  {
    title: "भागीदारी",
    subtitle: "Partnerships",
    description:
      "हम उन संगठनों और संस्थानों के साथ सहयोग करते हैं जो शिक्षा, स्वास्थ्य, ऊर्जा और आजीविका के माध्यम से ग्रामीण और शहरी क्षेत्रों के विकास में योगदान देना चाहते हैं।",
  },
  {
    title: "नवाचार",
    subtitle: "Innovation",
    description:
      "हम आधुनिक तकनीकों और नई सोच के माध्यम से समाधान विकसित करते हैं, जिससे समाज के सभी वर्गों को लाभ हो और विकास को गति मिले।",
  },
];

const CoreValues = () => {
  return (
    <div
      className="core-values-container"
      style={{ backgroundImage: "url(/images/values-bg.jpg)" }}
    >
      <div className="core-values-overlay">
        <motion.h2
          className="core-values-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          हमारे मूल्य एवं सिद्धांत
        </motion.h2>

        <div className="core-values-grid">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="core-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              <h4>({item.subtitle})</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
