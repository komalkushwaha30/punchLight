import React from "react";
import "./Story.css";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="our-story-page">
      {/* Background Image */}
      <div className="background-image">
        <img src="/images/your-image.jpg" alt="Our Story" />
      </div>

      {/* Content */}
      <div className="content-container">
        <motion.h2
          className="our-story-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          हमारी कहानी
        </motion.h2>

        <motion.div
          className="story-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>
            फणीश्वरनाथ रेणु की <strong>“पंचलाइट”</strong> सिर्फ एक लैंप जलाने की कहानी नहीं, बल्कि
            बदलाव और जागरूकता का प्रतीक है। इसी सोच को आधार बनाकर <strong>Punchlight Foundation</strong> समाज में शिक्षा, स्वास्थ्य और जागरूकता की रोशनी फैलाने के लिए कार्य कर रही है।
          </p>
          <p>
            जिस तरह <strong>गोधन</strong> ने पंचलाइट जलाकर गांव को रोशन किया और समाज में अपनी उपयोगिता
            साबित की, वैसे ही <strong>Punchlight Foundation</strong> उन लोगों को अवसर देने का काम कर रही है,
            जो संसाधनों के अभाव में पीछे रह जाते हैं। हम शिक्षा, स्वास्थ्य सेवाओं और सरकारी योजनाओं की जानकारी
            देकर लोगों को सशक्त बना रहे हैं, ताकि वे आत्मनिर्भर बन सकें।
          </p>
          <p>
            गांव में पंचलाइट तो थी, लेकिन उसे जलाने का हुनर <strong>गोधन</strong> के पास था। इसी तरह, हमारे समाज
            में भी अपार संभावनाएं और संसाधन हैं, लेकिन सही मार्गदर्शन के बिना वे बेकार रह जाते हैं।
            <strong>Punchlight Foundation</strong> का उद्देश्य इन संसाधनों को सही दिशा में लगाकर समाज के हर वर्ग को
            आगे बढ़ने में मदद करना है।
          </p>
          <p>
            जिस तरह पंचलाइट की कहानी <em>“बड़ा बेइमान है रे”</em> — मुनरी का यह संवाद बताता है कि
            बदलाव लाने वालों को आलोचना का सामना करना पड़ता है, लेकिन अंततः वही समाज की दिशा बदलते हैं।
            <strong>Punchlight Foundation</strong> भी इसी विश्वास के साथ हर व्यक्ति, हर गांव और हर समुदाय को रोशन करने की राह पर आगे बढ़ रही है।
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;

