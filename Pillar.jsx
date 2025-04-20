import "./Pillar.css";
import { motion } from "framer-motion";

const PillarsAndValues = () => {
  return (
    <div
      className="pillars-values-container"
      style={{ backgroundImage: "url(/images/pillars-bg.jpg)" }}
    >
      <div className="pillars-values-overlay">
        <motion.div
          className="pillars-values-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>पंचलाइट फाउंडेशन</h2>
          <p>
            पंचलाइट फाउंडेशन को 2024 में भारतीय ट्रस्ट अधिनियम 1882 के तहत एक ट्रस्ट
            (गैर-लाभकारी) के रूप में शामिल किया गया था, जिसका टोकन नंबर 2170/2024 |
            डीड नंबर 11 अररिया, बिहार, भारत में चार इच्छुक व्यक्तियों द्वारा बनाया गया था,
            जिनके नाम हैं:
          </p>

          <ul>
            <li>1. संजय कुमार ठाकुर (प्रबंध ट्रस्टी)</li>
            <li>2. रजनी झा (ट्रस्टी)</li>
            <li>3. रमाशंकर दास (ट्रस्टी)</li>
            <li>4. लक्ष्मी देवी (ट्रस्टी)</li>
          </ul>

          <p>
            इच्छुक व्यक्तियों और संगठनों के कानूनी दस्तावेजों का विवरण यहाँ उपलब्ध है।
            पंचलाइट फाउंडेशन शिक्षा, स्वास्थ्य, आजीविका, महिला सशक्तिकरण और जलवायु
            परिवर्तन पर काम करता है। यह नुक्कड़ नाटकों और रचनात्मक अभिव्यक्ति के माध्यम
            से जागरूकता बढ़ाता है।<br /><br />
            यह आयुष्मान भारत और स्वच्छ भारत अभियान के साथ सहयोग करके सतत विकास और
            आत्मनिर्भर समुदायों के निर्माण के लिए सरकारी और गैर-सरकारी संगठनों के साथ
            काम करता है।
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PillarsAndValues;
