import React, { createContext, useState, useEffect } from "react";

// English content (add all keys matching hindiContent)
const englishContent = {
  heroTitle: "CHARITY IS THE BEST SOCIAL WORK",
  heroSubtitle: "Helping hands are better than praying lips",
  donateNow: "Donate Now",
  aboutNav: "About",
  contactNav: "Contact",
  donationNav: "Donation",
  teamNav: "Team",
  impactNav: "Impact",
  aboutPunchlightTitle: "About Punchlight Foundation",
  aboutPunchlightP1:
    "We are a dynamic organization committed to empowering marginalized communities through impactful programs in education, healthcare, sanitation, clean energy, and livelihood support.",
  aboutPunchlightP2:
    "Our mission is to bring change at the grassroots level by connecting school dropout children with education, organizing free health camps, and promoting community awareness through creative storytelling.",
  aboutPunchlightP3:
    "Through the power of street theatre and community-driven campaigns, we spread awareness and advocate for a society where every person can live with dignity, hope, and opportunity.",

  // Legal & Registration Section
  legalHeading: "Legal & Registration Details",
  trustAct: "Trust Act:",
  trustActDetail: "Indian Trust Act 1882",
  trustRegistration: "Trust Registration:",
  trustRegistrationDetail: "Token No. 2170/2024, Deed No. 11",
  panNo: "PAN No:",
  panNoDetail: "AAFTP7183C",
  ngoDarpanUid: "NGO DARPAN UID:",
  ngoDarpanUidDetail: "BR/2024/0417447",
  twelveANo: "12A No:",
  twelveANoDetail: "AAFTP7183CE20241",
  eightyGNo: "80G No:",
  eightyGNoDetail: "AAFTP7183CF20241",
  gstin: "GSTIN:",
  gstinDetail: "10AAFTP7183C1ZS",

  // Action Boxes
  actionBoxDonate: "Donate Us",
  actionBoxGetInvolved: "Get Involved",
  actionBoxVolunteer: "Become a Volunteer",

  // Our Approach Section
  approachHeading: "Our Approach",
  approachText:
    "Toward inspiring learning, dialogue, and grassroots leadership through theatre, education, and community action in India's most underserved regions.",

  // Our Causes Section
  ourMissionHeading: "Our Mission",
  ourMissionDescription:
    "There is no nation that can grow & flourish, you have to be willing. But we know there's always a way to grow. Otherwise what's good for the Everest! Say it, play good for business. We do these because we care good with communities. We can think different about this just with the relavant. That's why we can commit an important services focus on education and community to help subscribers grow better every day.",
  ourStoryHeading: "Our Story",
  ourStoryDescription:
    "As fellow graduate students at MIT in 2008, Brian and Cherneen received a demo of the Jelly very versatile shop and boy. Customers were no longer hesitating personalized look for Jelly was no average — it was having unique looks.",
  learningEmpowermentHeading: "Learning-Centered Empowerment",
  learningEmpowermentDescription:
    "We believe that lasting change begins with learning. At Punchlight Foundation, every initiative — whether in education, health, street theatre, or livelihoods — is grounded in the principle of Adhigam (learning). We co-create learning processes that are grassroots-driven, culturally rooted, and dialogic.",
  theatreAsToolHeading: "Theatre as a Tool for Social Change",
  theatreAsToolDescription:
    "Through our AdhigamNatyya program, we use street theatre, folk art, and public dialogues to raise awareness on pressing social issues. For us, theatre is not just performance — it is a tool for reflection, conversation, and collective transformation.",
  communityLedChangeHeading: "Community-Led Change",
  communityLedChangeDescription:
    "We believe that the most sustainable change comes from within. Punchlight invests in building local leadership by nurturing youth, women, and children as Adhigam Sarthi (learning facilitators) and Adhigam artists, who become catalysts for social progress in their own communities.",
  equityInclusionHeading: "Equity and Inclusion",
  equityInclusionDescription:
    "We center our efforts on creating just and inclusive spaces for all — especially for women, adolescent girls, and marginalized communities. Our programs are designed to bridge gaps and empower the unheard.",

  // --- ADDITIONS FOR CONTACT PAGE ---
  sendUsMessage: "Send Us a Message",
  yourName: "Your Name",
  yourEmail: "Your Email",
  subject: "Subject",
  yourMessage: "Your Message",
  sendMessage: "Send Message",
  phone: "Phone",
  email: "Email",
  location: "Location",
  punchlightOffice: "Punchlight Office",
  currentLocation: "Current Location",
  latitude: "Latitude",
  longitude: "Longitude",
  findUsOnline: "Find Us Online!",
  searchLocation: "Search Location",
  enterCity: "Enter City",
  enterPincode: "Enter Pincode",
  search: "Search",
  sorryNotPresent: "Sorry, Punchlight office is not currently present here.",
  messageSentSuccess: "Your message has been sent!",
  messageSentFail: "Failed to send your message. Please try again later.",

  // --- ADDITIONS FOR FOOTER ---
  hopeForAllTitle: "HopeForAll",
  hopeForAllDescription:
    "Empowering communities through education, healthcare, and sustainable development.",
  quickLinks: "Quick Links",
  footerOurMission: "Our Mission",
  programs: "Programs",
  gallery: "Gallery",
  donate: "Donate",
  volunteer: "Volunteer",
  contactUs: "Contact Us",
  goToTop: "Go to Top",
  copyright: "© 2024 Punchlight. All Rights Reserved.",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
  followUs: "Follow Us",

  // --- ADDITIONS FOR NAVBAR ---
  whatWeDoNav: "What We Do",
  aboutMission: "Our Mission",
  aboutVision: "Our Vision",
  aboutTeam: "Our Team",
  education: "Education",
  healthcare: "Healthcare",
  empowerment: "Empowerment",
  media : "Media",

  // --- NEW ADDITIONS FOR TEAM PAGE ---
  meetOurTeam: "MEET OUR TEAM",
  leadingWithVision: "LEADING WITH VISION, DRIVING WITH PURPOSE",
  teamIntro:
    "A cross-cultural team dedicated to creating opportunities for rural communities, promoting lifelong learning, and driving positive, sustainable change.",
  readMore: "Read More",
  getInvolved: "Get Involved",
  getInvolvedIntro:
    "Be a part of the change with Punchlight Foundation. Whether you're an artist, educator, volunteer, donor, or simply someone who cares — your time, skills, and support can help us create a more aware, empowered, and equitable society.",
  volunteerWithUsTitle: "Volunteer with Us",
  volunteerWithUsDesc:
    "Join our street play teams, community workshops, or educational programs. From scriptwriting to stage performance, health awareness to teaching — there’s a role for everyone.",
  becomeAdhigamSarthiTitle: "Become an Adhigam Sarthi",
  becomeAdhigamSarthiDesc:
    "Support children’s learning by becoming a community educator in our AdhigamShala program.",
  supportPerformanceTitle: "Support a Performance",
  supportPerformanceDesc:
    "Help us take powerful street theatre to underserved areas by sponsoring or organizing a show.",
  donateTitle: "Donate",
  donateDesc:
    "Your contribution enables us to reach more communities, train more youth, and amplify the voices of the marginalized.",
  partnerWithUsTitle: "Partner with Us",
  partnerWithUsDesc:
    "We welcome collaborations with NGOs, local bodies, artists, and institutions who share our mission of social transformation.",
  beAVoiceForChange:
    "BE A VOICE FOR CHANGE. YOUR PASSION, CREATIVITY, AND COMMITMENT CAN LIGHT UP COMMUNITIES WITH AWARENESS AND ACTION.",
  joinPunchlightFoundation: "Join Punchlight Foundation",
  joinPunchlightDesc1:
    "Your voice matters. Join us in building a just and informed society by driving awareness, empowering others, and making change possible through art and action.",
  joinPunchlightDesc2:
    "Together, we can turn ideas into impact and compassion into collective strength.",
  joinNow: "JOIN NOW",

  // Team Member Descriptions (Specific translations for descriptions are crucial)
  prashantPalName: "Prashant Pal",
  prashantPalPosition: "Founder & CEO, Pure India Trust",
  prashantPalDescription: `Prashant Pal is a seasoned professional who has worked for decades in the corporate and social sectors. In 2013, he founded PURE India Trust, which aims to empower women and differently-abled people through entrepreneurship, skill development and education. Coming from a middle-class background, Prashant witnessed poverty and economic struggles closely, which inspired him to help the needy. Influenced by the Anna Hazare movement, he returned to India in 2012 and started working for social change. At Punchlight Foundation, he is playing a vital role as a core advisor and mentor. With his extensive experience and guidance, the organization is moving forward strongly in its objective of bringing impactful change in the society`,

  shMasoomName: "S.H. Masoom",
  shMasoomPosition: "A Teacher, Author And Literacy Activist",
  shMasoomDescription: null, // No description provided in original

  abodhKumarName: "Abodh Kumar",
  abodhKumarPosition: "Co-Founder & Trustee, Project Potential",
  abodhKumarDescription: `Abodh Kumar has believed in self-reliance and hard work since childhood. After starting out at his father’s blacksmith shop in Bihar, he setup a juice stall at the age of 10 and bought a Sanskrit grammar book with his first earnings. He self-financed his high school and college education. A postgraduate diploma holder in Leadership Development from Azim Premji University, Bengaluru, Abodh is dedicated to personal growth and community empowerment. His grassroots understanding and leadership skills guide the community work of Punchlight Foundation. As a core advisor and mentor, he plays a key role in the organization’s strategies, further strengthening our commitment to bring positive change in society`,

  amitKumarThakurName: "Amit Kumar Thakur",
  amitKumarThakurPosition: "Team Coordinator of Pradan",
  amitKumarThakurDescription: null, // No description provided in original

  sanjayKumarThakurName: "Sanjay Kumar Thakur",
  sanjayKumarThakurPosition: "Founder & Managing Trustee",
  sanjayKumarThakurDescription: `Sanjay Kumar Thakur is the visionary founder of Punchlight Foundation Trust, a platform dedicated to using theatre as a powerful tool for social change. Starting his journey in 2003 from Araria, Bihar, he raised awareness on critical social issues through plays with renowned organizations like IPTA, Renu Sanskritik Manch, and Bhartiya Kala Sanskriti Manch. In 2005, his involvement in the AIDS awareness campaign made him realize that art can bring about real transformation. His leadership as Secretary of Bharatiya Kala Sanskriti Manch (2006-2010) saw him drive significant campaigns on education, prohibition, and social reform. He later contributed to impactful projects like the Chief Minister Akshar Anchal Yojana and worked with J-PAL South Asia, Bihar Education Project Council, and Social Welfare Department to combat child malnutrition, child marriage, and dowry. In Oct 2011 to Jul 2012, he worked as a Surveyor for J-PAL South Asia, conducting surveys and contributing to research in social interventions. In 2015, he led rural development and education initiatives with Project Potential Trust and furthered social change through eArth Kala Manch (2018-2020). During the pandemic, he worked with PRADAN on awareness campaigns and later became a news anchor at Divya Bharat Hindi Samachar. From April 2021 to March 2022, he worked on the Second Chance Education Project with PRADAN, empowering women through education. In 2022, he founded Punchlight Foundation Trust, bringing his vision to life by staging impactful street plays. Under his leadership, the Foundation addressed key issues like sanitation, empowerment, and voter awareness in collaboration with local communities. Today, Sanjay Kumar Thakur continues to inspire change through his art, driving the mission of Punchlight Foundation Trust forward—creating a more informed, inclusive, and empowered society.`,

  rajaniJhaName: "Rajani Jha",
  rajaniJhaPosition: "Trustee",
  rajaniJhaDescription: `Rajani Jha has worked with renowned organizations like UNICEF, contributing her expertise to various social causes. Her experience in working with such organizations has helped her gain valuable insights into addressing critical issues at both grassroots and global levels. Currently, she serves as a trustee of Punchlight Foundation, where she actively works on raising awareness and addressing social issues such as child marriage, health, women’s empowerment, and pandemics. Through her role, she continues to make significant contributions toward creating positive social change.`,

  ramashankarDasName: "Rama Shankar Das",
  ramashankarDasPosition: "Settlor & Trustee",
  ramashankarDasDescription: `Ramashankar Das is a seasoned entrepreneur and committed philanthropist. With a strong belief in inclusive development, he has consistently supported community welfare initiatives alongside his business endeavors. During the COVID-19 lockdown, he provided critical support to a local NGO by supplying essential commodities on credit at below-market rates, enabling effective relief distribution to underserved communities. As a Settlor and Board Member of Punchlight Foundation, Mr. Das brings a unique blend of strategic insight and social commitment. His guidance and continued support play a vital role in advancing the Foundation’s mission to drive grassroots change through education, awareness, and empowerment.`,

  lakshmiDeviName: "Lakshmi Devi",
  lakshmiDeviPosition: "Trustee",
  lakshmiDeviDescription: `Lakshmi Devi is a committed social worker dedicated to bringing positive change in society. She has worked on various social issues such as women’s empowerment, education, health, and social equality, with a focus on supporting marginalized communities. She regularly conducts meetings to raise awareness among women on critical issues like child marriage and pandemics. Currently, she serves as a trustee of Punchlight Foundation, providing guidance and support for the organization’s social initiatives and programs. Her leadership and commitment play a key role in advancing the foundation’s mission of creating positive social change.`,

  akankshaBhartiName: "Akanksha Bharti",
  akankshaBhartiPosition: "Adhigam Sarthi",
  akankshaBhartiDescription: `Akanksha is an educator and social worker with three years of experience in the field of education. She has contributed to the holistic development of children while teaching in private schools. Currently, she is pursuing higher education and actively involved with Punchlight Foundation in initiatives like "Adhigamshala." She is committed to bringing positive change in society through education and awareness.`,

  jiwachhRamName: "Jiwachh Ram",
  jiwachhRamPosition: "Artist",
  jiwachhRamDescription: `Jiwachh Ram began his journey with street theatre in 1992. Over the years, he has actively participated in street plays to raise awareness on various social issues. He has performed plays on topics such as child malnutrition, prohibition, child marriage, dowry abolition, sanitation, and voter awareness, contributing to numerous campaigns. Jiwachh Ram has played a significant role in promoting social change through theatre, using his performances to spread education and awareness. He believes in the power of theatre to bring about positive change in society and strives to empower people through his plays. Currently, he is associated with Punchlight Foundation and actively participates in their street play programs.`,

  // Hero Section (WhatWeDo)
  transformingCommunities: "Transforming Communities",
  transformingCommunitiesDesc:
    "Through innovative programs and grassroots engagement, we're building a sustainable future for underserved communities across Bihar.",
  exploreOurImpact: "Explore Our Impact",
  livesTransformed: "Lives Transformed",
  livesTransformedDesc: "Individuals reached across Bihar",
  districtsCovered: "Districts Covered",
  districtsCoveredDesc: "Extensive geographical reach",
  communityPrograms: "Community Programs",
  communityProgramsDesc: "Active interventions running",
  partnerOrganizations: "Partner Organizations",
  partnerOrganizationsDesc: "Collaborative partnerships",

  // Our Pillars Section
  ourFoundationPillars: "Our Foundation Pillars",
  pillarsDesc:
    "Core principles that drive our mission and shape our approach to community development",
  empowerment: "Empowerment",
  empowermentDesc:
    "Building capacity and confidence in communities to drive their own development",
  communityEngagement: "Community Engagement",
  communityEngagementDesc:
    "Fostering active participation and collective decision-making processes",
  leadershipDevelopment: "Leadership Development",
  leadershipDevelopmentDesc:
    "Nurturing local leaders and change-makers within communities",
  sustainableInnovation: "Sustainable Innovation",
  sustainableInnovationDesc:
    "Creating lasting solutions through creative and innovative approaches",

  // Our Programs Section
  ourPrograms: "Our Programs",
  programsDesc:
    "Comprehensive initiatives designed to address community needs through innovative approaches",
  healthWellness: "Health & Wellness",
  livelihoodEnhancement: "Livelihood Enhancement",
  socialTheatre: "Social Theatre",
  communityLearning: "Community Learning",

  // Program Details
  healthSubtitle: "Adhigamsvasthya",
  healthDesc:
    "Comprehensive health education through interactive dialogue sessions, community theatre, and practical workshops.",
  healthFeatures1: "Health awareness campaigns",
  healthFeatures2: "Ayushman card registration support",
  healthFeatures3: "Menstrual health education",
  healthFeatures4: "Nutrition and hygiene workshops",
  healthImpact: "Reached 15,000+ individuals with health education",

  livelihoodSubtitle: "Adhigamsvavalamban",
  livelihoodDesc:
    "Skills development and economic empowerment programs connecting communities with sustainable income opportunities.",
  livelihoodFeatures1: "Tailoring and craft training",
  livelihoodFeatures2: "Street vendor support programs",
  livelihoodFeatures3: "Government scheme linkages",
  livelihoodFeatures4: "Microenterprise development",
  livelihoodImpact: "Trained 3,000+ individuals in various skills",

  theatreSubtitle: "Adhigamnatyya",
  theatreDesc:
    "Using performing arts as a powerful medium for social change and community awareness building.",
  theatreFeatures1: "Street theatre performances",
  theatreFeatures2: "Folk art integration",
  theatreFeatures3: "Community dialogue sessions",
  theatreFeatures4: "Social issue dramatization",
  theatreImpact: "Conducted 200+ performances across communities",

  educationSubtitle: "Adhigamshala",
  educationDesc:
    "Establishing local learning ecosystems focused on holistic development and skill building.",
  educationFeatures1: "Foundational literacy programs",
  educationFeatures2: "Creative skill development",
  educationFeatures3: "Leadership training for girls",
  educationFeatures4: "Youth educator development",
  educationImpact: "Established 50+ learning centers",
  keyFeatures: "Key Features:",

  // Our Journey Section
  ourJourney: "Our Journey",
  journeyDesc: "From a simple conversation to a transformative movement",
  theBeginning: "The Beginning",
  theBeginningDesc:
    "It all started with a simple conversation about the challenges faced by underprivileged communities. Sanjay Kumar Thakur, working in villages for years, recognized the absence of meaningful education, health, and livelihood programs.",
  theVision: "The Vision",
  theVisionDesc:
    "Sanjay Kumar from Araria district joined this vision, having witnessed how communities lack access to information and opportunities. Together, they believed in empowering people with the right guidance.",
  quote:
    "If some people start from the heart, even a small diya can change the direction of society.",

  // FAQ Section
  questionsAnswers: "Questions & Answers",
  faqDesc: "Everything you need to know about our work and impact",
  faqQ1: "What makes Panchlight Foundation unique?",
  faqA1:
    "We combine traditional community engagement with innovative approaches like street theatre, creating sustainable impact through local leadership development and comprehensive program integration.",
  faqQ2: "How do you measure your impact?",
  faqA2:
    "We track quantitative metrics like people reached and programs conducted, while also measuring qualitative changes in community empowerment, skill development, and social awareness levels.",
  faqQ3: "What areas do you currently serve?",
  faqA3:
    "We actively operate across multiple districts in Bihar, with our programs reaching over 50,000 individuals through community-based interventions and partnerships.",
  faqQ4: "How can individuals or organizations partner with you?",
  faqA4:
    "We welcome partnerships through volunteering, funding, resource sharing, or collaborative program development. Contact us to explore how we can work together for community transformation.",
};

