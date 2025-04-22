import React, { useEffect } from 'react';

const WhatWeDo = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('.timeline-item, .fade-in');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 200);
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className="what-we-do">
      <style>{`
        :root {
          --primary: #2E5D9E;
          --secondary: #E67E22;
          --light: #f8f9fa;
          --accent: #8E7DBE;
          --text-dark: #333;
          --bg-color: #f5f7fa;
        }
        
        body {
          font-family: 'Noto Sans Devanagari', 'Poppins', sans-serif;
          background-color: #ffffff;
          line-height: 1.8;
        }

        .hero-section {
          background: linear-gradient(rgba(46, 93, 158, 0.8), rgba(46, 93, 158, 0.9)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 120px 0;
          text-align: center;
          position: relative;
        }

        .hero-section h1 {
          text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
          animation: fadeInDown 1s ease;
        }

        .hero-section p {
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          animation: fadeInUp 1s ease 0.3s both;
        }

        .section-title {
          color: var(--primary);
          position: relative;
          display: inline-block;
          margin-bottom: 40px;
          z-index: 1;
          animation: fadeIn 1s ease;
        }

        .section-title::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 3px;
          background: var(--secondary);
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          animation: growCenter 0.8s ease;
        }

        .origin-section, .story-section, .timeline-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        .origin-section::before, .story-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
          z-index: 0;
        }

        .origin-section::before {
          background: url('https://i.ibb.co/VWkzDVKK/panchlight-origin.jpg') center/cover no-repeat;
        }

        .story-section {
          background-color: var(--light);
        }

        .story-section::before {
          background: url('https://i.ibb.co/LXjsjM5L/panchlight-story.jpg') center/cover no-repeat;
        }

        .timeline-section {
          background-color: var(--light);
        }

        .timeline-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .timeline-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(3px);
          opacity: 0.4;
        }

        .content-card {
          background: rgba(255,255,255,0.90);
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          padding: 30px;
          margin-bottom: 30px;
          transition: all 0.4s ease;
          border-left: 4px solid var(--secondary);
          position: relative;
          z-index: 1;
        }

        .content-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.12);
        }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 0;
          z-index: 1;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background: var(--accent);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(142, 125, 190, 0.3);
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
          margin-bottom: 30px;
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          background: #336D82;
          border: 3px solid #fff;
          box-shadow: 0 0 0 4px var(--accent);
          border-radius: 50%;
          top: 20px;
          z-index: 1;
        }

        .left {
          left: 0;
        }

        .right {
          left: 50%;
        }

        .left::after {
          right: -12px;
        }

        .right::after {
          left: -12px;
        }

        .timeline-content {
          padding: 20px;
          background: var(--light);
          border-left: 6px solid var(--primary);
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          color: var(--text-dark);
          position: relative;
        }

        .timeline-content h3 {
          margin-bottom: 1rem;
          color: #335899;
          font-size: 1.4rem;
        }

        .timeline-content ul {
          padding-left: 1.2rem;
          margin: 0;
        }

        .timeline-date {
          margin-top: 10px;
          font-weight: bold;
          color: var(--secondary);
          display: inline-block;
          background: #fff0f5;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes growCenter {
          from { width: 0; }
          to { width: 50px; }
        }

        @media (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
            left: 0;
          }

          .timeline-item::after {
            left: 18px;
          }

          .left::after, .right::after {
            left: 18px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">What We Do</h1>
          <p className="lead fs-4">शिक्षा, स्वास्थ्य और सशक्तिकरण के माध्यम से समाज परिवर्तन</p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="origin-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title">हमारी उत्पत्ति</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="content-card">
                <p>
                  पंचलाइट फाउंडेशन को 2024 में भारतीय ट्रस्ट अधिनियम 1882 के तहत एक ट्रस्ट (गैर-लाभकारी) के रूप में शामिल किया गया था...
                </p>
                <ul>
                  <li>संजय कुमार ठाकुर (प्रबंध ट्रस्टी)</li>
                  <li>रजनी झा (ट्रस्टी)</li>
                  <li>रमाशंकर दास (ट्रस्टी)</li>
                  <li>लक्ष्मी देवी (ट्रस्टी)</li>
                </ul>
                <p>
                  पंचलाइट फाउंडेशन शिक्षा, स्वास्थ्य, आजीविका, महिला सशक्तिकरण और जलवायु परिवर्तन पर काम करता है...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title">हमारी कहानी</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="content-card">
                <p>
                  फणीश्वरनाथ रेणु की "पंचलाइट" सिर्फ एक लैंप जलाने की कहानी नहीं...
                </p>
                <p>
                  जिस तरह गोधन ने पंचलाइट जलाकर गांव को रोशन किया...
                </p>
                <p>
                  गांव में पंचलाइट तो थी, लेकिन उसे जलाने का हुनर गोधन के पास था...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section position-relative">
        <div className="timeline-background">
          <img
            src="https://i.ibb.co/vxXN4XLC/panchlight-timeline.jpg"
            alt="Timeline Background"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title">हमारी यात्रा</h2>
            </div>
          </div>
          <div className="timeline">
            {[
              {
                side: "left",
                title: "संस्थापना",
                desc: "बिहार के अररिया में भारतीय ट्रस्ट अधिनियम 1882 के तहत चार संस्थापक ट्रस्टियों के साथ पंजीकृत",
                date: "2024",
              },
              {
                side: "right",
                title: "पहला शिक्षा कार्यक्रम",
                desc: "'अधिगमशाला' शुरू की जिसमें 30 वंचित बच्चों को निःशुल्क शिक्षा प्रदान की गई",
                date: "2024",
              },
              {
                side: "left",
                title: "स्वास्थ्य और जागरूकता कार्यक्रम",
                desc: (
                  <ul>
                    <li>स्वास्थ्य सेवाओं की पहुँच बढ़ाना...</li>
                    <li>नुक्कड़ नाटकों के माध्यम से...</li>
                  </ul>
                ),
                date: "2024",
              },
              {
                side: "right",
                title: "स्वच्छता कार्यक्रम",
                desc: (
                  <ul>
                    <li>नुक्कड़ नाटक के माध्यम से...</li>
                    <li>दीवार लेखन के माध्यम से...</li>
                  </ul>
                ),
                date: "2024",
              },
              {
                side: "left",
                title: "आजीविका कार्यक्रम",
                desc: (
                  <ul>
                    <li>200+ स्ट्रीट वेंडर्स को पीएम स्वनिधि योजना...</li>
                    <li>महिलाओं को छोटे व्यवसाय...</li>
                  </ul>
                ),
                date: "2024",
              },
              {
                side: "right",
                title: "जागरूकता कार्यक्रम",
                desc: (
                  <ul>
                    <li>सामाजिक मुद्दों पर नुक्कड़ नाटक...</li>
                    <li>दीवार लेखन के माध्यम से...</li>
                  </ul>
                ),
                date: "2024",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item ${item.side}`}
              >
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="timeline-date">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;