const hindiContent = {
  heroTitle: "दान सबसे अच्छा सामाजिक कार्य है",
  heroSubtitle: "मदद करने वाले हाथ प्रार्थना करने वाले होंठों से बेहतर हैं",
  donateNow: "अब दान करें",
  aboutNav: "परिचय",
  contactNav: "संपर्क करें",
  donationNav: "दान",
  teamNav: "टीम",
  impactNav: "प्रभाव",

  // About Section
  aboutPunchlightTitle: "पंचलाइट फाउंडेशन के बारे में",
  aboutPunchlightP1:
    "हम एक गतिशील संगठन हैं जो शिक्षा, स्वास्थ्य सेवा, स्वच्छता, स्वच्छ ऊर्जा और आजीविका सहायता में प्रभावशाली कार्यक्रमों के माध्यम से हाशिए पर पड़े समुदायों को सशक्त बनाने के लिए प्रतिबद्ध हैं।",
  aboutPunchlightP2:
    "हमारा मिशन स्कूल छोड़ चुके बच्चों को शिक्षा से जोड़कर, मुफ्त स्वास्थ्य शिविरों का आयोजन करके, और रचनात्मक कहानी कहने के माध्यम से सामुदायिक जागरूकता को बढ़ावा देकर जमीनी स्तर पर बदलाव लाना है।",
  aboutPunchlightP3:
    "नुक्कड़ नाटक और समुदाय-संचालित अभियानों की शक्ति के माध्यम से, हम जागरूकता फैलाते हैं और ऐसे समाज की वकालत करते हैं जहां हर व्यक्ति गरिमा, आशा और अवसर के साथ रह सके।",

  // Legal & Registration Section
  legalHeading: "कानूनी और पंजीकरण विवरण",
  trustAct: "ट्रस्ट अधिनियम:",
  trustActDetail: "भारतीय ट्रस्ट अधिनियम 1882",
  trustRegistration: "ट्रस्ट पंजीकरण:",
  trustRegistrationDetail: "टोकन नंबर 2170/2024, डीड नंबर 11",
  panNo: "पैन नंबर:",
  panNoDetail: "AAFTP7183C",
  ngoDarpanUid: "एनजीओ दर्पण यूआईडी:",
  ngoDarpanUidDetail: "BR/2024/0417447",
  twelveANo: "12ए नंबर:",
  twelveANoDetail: "AAFTP7183CE20241",
  eightyGNo: "80जी नंबर:",
  eightyGNoDetail: "AAFTP7183CF20241",
  gstin: "जीएसटीआईएन:",
  gstinDetail: "10AAFTP7183C1ZS",

  // Action Boxes
  actionBoxDonate: "हमें दान करें",
  actionBoxGetInvolved: "शामिल हों",
  actionBoxVolunteer: "स्वयंसेवक बनें",

  // Our Approach Section
  approachHeading: "हमारा दृष्टिकोण",
  approachText:
    "भारत के सबसे कम सेवा वाले क्षेत्रों में थिएटर, शिक्षा और सामुदायिक कार्रवाई के माध्यम से प्रेरणादायक शिक्षा, संवाद और जमीनी स्तर के नेतृत्व की दिशा में।",

  // Our Causes Section
  ourMissionHeading: "हमारा लक्ष्य",
  ourMissionDescription:
    "कोई भी राष्ट्र बढ़ और फल-फूल नहीं सकता, आपको इच्छुक होना होगा। लेकिन हम जानते हैं कि हमेशा बढ़ने का एक तरीका होता है। अन्यथा एवरेस्ट का क्या अच्छा! कहो, व्यापार के लिए अच्छा खेलो। हम ये इसलिए करते हैं क्योंकि हम समुदायों के साथ अच्छा व्यवहार करते हैं। हम इस बारे में केवल प्रासंगिक के साथ अलग तरह से सोच सकते हैं। यही कारण है कि हम शिक्षा और समुदाय पर ध्यान केंद्रित करते हुए महत्वपूर्ण सेवाओं को प्रतिबद्ध कर सकते हैं ताकि ग्राहकों को हर दिन बेहतर बढ़ने में मदद मिल सके।",
  ourStoryHeading: "हमारी कहानी",
  ourStoryDescription:
    "2008 में एमआईटी में साथी स्नातक छात्रों के रूप में, ब्रायन और चेर्नीन को जेली बहुत बहुमुखी दुकान और लड़के का एक डेमो मिला। ग्राहक अब जेली के लिए व्यक्तिगत रूप से देखने में संकोच नहीं कर रहे थे - इसमें अद्वितीय लुक थे।",
  learningEmpowermentHeading: "शिक्षण-केंद्रित सशक्तिकरण",
  learningEmpowermentDescription:
    "हमारा मानना है कि स्थायी परिवर्तन सीखने से शुरू होता है। पंचलाइट फाउंडेशन में, प्रत्येक पहल - चाहे वह शिक्षा, स्वास्थ्य, नुक्कड़ नाटक, या आजीविका में हो - अधिगम (सीखने) के सिद्धांत पर आधारित है। हम जमीनी स्तर पर, सांस्कृतिक रूप से निहित और संवादात्मक शिक्षण प्रक्रियाएं सह-बनाते हैं।",
  theatreAsToolHeading: "सामाजिक परिवर्तन के लिए एक उपकरण के रूप में रंगमंच",
  theatreAsToolDescription:
    "हमारे अधिगम नाट्या कार्यक्रम के माध्यम से, हम गंभीर सामाजिक मुद्दों पर जागरूकता बढ़ाने के लिए नुक्कड़ नाटक, लोक कला और सार्वजनिक संवाद का उपयोग करते हैं। हमारे लिए, रंगमंच सिर्फ प्रदर्शन नहीं है - यह प्रतिबिंब, बातचीत और सामूहिक परिवर्तन का एक उपकरण है।",
  communityLedChangeHeading: "समुदाय-नेतृत्व परिवर्तन",
  communityLedChangeDescription:
    "हमारा मानना है कि सबसे टिकाऊ परिवर्तन भीतर से आता है। पंचलाइट युवाओं, महिलाओं और बच्चों को अधिगम सारथी (शिक्षण सुविधाकर्ता) और अधिगम कलाकारों के रूप में पोषण करके स्थानीय नेतृत्व बनाने में निवेश करता है, जो अपने स्वयं के समुदायों में सामाजिक प्रगति के लिए उत्प्रेरक बन जाते हैं।",
  equityInclusionHeading: "समानता और समावेशन",
  equityInclusionDescription:
    "हम सभी के लिए - विशेष रूप से महिलाओं, किशोर लड़कियों और हाशिए पर पड़े समुदायों के लिए - न्यायपूर्ण और समावेशी स्थान बनाने पर अपने प्रयासों को केंद्रित करते हैं। हमारे कार्यक्रम अंतराल को पाटने और अनसुने को सशक्त बनाने के लिए डिज़ाइन किए गए हैं।",

  // --- ADDITIONS FOR CONTACT PAGE ---
  sendUsMessage: "हमें एक संदेश भेजें",
  yourName: "आपका नाम",
  yourEmail: "आपका ईमेल",
  subject: "विषय",
  yourMessage: "आपका संदेश",
  sendMessage: "संदेश भेजें",
  phone: "फ़ोन",
  email: "ईमेल",
  location: "स्थान",
  punchlightOffice: "पंचलाइट कार्यालय",
  currentLocation: "वर्तमान स्थान",
  latitude: "अक्षांश",
  longitude: "देशांतर",
  findUsOnline: "हमें ऑनलाइन ढूंढें!",
  searchLocation: "स्थान खोजें",
  enterCity: "शहर दर्ज करें",
  enterPincode: "पिनकोड दर्ज करें",
  search: "खोजें",
  sorryNotPresent:
    "क्षमा करें, पंचलाइट कार्यालय वर्तमान में यहां मौजूद नहीं है।",
  messageSentSuccess: "आपका संदेश भेज दिया गया है!",
  messageSentFail:
    "आपका संदेश भेजने में विफल रहा। कृपया बाद में पुनः प्रयास करें।",

  // --- ADDITIONS FOR FOOTER ---
  hopeForAllTitle: "आशा सबके लिए",
  hopeForAllDescription:
    "शिक्षा, स्वास्थ्य सेवा और सतत विकास के माध्यम से समुदायों को सशक्त बनाना।",
  quickLinks: "त्वरित कड़ियाँ",
  footerOurMission: "हमारा लक्ष्य",
  programs: "कार्यक्रम",
  gallery: "गैलरी",
  donate: "दान करें",
  volunteer: "स्वयंसेवक बनें",
  contactUs: "हमसे संपर्क करें",
  goToTop: "ऊपर जाएं",
  copyright: "© 2024 पंचलाइट। सर्वाधिकार सुरक्षित।",
  privacyPolicy: "गोपनीयता नीति",
  termsOfService: "सेवा की शर्तें",
  followUs: "हमारा अनुसरण करें",

  // --- ADDITIONS FOR NAVBAR ---
  whatWeDoNav: "हम क्या करते हैं",
  aboutMission: "हमारा मिशन",
  aboutVision: "हमारी दृष्टि",
  aboutTeam: "हमारी टीम",
  education: "शिक्षा",
  healthcare: "स्वास्थ्य सेवा",
  empowerment: "सशक्तिकरण",

  // --- NEW ADDITIONS FOR TEAM PAGE ---
  meetOurTeam: "हमारी टीम से मिलें",
  leadingWithVision: "दृष्टि के साथ नेतृत्व, उद्देश्य के साथ प्रेरणा",
  teamIntro:
    "ग्रामीण समुदायों के लिए अवसर पैदा करने, आजीवन सीखने को बढ़ावा देने और सकारात्मक, स्थायी परिवर्तन लाने के लिए समर्पित एक बहु-सांस्कृतिक टीम।",
  readMore: "और पढ़ें",
  getInvolved: "शामिल हों",
  getInvolvedIntro:
    "पंचलाइट फाउंडेशन के साथ बदलाव का हिस्सा बनें। चाहे आप एक कलाकार, शिक्षक, स्वयंसेवक, दाता, या केवल कोई ऐसा व्यक्ति हों जो परवाह करता है - आपका समय, कौशल और समर्थन हमें एक अधिक जागरूक, सशक्त और न्यायसंगत समाज बनाने में मदद कर सकता है।",
  volunteerWithUsTitle: "हमारे साथ स्वयंसेवा करें",
  volunteerWithUsDesc:
    "हमारी नुक्कड़ नाटक टीमों, सामुदायिक कार्यशालाओं, या शैक्षिक कार्यक्रमों में शामिल हों। पटकथा लेखन से लेकर मंच प्रदर्शन तक, स्वास्थ्य जागरूकता से लेकर शिक्षण तक - सभी के लिए एक भूमिका है।",
  becomeAdhigamSarthiTitle: "अधिगम सारथी बनें",
  becomeAdhigamSarthiDesc:
    "हमारे अधिगमशाला कार्यक्रम में एक सामुदायिक शिक्षक बनकर बच्चों के सीखने में सहायता करें।",
  supportPerformanceTitle: "एक प्रदर्शन का समर्थन करें",
  supportPerformanceDesc:
    "एक शो को प्रायोजित या व्यवस्थित करके शक्तिशाली नुक्कड़ नाटक को कम सेवा वाले क्षेत्रों तक ले जाने में हमारी मदद करें।",
  donateTitle: "दान करें",
  donateDesc:
    "आपका योगदान हमें अधिक समुदायों तक पहुंचने, अधिक युवाओं को प्रशिक्षित करने और हाशिए पर पड़े लोगों की आवाज़ों को बढ़ाने में सक्षम बनाता है।",
  partnerWithUsTitle: "हमारे साथ भागीदारी करें",
  partnerWithUsDesc:
    "हम गैर-सरकारी संगठनों, स्थानीय निकायों, कलाकारों और संस्थानों के साथ सहयोग का स्वागत करते हैं जो सामाजिक परिवर्तन के हमारे मिशन को साझा करते हैं।",
  beAVoiceForChange:
    "बदलाव की आवाज़ बनें। आपकी लगन, रचनात्मकता और प्रतिबद्धता समुदायों को जागरूकता और कार्रवाई से रोशन कर सकती है।",
  joinPunchlightFoundation: "पंचलाइट फाउंडेशन में शामिल हों",
  joinPunchlightDesc1:
    "आपकी आवाज़ मायने रखती है। जागरूकता फैलाकर, दूसरों को सशक्त बनाकर, और कला और कार्रवाई के माध्यम से बदलाव को संभव बनाकर एक न्यायसंगत और सूचित समाज के निर्माण में हमारे साथ जुड़ें।",
  joinPunchlightDesc2:
    "साथ मिलकर, हम विचारों को प्रभाव में और करुणा को सामूहिक शक्ति में बदल सकते हैं।",
  joinNow: "अभी जुड़ें",

  // Team Member Descriptions (Specific translations for descriptions are crucial)
  prashantPalName: "प्रशांत पाल",
  prashantPalPosition: "संस्थापक और सीईओ, प्योर इंडिया ट्रस्ट",
  prashantPalDescription: `प्रशांत पाल एक अनुभवी पेशेवर हैं जिन्होंने दशकों तक कॉर्पोरेट और सामाजिक क्षेत्रों में काम किया है। 2013 में, उन्होंने प्योर इंडिया ट्रस्ट की स्थापना की, जिसका उद्देश्य उद्यमिता, कौशल विकास और शिक्षा के माध्यम से महिलाओं और दिव्यांग व्यक्तियों को सशक्त बनाना है। एक मध्यमवर्गीय पृष्ठभूमि से आने वाले, प्रशांत ने गरीबी और आर्थिक संघर्षों को करीब से देखा, जिसने उन्हें जरूरतमंदों की मदद करने के लिए प्रेरित किया। अन्ना हजारे आंदोलन से प्रभावित होकर, वह 2012 में भारत लौट आए और सामाजिक परिवर्तन के लिए काम करना शुरू कर दिया। पंचलाइट फाउंडेशन में, वह एक मुख्य सलाहकार और संरक्षक के रूप में महत्वपूर्ण भूमिका निभा रहे हैं। अपने व्यापक अनुभव और मार्गदर्शन से, संगठन समाज में प्रभावशाली बदलाव लाने के अपने उद्देश्य में मजबूती से आगे बढ़ रहा है।`,

  shMasoomName: "एस.एच. मासूम",
  shMasoomPosition: "एक शिक्षक, लेखक और साक्षरता कार्यकर्ता",
  shMasoomDescription: null,

  abodhKumarName: "अबोध कुमार",
  abodhKumarPosition: "सह-संस्थापक और ट्रस्टी, प्रोजेक्ट पोटेंशियल",
  abodhKumarDescription: `अबोध कुमार ने बचपन से ही आत्मनिर्भरता और कड़ी मेहनत में विश्वास किया है। बिहार में अपने पिता की लोहार की दुकान पर शुरुआत करने के बाद, उन्होंने 10 साल की उम्र में एक जूस का स्टॉल लगाया और अपनी पहली कमाई से संस्कृत व्याकरण की किताब खरीदी। उन्होंने अपनी हाई स्कूल और कॉलेज की शिक्षा स्वयं वित्तपोषित की। अज़ीम प्रेमजी विश्वविद्यालय, बेंगलुरु से नेतृत्व विकास में स्नातकोत्तर डिप्लोमा धारक, अबोध व्यक्तिगत विकास और सामुदायिक सशक्तिकरण के लिए समर्पित हैं। उनकी जमीनी समझ और नेतृत्व कौशल पंचलाइट फाउंडेशन के सामुदायिक कार्य का मार्गदर्शन करते हैं। एक मुख्य सलाहकार और संरक्षक के रूप में, वह संगठन की रणनीतियों में महत्वपूर्ण भूमिका निभाते हैं, समाज में सकारात्मक बदलाव लाने की हमारी प्रतिबद्धता को और मजबूत करते हैं।`,

  amitKumarThakurName: "अमित कुमार ठाकुर",
  amitKumarThakurPosition: "प्रधान के टीम समन्वयक",
  amitKumarThakurDescription: null,

  sanjayKumarThakurName: "संजय कुमार ठाकुर",
  sanjayKumarThakurPosition: "संस्थापक और प्रबंध ट्रस्टी",
  sanjayKumarThakurDescription: `संजय कुमार ठाकुर पंचलाइट फाउंडेशन ट्रस्ट के दूरदर्शी संस्थापक हैं, जो थिएटर को सामाजिक परिवर्तन के एक शक्तिशाली उपकरण के रूप में उपयोग करने के लिए समर्पित एक मंच है। 2003 में बिहार के अररिया से अपनी यात्रा शुरू करते हुए, उन्होंने IPTA, रेणु सांस्कृतिक मंच, और भारतीय कला संस्कृति मंच जैसे प्रतिष्ठित संगठनों के साथ नाटकों के माध्यम से महत्वपूर्ण सामाजिक मुद्दों पर जागरूकता बढ़ाई। 2005 में, एड्स जागरूकता अभियान में उनकी भागीदारी ने उन्हें एहसास कराया कि कला वास्तविक परिवर्तन ला सकती है। भारतीय कला संस्कृति मंच (2006-2010) के सचिव के रूप में उनके नेतृत्व में शिक्षा, निषेध और सामाजिक सुधार पर महत्वपूर्ण अभियान चलाए गए। उन्होंने बाद में मुख्यमंत्री अक्षर आँचल योजना जैसे प्रभावशाली परियोजनाओं में योगदान दिया और बाल कुपोषण, बाल विवाह और दहेज से निपटने के लिए J-PAL साउथ एशिया, बिहार शिक्षा परियोजना परिषद और समाज कल्याण विभाग के साथ काम किया। अक्टूबर 2011 से जुलाई 2012 तक, उन्होंने J-PAL साउथ एशिया के लिए एक सर्वेयर के रूप में काम किया, सर्वेक्षण किया और सामाजिक हस्तक्षेपों में अनुसंधान में योगदान दिया। 2015 में, उन्होंने प्रोजेक्ट पोटेंशियल ट्रस्ट के साथ ग्रामीण विकास और शिक्षा पहल का नेतृत्व किया और ई-अर्थ कला मंच (2018-2020) के माध्यम से सामाजिक परिवर्तन को आगे बढ़ाया। महामारी के दौरान, उन्होंने PRADAN के साथ जागरूकता अभियानों पर काम किया और बाद में दिव्य भारत हिंदी समाचार में एक समाचार एंकर बन गए। अप्रैल 2021 से मार्च 2022 तक, उन्होंने PRADAN के साथ सेकेंड चांस एजुकेशन प्रोजेक्ट पर काम किया, जिससे महिलाओं को शिक्षा के माध्यम से सशक्त बनाया गया। 2022 में, उन्होंने पंचलाइट फाउंडेशन ट्रस्ट की स्थापना की, प्रभावशाली नुक्कड़ नाटकों का मंचन करके अपनी दृष्टि को जीवन में लाया। उनके नेतृत्व में, फाउंडेशन ने स्थानीय समुदायों के सहयोग से स्वच्छता, सशक्तिकरण और मतदाता जागरूकता जैसे प्रमुख मुद्दों को संबोधित किया। आज, संजय कुमार ठाकुर अपनी कला के माध्यम से बदलाव को प्रेरित करना जारी रखते हैं, पंचलाइट फाउंडेशन ट्रस्ट के मिशन को आगे बढ़ा रहे हैं - एक अधिक सूचित, समावेशी और सशक्त समाज का निर्माण कर रहे हैं।`,

  rajaniJhaName: "रजनी झा",
  rajaniJhaPosition: "ट्रस्टी",
  rajaniJhaDescription: `रजनी झा ने यूनिसेफ जैसे प्रतिष्ठित संगठनों के साथ काम किया है, विभिन्न सामाजिक कारणों में अपनी विशेषज्ञता का योगदान दिया है। ऐसे संगठनों के साथ काम करने के उनके अनुभव ने उन्हें जमीनी और वैश्विक दोनों स्तरों पर महत्वपूर्ण मुद्दों को संबोधित करने में मूल्यवान अंतर्दृष्टि प्राप्त करने में मदद की है। वर्तमान में, वह पंचलाइट फाउंडेशन की ट्रस्टी के रूप में कार्य करती हैं, जहां वह बाल विवाह, स्वास्थ्य, महिला सशक्तिकरण और महामारियों जैसे सामाजिक मुद्दों पर जागरूकता बढ़ाने और उन्हें संबोधित करने के लिए सक्रिय रूप से काम करती हैं। अपनी भूमिका के माध्यम से, वह सकारात्मक सामाजिक परिवर्तन बनाने की दिशा में महत्वपूर्ण योगदान देना जारी रखती हैं।`,

  ramashankarDasName: "राम शंकर दास",
  ramashankarDasPosition: "सेटलॉर और ट्रस्टी",
  ramashankarDasDescription: `रामशंकर दास एक अनुभवी उद्यमी और प्रतिबद्ध परोपकारी हैं। समावेशी विकास में दृढ़ विश्वास के साथ, उन्होंने अपने व्यावसायिक प्रयासों के साथ-साथ सामुदायिक कल्याण पहलों का लगातार समर्थन किया है। COVID-19 लॉकडाउन के दौरान, उन्होंने एक स्थानीय एनजीओ को आवश्यक वस्तुओं को क्रेडिट पर बाजार से कम दरों पर आपूर्ति करके महत्वपूर्ण सहायता प्रदान की, जिससे वंचित समुदायों तक प्रभावी राहत वितरण संभव हो पाया। पंचलाइट फाउंडेशन के सेटलॉर और बोर्ड सदस्य के रूप में, श्री दास रणनीतिक अंतर्दृष्टि और सामाजिक प्रतिबद्धता का एक अनूठा मिश्रण लाते हैं। उनका मार्गदर्शन और निरंतर समर्थन शिक्षा, जागरूकता और सशक्तिकरण के माध्यम से जमीनी स्तर पर बदलाव लाने के फाउंडेशन के मिशन को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाते हैं।`,

  lakshmiDeviName: "लक्ष्मी देवी",
  lakshmiDeviPosition: "ट्रस्टी",
  lakshmiDeviDescription: `लक्ष्मी देवी एक प्रतिबद्ध समाज सेविका हैं जो समाज में सकारात्मक बदलाव लाने के लिए समर्पित हैं। उन्होंने महिला सशक्तिकरण, शिक्षा, स्वास्थ्य और सामाजिक समानता जैसे विभिन्न सामाजिक मुद्दों पर काम किया है, जिसमें हाशिए पर पड़े समुदायों का समर्थन करने पर ध्यान केंद्रित किया गया है। वह बाल विवाह और महामारियों जैसे महत्वपूर्ण मुद्दों पर महिलाओं के बीच जागरूकता बढ़ाने के लिए नियमित रूप से बैठकें आयोजित करती हैं। वर्तमान में, वह पंचलाइट फाउंडेशन की ट्रस्टी के रूप में कार्य करती हैं, संगठन की सामाजिक पहलों और कार्यक्रमों के लिए मार्गदर्शन और सहायता प्रदान करती हैं। उनका नेतृत्व और प्रतिबद्धता सकारात्मक सामाजिक परिवर्तन बनाने के फाउंडेशन के मिशन को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाती हैं।`,

  akankshaBhartiName: "आकांक्षा भारती",
  akankshaBhartiPosition: "अधिगम सारथी",
  akankshaBhartiDescription: `आकांक्षा एक शिक्षिका और समाज सेविका हैं जिनके पास शिक्षा के क्षेत्र में तीन वर्षों का अनुभव है। उन्होंने निजी स्कूलों में पढ़ाते हुए बच्चों के सर्वांगीण विकास में योगदान दिया है। वर्तमान में, वह उच्च शिक्षा प्राप्त कर रही हैं और "अधिगमशाला" जैसी पहलों में पंचलाइट फाउंडेशन के साथ सक्रिय रूप से जुड़ी हुई हैं। वह शिक्षा और जागरूकता के माध्यम से समाज में सकारात्मक बदलाव लाने के लिए प्रतिबद्ध हैं।`,

  jiwachhRamName: "जीवाछ राम",
  jiwachhRamPosition: "कलाकार",
  jiwachhRamDescription: `जीवाछ राम ने 1992 में नुक्कड़ नाटक के साथ अपनी यात्रा शुरू की। इन वर्षों में, उन्होंने विभिन्न सामाजिक मुद्दों पर जागरूकता बढ़ाने के लिए नुक्कड़ नाटकों में सक्रिय रूप से भाग लिया है। उन्होंने बाल कुपोषण, निषेध, बाल विवाह, दहेज उन्मूलन, स्वच्छता और मतदाता जागरूकता जैसे विषयों पर नाटक किए हैं, और कई अभियानों में योगदान दिया है। जीवाछ राम ने थिएटर के माध्यम से सामाजिक परिवर्तन को बढ़ावा देने में महत्वपूर्ण भूमिका निभाई है, अपने प्रदर्शन का उपयोग शिक्षा और जागरूकता फैलाने के लिए किया है। वह समाज में सकारात्मक बदलाव लाने के लिए थिएटर की शक्ति में विश्वास करते हैं और अपने नाटकों के माध्यम से लोगों को सशक्त बनाने का प्रयास करते हैं। वर्तमान में, वह पंचलाइट फाउंडेशन से जुड़े हुए हैं और उनके नुक्कड़ नाटक कार्यक्रमों में सक्रिय रूप से भाग लेते हैं।`,

  // Hero Section (WhatWeDo)
  transformingCommunities: "समुदायों को बदलना",
  transformingCommunitiesDesc:
    "अभिनव कार्यक्रमों और जमीनी जुड़ाव के माध्यम से, हम बिहार में वंचित समुदायों के लिए एक स्थायी भविष्य का निर्माण कर रहे हैं।",
  exploreOurImpact: "हमारे प्रभाव का अन्वेषण करें",
  livesTransformed: "जीवन परिवर्तित",
  livesTransformedDesc: "बिहार में व्यक्तियों तक पहुँचे",
  districtsCovered: "जिले शामिल",
  districtsCoveredDesc: "व्यापक भौगोलिक पहुँच",
  communityPrograms: "सामुदायिक कार्यक्रम",
  communityProgramsDesc: "सक्रिय हस्तक्षेप चल रहे हैं",
  partnerOrganizations: "साझेदार संगठन",
  partnerOrganizationsDesc: "सहयोगी भागीदारी",

  // Our Pillars Section
  ourFoundationPillars: "हमारे मूलभूत स्तंभ",
  pillarsDesc:
    "मुख्य सिद्धांत जो हमारे मिशन को आगे बढ़ाते हैं और सामुदायिक विकास के लिए हमारे दृष्टिकोण को आकार देते हैं",
  empowerment: "सशक्तिकरण",
  empowermentDesc:
    "समुदायों में अपने स्वयं के विकास को आगे बढ़ाने के लिए क्षमता और आत्मविश्वास का निर्माण करना",
  communityEngagement: "सामुदायिक जुड़ाव",
  communityEngagementDesc:
    "सक्रिय भागीदारी और सामूहिक निर्णय लेने की प्रक्रियाओं को बढ़ावा देना",
  leadershipDevelopment: "नेतृत्व विकास",
  leadershipDevelopmentDesc:
    "समुदायों के भीतर स्थानीय नेताओं और परिवर्तन-निर्माताओं का पोषण करना",
  sustainableInnovation: "स्थायी नवाचार",
  sustainableInnovationDesc:
    "रचनात्मक और अभिनव दृष्टिकोणों के माध्यम से स्थायी समाधान बनाना",

  // Our Programs Section
  ourPrograms: "हमारे कार्यक्रम",
  programsDesc:
    "अभिनव दृष्टिकोणों के माध्यम से सामुदायिक आवश्यकताओं को पूरा करने के लिए डिज़ाइन की गई व्यापक पहल",
  healthWellness: "स्वास्थ्य और कल्याण",
  livelihoodEnhancement: "आजीविका संवर्धन",
  socialTheatre: "सामाजिक रंगमंच",
  communityLearning: "सामुदायिक शिक्षा",

  // Program Details
  healthSubtitle: "अधिगमस्वस्थ्या",
  healthDesc:
    "संवादात्मक संवाद सत्रों, सामुदायिक रंगमंच और व्यावहारिक कार्यशालाओं के माध्यम से व्यापक स्वास्थ्य शिक्षा।",
  healthFeatures1: "स्वास्थ्य जागरूकता अभियान",
  healthFeatures2: "आयुष्मान कार्ड पंजीकरण सहायता",
  healthFeatures3: "मासिक धर्म स्वास्थ्य शिक्षा",
  healthFeatures4: "पोषण और स्वच्छता कार्यशालाएँ",
  healthImpact: "स्वास्थ्य शिक्षा के साथ 15,000+ व्यक्तियों तक पहुँचे",

  livelihoodSubtitle: "अधिगमस्वावलंबन",
  livelihoodDesc:
    "समुदायों को स्थायी आय के अवसरों से जोड़ने वाले कौशल विकास और आर्थिक सशक्तिकरण कार्यक्रम।",
  livelihoodFeatures1: "सिलाई और शिल्प प्रशिक्षण",
  livelihoodFeatures2: "स्ट्रीट वेंडर सहायता कार्यक्रम",
  livelihoodFeatures3: "सरकारी योजना लिंकेज",
  livelihoodFeatures4: "सूक्ष्म उद्यम विकास",
  livelihoodImpact: "विभिन्न कौशलों में 3,000+ व्यक्तियों को प्रशिक्षित किया",

  theatreSubtitle: "अधिगमनाट्या",
  theatreDesc:
    "सामाजिक परिवर्तन और सामुदायिक जागरूकता निर्माण के लिए प्रदर्शन कलाओं का एक शक्तिशाली माध्यम के रूप में उपयोग करना।",
  theatreFeatures1: "नुक्कड़ नाटक प्रदर्शन",
  theatreFeatures2: "लोक कला एकीकरण",
  theatreFeatures3: "सामुदायिक संवाद सत्र",
  theatreFeatures4: "सामाजिक मुद्दों का नाटकीयकरण",
  theatreImpact: "समुदायों में 200+ प्रदर्शन आयोजित किए गए",

  educationSubtitle: "अधिगमशाला",
  educationDesc:
    "समग्र विकास और कौशल निर्माण पर केंद्रित स्थानीय शिक्षण पारिस्थितिकी तंत्र स्थापित करना।",
  educationFeatures1: "बुनियादी साक्षरता कार्यक्रम",
  educationFeatures2: "रचनात्मक कौशल विकास",
  educationFeatures3: "लड़कियों के लिए नेतृत्व प्रशिक्षण",
  educationFeatures4: "युवा शिक्षक विकास",
  educationImpact: "50+ शिक्षण केंद्र स्थापित किए",
  keyFeatures: "मुख्य विशेषताएं:",

  // Our Journey Section
  ourJourney: "हमारी यात्रा",
  journeyDesc: "एक साधारण बातचीत से एक परिवर्तनकारी आंदोलन तक",
  theBeginning: "शुरुआत",
  theBeginningDesc:
    "यह सब वंचित समुदायों के सामने आने वाली चुनौतियों के बारे में एक साधारण बातचीत से शुरू हुआ। संजय कुमार ठाकुर, जो वर्षों से गांवों में काम कर रहे थे, ने सार्थक शिक्षा, स्वास्थ्य और आजीविका कार्यक्रमों की अनुपस्थिति को पहचाना।",
  theVision: "दृष्टि",
  theVisionDesc:
    "अररिया जिले के संजय कुमार इस विजन में शामिल हुए, जिन्होंने देखा था कि समुदायों में सूचना और अवसरों तक पहुंच की कमी है। साथ में, उन्होंने सही मार्गदर्शन के साथ लोगों को सशक्त बनाने में विश्वास किया।",
  quote:
    "अगर कुछ लोग दिल से शुरुआत करें, तो एक छोटी सी दीया भी समाज की दिशा बदल सकती है।",

  // FAQ Section
  questionsAnswers: "प्रश्न और उत्तर",
  faqDesc: "हमारे काम और प्रभाव के बारे में वह सब कुछ जो आपको जानना चाहिए",
  faqQ1: "पंचलाइट फाउंडेशन को क्या खास बनाता है?",
  faqA1:
    "हम पारंपरिक सामुदायिक जुड़ाव को नुक्कड़ नाटक जैसे अभिनव दृष्टिकोणों के साथ जोड़ते हैं, स्थानीय नेतृत्व विकास और व्यापक कार्यक्रम एकीकरण के माध्यम से स्थायी प्रभाव पैदा करते हैं।",
  faqQ2: "आप अपने प्रभाव को कैसे मापते हैं?",
  faqA2:
    "हम व्यक्तियों तक पहुँचे और चलाए गए कार्यक्रमों जैसे मात्रात्मक मेट्रिक्स को ट्रैक करते हैं, जबकि सामुदायिक सशक्तिकरण, कौशल विकास और सामाजिक जागरूकता स्तरों में गुणात्मक परिवर्तनों को भी मापते हैं।",
  faqQ3: "आप वर्तमान में किन क्षेत्रों में सेवा करते हैं?",
  faqA3:
    "हम बिहार के कई जिलों में सक्रिय रूप से काम करते हैं, हमारे कार्यक्रम सामुदायिक-आधारित हस्तक्षेपों औरS भागीदारियों के माध्यम से 50,000 से अधिक व्यक्तियों तक पहुँचते हैं।",
  faqQ4: "व्यक्ति या संगठन आपके साथ कैसे साझेदारी कर सकते हैं?",
  faqA4:
    "हम स्वयंसेवा, फंडिंग, संसाधन साझाकरण, या सहयोगी कार्यक्रम विकास के माध्यम से भागीदारी का स्वागत करते हैं। यह जानने के लिए हमसे संपर्क करें कि हम सामुदायिक परिवर्तन के लिए कैसे एक साथ काम कर सकते हैं।",
};

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );
  const [content, setContent] = useState(
    language === "hi" ? hindiContent : englishContent
  );

  useEffect(() => {
    setContent(language === "hi" ? hindiContent : englishContent);
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}
