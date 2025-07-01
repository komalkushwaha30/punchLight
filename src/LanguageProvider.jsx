import React, { createContext, useState, useEffect, useContext } from "react";

// Consolidated English content for all pages
const englishContent = {
  // Navbar content
  homeNav: "Home",
  aboutNav: "About",
  aboutMission: "Our Mission",
  aboutVision: "Our Vision",
  aboutTeam: "Our Team",
  whatWeDoNav: "What We Do",
  education: "Education",
  healthcare: "Healthcare",
  empowerment: "Empowerment",
  donationNav: "Donation",
  publicationNav: "Publication",
  faqsNav: "FAQs",
  teamNav: "Team",
  contactNav: "Contact",
  programsNav: "Programs",

  // Home Page - Hero Section
  heroMainTitle: "For every community",
  heroSubtitle:
    "A dynamic social organization dedicated to empowering marginalized communities through education, awareness, and healthcare. We also focus on promoting cleanliness, skill development, energy solutions, and sustainable livelihoods.",
  donationButton: "Donation",
  volunteerButton: "Become a Volunteer",

  // Home Page - Vision Section
  visionMissionProblemTitle: "Vision, Mission & Problem Statement",
  visionText:
    "To build an inclusive and empowered society by using theatre, education, and community dialogue—especially for women and girls in rural India.",
  missionText:
    "To enable awareness, expression, and self-reliance among marginalized communities through creative and participatory platforms.",
  problemStatementText:
    "In rural India, especially in districts like Araria, women and youth lack access to quality education, health awareness, skill-building, and public platforms for voice and leadership.",

  // Home Page - Gallery Section
  galleryTitle: "Gallery",
  gallerySubtitle: "Moments that capture our mission in action",
  previewText: "👁 Preview",

  // Home Page - Overlay Section
  overlayTitle:
    "We believe that lasting change begins when communities find their voice.",
  overlayP1:
    "At Punchlight Foundation, we harness the power of street theatre, education, and community dialogue to ignite awareness and action in rural India.",
  overlayP2:
    "Our focus is on empowering women and youth in the most underserved districts through participatory and creative means.",
  overlayP3:
    "From performing plays on health, gender, and livelihoods in village squares, to building local learning spaces and nurturing young educators and artists — we work hand-in-hand with communities to spark dignity, confidence, and self-reliance.",
  overlayBelieveText:
    "Because we believe: real change is not delivered — it's discovered together.",

  // Home Page - Testimonial Section
  testimonialTitle: "Testimony of Chandan Kumar Sah – An Inspiring Journey",
  testimonialP1:
    '"Punchlight Foundation played a vital role in changing my life. Earlier I used to sell vegetables from a handcart all the time, but after joining the organization, I got a chance to work as an actor in street plays. This experience increased my confidence and skills.',
  testimonialP2:
    "Today, with the help of Punchlight Foundation, I am working as Junior Officer, Skill Enhancement & Entrepreneurship at Learning Links Foundation. My financial condition has improved, and my family is now doing well.",
  testimonialP3:
    'I thank Punchlight Foundation from the bottom of my heart for giving me this opportunity and recognizing my potential."',
  testimonialAuthor: "— Chandan Kumar Sah",
  testimonialAuthorTitle: "Junior Officer, Learning Links Foundation",

  partnersRowTitle: "Our Partners",
  // Home Page - Partners Section
  partnersTitle: "Our Partners",
  partnersSubtitle: "Working together to create lasting change",
  partnerUrbanDevelopment: "Urban Development & Housing Dept.",
  partnerProjectPotential: "Project Potential",
  partnerPureIndiaTrust: "Pure India Trust",
  partnerLearningLinksFoundation: "Learning Links Foundation",
  partnerRuralDevelopmentInitiative: "Rural Development Initiative",
  partnerWomenEmpowermentSociety: "Women Empowerment Society",
  partnerEducationForAll: "Education For All",
  partnerHealthCarePartners: "Health Care Partners",

  // About Page - Hero Section
  aboutHeroTitle: "CHARITY IS THE BEST SOCIAL WORK",
  aboutHeroSubtitle: "Helping hands are better than praying lips",
  aboutUsButton: "About Us",

  // About Page - Enhanced About Section
  aboutPunchlightTitle: "About Punchlight Foundation",
  aboutPunchlightP1:
    "We are a dynamic organization committed to empowering marginalized communities through impactful programs in education, healthcare, sanitation, clean energy, and livelihood support.",
  aboutPunchlightP2:
    "Our mission is to bring change at the grassroots level by connecting school dropout children with education, organizing free health camps, and promoting community awareness through creative storytelling.",
  aboutPunchlightP3:
    "Through the power of street theatre and community-driven campaigns, we spread awareness and advocate for a society where every person can live with dignity, hope, and opportunity.",

  // About Page - Founding Story Section
  foundingStoryHeading: " Our Founding Story",
  foundingStorySubtitle: "From a spark to a movement ",
  founderStoryP1:
    "Punchlight Foundation began with a heartfelt discussion among friends who dreamt of doing something meaningful for society. Sanjay Kumar Thakur realized during his work in villages that immense talent and potential exist in every corner of the country—they just need direction and opportunity.",
  founderStoryP2:
    "Neeraj Kumar from Araria, Bihar, joined him with the same vision. He had witnessed how lack of basic awareness held people back. Together, they envisioned change through education, health, hygiene, and street theatre.",
  founderStoryP3:
    "What started with a few small steps soon became a growing movement—spreading across Bihar and beyond.",
  founderQuote:
    "“If some people start from the heart, even a small diya can change the direction of society.”",

  // About Page - Legal & Registration Details
  legalHeading: "Legal & Registration Details",
  legalSubheading:
    "We're registered under the applicable legal frameworks to ensure transparency, credibility, and accountability in all our operations.",
  legalTrustAct: "Trust Act",
  legalTrustActDetail: "Indian Trust Act 1882",
  legalTrustRegistration: "Trust Registration",
  legalTrustRegistrationDetail: "Token No. 2170/2024\nDeed No. 11",
  legalPAN: "PAN Number",
  legalPANDetail: "AAFTP7183C",
  legalNGODarpan: "NGO DARPAN UID",
  legalNGODarpanDetail: "BR/2024/0417447",
  legal12ACertificate: "12A Certificate",
  legal12ACertificateDetail: "AAFTP7183CE20241",
  legal80GCertificate: "80G Certificate",
  legal80GCertificateDetail: "AAFTP7183CF20241",
  legalGSTIN: "GSTIN",
  legalGSTINDetail: "10AAFTP7183C1ZS",

  // About Page - Action Boxes
  donateNowLink: "Donate Now",
  getInvolvedLink: "Get Involved",
  contactLink: "Contact",

  // About Page - Our Approach Section (Summary)
  approachHeading: "Our Approach",
  approachText:
    "Toward inspiring learning, dialogue, and grassroots leadership through theatre, education, and community action in India's most underserved regions.",

  // About Page - Causes Section (Detailed Approach)
  approachLearningCenteredHeading: "Learning-Centered Empowerment",
  approachLearningCenteredDescription:
    "We believe that lasting change begins with learning. At Punchlight Foundation, every initiative — whether in education, health, street theatre, or livelihoods — is grounded in the principle of Adhigam (learning). We co-create learning processes that are grassroots-driven, culturally rooted, and dialogic..",
  approachTheatreToolHeading: "Theatre as a Tool for Social Change",
  approachTheatreToolDescription:
    "Through our AdhigamNatyya program, we use street theatre, folk art, and public dialogues to raise awareness on pressing social issues. For us, theatre is not just performance — it is a tool for reflection, conversation, and collective transformation.",
  approachCommunityLedHeading: "Community-Led Change",
  approachCommunityLedDescription:
    "We believe that the most sustainable change comes from within. Punchlight invests in building local leadership by nurturing youth, women, and children as Adhigam Sarthi (learning facilitators) and Adhigam artists, who become catalysts for social progress in their own communities.",
  approachEquityInclusionHeading: "Equity and Inclusion",
  approachEquityInclusionDescription:
    "We center our efforts on creating just and inclusive spaces for all — especially for women, adolescent girls, and marginalized communities. Our programs are designed to bridge gaps and empower the unheard.",
  approachCollaborationHeading: "Collaboration and Ecosystem Building",
  approachCollaborationDescription:
    "We actively partner with government bodies, NGOs, and grassroots groups to maximize collective impact. Our aim is to build a collaborative ecosystem where knowledge, resources, and capacities are shared for the greater good.",
  approachCulturalSensitivityHeading: "Cultural Sensitivity and Local Context",
  approachCulturalSensitivityDescription:
    "Our work is deeply rooted in the culture, language, and traditions of the communities we serve. We believe that respecting local identities is not only ethical, but also essential for effective and meaningful engagement.",

  // What We Do Page - Hero Section
  wwdHeroHeading: "Transforming Communities",
  wwdHeroSubtext:
    "Through innovative programs and grassroots engagement, we're building a sustainable future for underserved communities across Bihar.",
  wwdExploreImpactButton: "Explore Our Impact",

  // What We Do Page - Impact Stats (Hero Section)
  wwdStatLivesTransformedLabel: "Lives Transformed",
  wwdStatLivesTransformedDescription: "Individuals reached across Bihar",
  wwdStatDistrictsCoveredLabel: "Districts Covered",
  wwdStatDistrictsCoveredDescription: "Extensive geographical reach",
  wwdStatPanchayatsLabel: "Panchayats",
  wwdStatPanchayatsDescription: "Active interventions running",
  wwdStatVillagesLabel: "Villages",
  wwdStatVillagesDescription: "Collaborative partnerships",

  // What We Do Page - Pillars Section
  wwdPillarsHeading: "Our Pillars",
  wwdEmpowermentPillarTitle: "Empowerment",
  wwdEmpowermentPillarDescription:
    "We focus on empowering the underprivileged sections of society through education, health, energy and livelihoods, so that every individual can realize their full potential.",
  wwdCommunityEngagementPillarTitle: "Community Engagement",
  wwdCommunityEngagementPillarDescription:
    "We organise communities and enable them to come together to improve their lives through awareness campaigns, workshops and collective efforts.",
  wwdLeadershipDevelopmentPillarTitle: "Leadership Development",
  wwdLeadershipDevelopmentPillarDescription:
    "Nurturing local leaders and change-makers within communities",
  wwdPartnershipsPillarTitle: "Partnerships",
  wwdPartnershipsPillarDescription:
    "We collaborate with organizations and institutions that want to contribute to the development of rural and urban areas through education, health, energy and livelihoods.",
  wwdImpactPillarTitle: "Impact",
  wwdImpactPillarDescription:
    "We aim to deliver long-term and sustainable results, proving that holistic development is possible through education, health and community empowerment.",
  wwdInnovationPillarTitle: "Innovation",
  wwdInnovationPillarDescription:
    "We develop solutions through modern technologies and new thinking that benefit all sections of society and accelerate development.",

  // What We Do Page - Program Section
  wwdProgramsHeading: "Our Comprehensive Programs",
  wwdProgramsSubtext:
    "Dive into the heart of our mission. Each program is meticulously designed to address specific community needs, fostering sustainable growth and creating lasting positive change.",

  wwdProgramHealthTitle: "Health Education through Dialogue",
  wwdProgramHealthSubtitle: "Adhigamsvasthya",
  wwdProgramHealthDescription:
    "We promote awareness on health, hygiene, and nutrition through workshops and theatre. We also assist in Ayushman card registration and conduct menstrual health workshops to break taboos and ensure dignity.",
  wwdProgramHealthFeature1: "Health, hygiene, and nutrition workshops",
  wwdProgramHealthFeature2: "Menstrual health education to break taboos",
  wwdProgramHealthFeature3: "Ayushman card registration support",
  wwdProgramHealthFeature4: "Community theatre for health awareness",
  wwdProgramHealthImpact: "Reached 15,000+ individuals with health education",

  wwdProgramLivelihoodTitle: "Livelihood Empowerment",
  wwdProgramLivelihoodSubtitle: "Adhigamsvavalamban",
  wwdProgramLivelihoodDescription:
    "We offer tailoring and skills training, and support street vendors and informal workers by connecting them with government schemes like PM SVANidhi, promoting economic self-reliance.",
  wwdProgramLivelihoodFeature1: "Tailoring and skill development training",
  wwdProgramLivelihoodFeature2:
    "Support for street vendors and informal workers",
  wwdProgramLivelihoodFeature3:
    "Linkages to PM SVANidhi and other government schemes",
  wwdProgramLivelihoodFeature4: "Programs for economic self-reliance",
  wwdProgramLivelihoodImpact: "Trained 3,000+ individuals in various skills",

  wwdProgramTheatreTitle: "Street Theatre for Awareness",
  wwdProgramTheatreSubtitle: "Adhigamnatyya",
  wwdProgramTheatreDescription:
    "We use street plays, folk arts, and open dialogues to raise awareness on issues like health, gender equality, environment, and child rights — driven by local artists.",
  wwdProgramTheatreFeature1: "Street plays and folk art performances",
  wwdProgramTheatreFeature2: "Open community dialogues",
  wwdProgramTheatreFeature3:
    "Awareness on gender, health, child rights, environment",
  wwdProgramTheatreFeature4: "Led by local theatre artists",
  wwdProgramTheatreImpact: "Conducted 200+ performances across communities",

  wwdProgramLearningTitle: "Community Learning",
  wwdProgramLearningSubtitle: "Adhigamshala",
  wwdProgramLearningDescription:
    "We run local learning spaces to build foundational literacy, creative skills, and leadership in children — especially girls — led by trained youth educators (Adhigam Sarthis).",
  wwdProgramLearningFeature1: "Foundational literacy programs",
  wwdProgramLearningFeature2: "Creative skill building activities",
  wwdProgramLearningFeature3: "Leadership training focused on girls",
  wwdProgramLearningFeature4: "Youth-led learning spaces by Adhigam Sarthis",
  wwdProgramLearningImpact: "Established 50+ learning centers",

  wwdProgramEducationForAllTitle: "Education for All",
  wwdProgramEducationForAllSubtitle: "Adhigamshala",
  wwdProgramEducationForAllDescription:
    "Our Adhigamshala program focuses on providing accessible and quality education to underprivileged children in rural areas. We believe education is the cornerstone of progress and aim to empower the next generation with knowledge and skills.",
  wwdProgramEducationForAllImpact: "Empowering 500+ children annually",
  wwdProgramEducationForAllFeature1: "Free study materials and textbooks",
  wwdProgramEducationForAllFeature2: "Establishment of rural learning centers",
  wwdProgramEducationForAllFeature3: "Trained volunteer educators",
  wwdProgramEducationForAllFeature4:
    "Focus on foundational literacy and numeracy",

  wwdProgramHealthWellbeingTitle: "Health & Well-being Initiatives",
  wwdProgramHealthWellbeingSubtitle: "Adhigamsvasthya",
  wwdProgramHealthWellbeingDescription:
    "The Adhigamsvasthya program is dedicated to improving community health through regular camps and awareness drives. We focus on preventive healthcare, hygiene, and addressing common health concerns in underserved populations.",
  wwdProgramHealthWellbeingImpact: "Reaching 10,000+ beneficiaries annually",
  wwdProgramHealthWellbeingFeature1: "Free medical check-ups and consultations",
  wwdProgramHealthWellbeingFeature2: "Blood donation camps",
  wwdProgramHealthWellbeingFeature3: "Hygiene and sanitation workshops",
  wwdProgramHealthWellbeingFeature4:
    "Awareness campaigns on critical health issues",

  wwdProgramWomenEmpowermentTitle: "Women Empowerment",
  wwdProgramWomenEmpowermentSubtitle: "Adhigamsvavalamban",
  wwdProgramWomenEmpowermentDescription:
    "Adhigamsvavalamban is our flagship program for women's empowerment. We provide skill development training, promote self-reliance, and raise awareness about women's rights to foster an equitable society.",
  wwdProgramWomenEmpowermentImpact: "Transforming 50+ women's lives yearly",
  wwdProgramWomenEmpowermentFeature1:
    "Vocational skill training (e.g., tailoring, handicraft)",
  wwdProgramWomenEmpowermentFeature2: "Financial literacy workshops",
  wwdProgramWomenEmpowermentFeature3:
    "Gender equality awareness through street plays",
  wwdProgramWomenEmpowermentFeature4: "Support for women entrepreneurship",

  wwdProgramEnvironmentalConservationTitle: "Environmental Conservation",
  wwdProgramEnvironmentalConservationSubtitle: "Prakriti Sanrakshan",
  wwdProgramEnvironmentalConservationDescription:
    "Through Prakriti Sanrakshan, we engage communities in environmental protection efforts, focusing on sustainable practices and waste management to ensure a healthier planet for future generations.",
  wwdProgramEnvironmentalConservationImpact:
    "Educating 5,000+ on sustainable living",
  wwdProgramEnvironmentalConservationFeature1:
    "Plastic waste awareness campaigns",
  wwdProgramEnvironmentalConservationFeature2: "Community clean-up drives",
  wwdProgramEnvironmentalConservationFeature3: "Tree plantation initiatives",
  wwdProgramEnvironmentalConservationFeature4:
    "Promotion of eco-friendly practices",

  wwdProgramCleanlinessSanitationTitle: "Cleanliness & Sanitation Drives",
  wwdProgramCleanlinessSanitationSubtitle: "Swachhata Abhiyan",
  wwdProgramCleanlinessSanitationDescription:
    "Our Swachhata Abhiyan promotes cleanliness and sanitation across communities through extensive awareness campaigns, rallies, and local initiatives aimed at improving public health and hygiene standards.",
  wwdProgramCleanlinessSanitationImpact: "Reaching 40,000+ individuals",
  wwdProgramCleanlinessSanitationFeature1:
    "Hygiene awareness rallies and street plays",
  wwdProgramCleanlinessSanitationFeature2: "Toilet construction advocacy",
  wwdProgramCleanlinessSanitationFeature3: "Waste segregation education",
  wwdProgramCleanlinessSanitationFeature4:
    "Community-led cleanliness initiatives",

  wwdProgramCommunityAwarenessTitle: "Community Awareness Programs",
  wwdProgramCommunityAwarenessSubtitle: "Samajik Jagrukta",
  wwdProgramCommunityAwarenessDescription:
    "Samajik Jagrukta fosters informed communities by addressing various social issues through engaging stage plays, public meetings, and awareness campaigns on critical topics like education, health, and environment.",
  wwdProgramCommunityAwarenessImpact: "Impacting 50,000+ community members",
  wwdProgramCommunityAwarenessFeature1:
    "Interactive stage plays on social issues",
  wwdProgramCommunityAwarenessFeature2: "Community meetings and dialogues",
  wwdProgramCommunityAwarenessFeature3:
    "Information dissemination on government schemes",
  wwdProgramCommunityAwarenessFeature4:
    "Promoting civic responsibility and participation",

  // What We Do Page - Our Journey Section (Goals)
  wwdGoalsHeading: "Our Goals",
  wwdGoalsSubtext: "From a simple conversation to a transformative movement",

  wwdVision2025Title: "Our Vision for 2025: A Brighter Tomorrow",
  wwdVision2025Description:
    "By the close of 2025, Panchlight Foundation is committed to profoundly enriching the lives of at least **20,000 individuals** across Bihar, fostering sustainable growth and community resilience through our diverse, impactful programs.",

  wwdTheVisionTitle: "The Vision",
  wwdTheVisionDescription:
    "Sanjay Kumar from Araria district joined this vision, having witnessed how communities lack access to information and opportunities. Together, they believed in empowering people with the right guidance.",
  wwdTheVisionQuote:
    '"If some people start from the heart, even a small diya can change the direction of society."',

  // What We Do Page - Impact Section
  wwdImpactSectionHeading: "Our Impact",
  wwdImpactSectionIntro:
    "Panchlight Foundation is currently lighting up the lives of the community.",
  wwdImpactPeopleTitle: "People",
  wwdImpactPeopleDescription:
    "We believe that bringing about change in society requires committed and sensitive people working at the grassroots level. Punchlight Foundation has trained many young people who are working to bring about positive change in society in areas such as education, health, sanitation and livelihood. Our volunteers have impacted thousands of people by visiting villages and conducting street plays, awareness campaigns and programmes.",
  wwdImpactModelsTitle: "Models",
  wwdImpactModelsDescription:
    "Our programmes are based on practical and community-based models, which are being adopted by other organisations and local bodies. Initiatives like 'Adhigamshala' have promoted children's education, while campaigns like Ayushman Card awareness have helped connect rural families to health services. Our street plays and workshops are now being appreciated and adopted by government departments and schools as well.",
  wwdImpactScalingUpTitle: "Scaling Up",
  wwdImpactScalingUpDescription:
    "Today, Punchlight Foundation is actively working in several districts of Bihar and has reached out to more than 50,000 people. We work in collaboration with various community-based organizations and educational institutions. Our goal is to empower 5 lakh people in the field of education, health, employment and sanitation by connecting them with our programs by 2030.",

  // What We Do Page - GoalsSection
  wwdGoalEducationTitle: "Empowering Futures through Education (Adhigamshala)",
  wwdGoalEducationDescription:
    "Igniting minds: Provide quality, accessible education and essential learning materials to over 500 underprivileged children. Establish 5 new community-centric learning centers in rural areas to foster foundational literacy and critical thinking.",
  wwdGoalHealthTitle: "Fostering Community Well-being (Adhigamsvasthya)",
  wwdGoalHealthDescription:
    "Health for all: Organize 5 comprehensive health and wellness camps, alongside 2 vital blood donation drives, reaching underserved rural and urban communities. Focus on preventive care and essential health screenings.",
  wwdGoalWomenEmpowermentTitle:
    "Accelerating Women's Empowerment (Adhigamsvavalamban)",
  wwdGoalWomenEmpowermentDescription:
    "Unlocking potential: Equip 50 women with transformative vocational skills training, paving pathways to economic independence. Conduct impactful street theatre performances to raise awareness on women's rights and gender equality, reaching over 10,000 women.",
  wwdGoalEnvironmentTitle:
    "Nurturing a Sustainable Environment (Prakriti Sanrakshan)",
  wwdGoalEnvironmentDescription:
    "Green initiatives: Educate over 5,000 individuals on the critical importance of plastic waste reduction and sustainable living practices. Mobilize 10,000+ community members through engaging cleanliness and environmental conservation campaigns.",
  wwdGoalHygieneTitle: "Promoting Hygiene & Sanitation (Swachhata Abhiyan)",
  wwdGoalHygieneDescription:
    "Dignity in every detail: Spearhead impactful rallies and innovative street plays to disseminate crucial information on hygiene and sanitation, aiming to reach over 40,000 individuals and foster healthier community habits.",
  wwdGoalAwarenessTitle: "Building Informed Communities (Samajik Jagrukta)",
  wwdGoalAwarenessDescription:
    "Catalyzing change: Utilize engaging stage plays and community dialogues to raise widespread awareness on pivotal themes of education, health, and environmental stewardship, directly impacting over 50,000 lives.",

  // FAQ Page Content
  faqTitle: "Frequently Asked Questions",
  faqSubtitle:
    "If you can't find an answer that you're looking for, feel free to email us!",
  faqContactButton: "Contact Us",
  faqQ1: "What is Punchlight Foundation?",
  faqA1:
    "Punchlight Foundation is a registered charitable trust that works to empower marginalized communities through education, theatre, health awareness, and livelihood programs.",
  faqQ2: "Is Punchlight Foundation legally registered?",
  faqA2:
    "Yes. Punchlight Foundation is registered as a public charitable trust under the Indian Trusts Act and operates in accordance with its officially registered objectives.",
  faqQ3: "What are the objectives of the Foundation?",
  faqA3:
    "Our objectives include promoting education, health, culture, skill development, gender equality, and social awareness using innovative, community-led models.",
  faqQ4: "Who governs the Foundation?",
  faqA4:
    "The Foundation is managed by a Board of Trustees. The Managing Trustee oversees strategy, implementation, and compliance.",
  faqQ5: "How are your programs implemented?",
  faqA5:
    "We engage local youth — known as Adhigam Sarthis (educators) and Adhigam artists (performers) — who lead educational workshops, street theatre, awareness drives, and health initiatives.",
  faqQ6: "What are the main programs of Punchlight Foundation?",
  faqA6:
    "Adhigamshala – Community learning centers\nAdhigamnatyya – Street theatre for social change\nAdhigamswavalamban – Livelihoods and micro-entrepreneur support\nAdhigamswasthya – Health education, Ayushman card help, and menstrual awareness",
  faqQ7: "Where do you work?",
  faqA7:
    "We work primarily in rural and underserved areas of Bihar and surrounding regions, prioritizing areas with limited access to public resources.",
  faqQ8: "How do you ensure transparency?",
  faqA8:
    "We maintain detailed records, undergo regular audits, and comply with all applicable financial and legal regulations.",
  faqQ9: "How can I support Punchlight Foundation?",
  faqA9:
    "You can support us by donating, volunteering, collaborating, or inviting us to conduct programs in your area. Visit the Support Us page for more.",
  faqQ10: "Are donations to Punchlight Foundation tax exempt?",
  faqA10:
    "Yes. Punchlight Foundation has 12A registration, and all donors receive official receipts which can be used for claiming tax exemption.",
  faqQ11: "Have more questions?",
  faqA11:
    "Feel free to email us at namastepunchlight@gmail.com — we’d love to hear from you!",

  // Donation Page Content
  donationHeroTitle: "Together, let's light up lives!",
  donationHeroSubtitle:
    "Punchlight Foundation for every community. Your small contribution can spark big changes.",
  donationSectionTitle: "Make a Donation",
  donationTaxExemptionBadge: "Tax Exemption under Section 80G",
  donationFullNameLabel: "Full Name *",
  donationEmailLabel: "Email Address *",
  donationPhoneLabel: "Phone Number",
  donationAmountLabel: "Donation Amount (₹) *",
  donationMessageLabel: "Message (Optional)",
  donateNowButton: "Donate Now 💫",
  donationiACTTitle: "iACT for Change",
  donationiACTP1:
    "Be a part of the journey of positive change in society. By supporting Punchlight Foundation's multi-faceted initiatives...",
  donationiACTP2:
    "Whether it's teaching children or creating awareness through street plays – every contribution counts.",
  donationImpactTitle: "Our Impact",
  donationImpactP1:
    "Punchlight Foundation works in education, health, livelihood, and awareness.",
  donationImpactL1: "Reach communities in need and run learning centers",
  donationImpactL2: "Empower women through various initiatives",
  donationImpactL3: "Spread awareness through street theatre and dialogue",
  donationImpactL4: "Support education, health, and livelihood programs",
  donationBankTransferTitle: "Bank Transfer Details",
  donationAccountName: "Account Name:",
  donationBankName: "Bank Name:",
  donationAccountNumber: "Account Number:",
  donationIFSCCode: "IFSC Code:",
  donationBranch: "Branch:",
  donationAccountType: "Account Type:",
  donationAccountNameValue: "Punchlight Foundation Trust",
  donationBankNameValue: "Bank of Maharashtra",
  donationAccountNumberValue: "60491399142",
  donationIFSCCodeValue: "MAHB0002127",
  donationBranchValue: "Araria, Bihar",
  donationAccountTypeValue: "Current",
  donationInKindSupportTitle: "In-Kind Support & Contact",
  donationInKindSupportP:
    "You can donate educational kits, clothes, medicines, and other useful items.",
  donationPhone: "Phone:",
  donationEmail: "Email:",
  donationPhoneNumber: "+91-8709945694",
  donationEmailAddress: "namastepunchlight@gmail.com",
  donationTransparencyTitle: "Transparency & Accountability",
  donationTransparencyP:
    "We ensure full transparency and accountability in utilizing your support. Your donation is eligible for tax exemption under Section 80G.",
  donationPopupMessage: "⚠ Sorry! This feature is not available right now.",
  donationImageAlt: "Foundation working in rural areas", // New key for alt text
  donationPhonePlaceholder: "+91-8709945694", // New key for phone input placeholder

  // English
  teamMentorHeading: "OUR CORE ADVISOR AND MENTOR",
  teamMentorSubheading: "MEET THE EXPERT BEHIND OUR SUCCESS",
  teamTeamHeading: "MEET OUR TEAM",
  teamTeamSubheading: "LEADING WITH VISION, DRIVING WITH PURPOSE",
  teamTeamIntro:
    "A cross-cultural team dedicated to creating opportunities for rural communities, promoting lifelong learning, and driving positive, sustainable change.",

  prashantPalName: "Prashant Pal",
  prashantPalPosition: "Co-Founder, Managing Trustee",
  prashantPalDescription: `Prashant Pal is a seasoned professional who has worked for decades in the corporate and social sectors. In 2013, he founded PURE India Trust, which aims to empower women and differently-abled people through entrepreneurship, skill development, and education. Coming from a middle-class background, Prashant witnessed poverty and economic struggles closely, which inspired him to help the needy. Influenced by the Anna Hazare movement, he returned to India in 2012 and started working for social change.
At Punchlight Foundation, he is playing a vital role as a core advisor and mentor. With his extensive experience and guidance, the organization is moving forward strongly in its objective of bringing impactful change in the society.`,

  shMasoomName: "Sh. Masoom",
  shMasoomPosition: "Trustee",
  shMasoomDescription: `Shamsul Hoda Masoom (S. H. Masoom) is a respected teacher, author, and literary activist based in Araria, Bihar. He has dedicated his life to using education and literature as tools for social transformation. Through his writing and teaching, he has inspired generations of students and readers alike.
He holds postgraduate degrees (MA) in both English and Persian from Patna University, along with a Bachelor's degree in Secondary Education and a certification in BET Lectureship. His academic background is rich, diverse, and deeply rooted in classical and contemporary learning.
At Punchlight Foundation, he serves as a mentor, contributing his academic expertise, linguistic depth, and literary perspective to help guide the organization’s educational and social initiatives. His insights continue to shape the foundation’s mission of community empowerment through knowledge and awareness.
S. H. Masoom remains a source of inspiration in the fields of education, literature, and social consciousness.`,

  abodhKumarName: "Abodh Kumar",
  abodhKumarPosition: "Trustee",
  abodhKumarDescription: `Abodh Kumar has believed in self-reliance and hard work since childhood. After starting out at his father’s blacksmith shop in Bihar, he set up a juice stall at the age of 10 and bought a Sanskrit grammar book with his first earnings. He self-financed his high school and college education.
A postgraduate diploma holder in Leadership Development from Azim Premji University, Bengaluru, Abodh is dedicated to personal growth and community empowerment. His grassroots understanding and leadership skills guide the community work of Punchlight Foundation. As a core advisor and mentor, he plays a key role in the organization’s strategies, further strengthening our commitment to bring positive change in society.`,

  amitKumarThakurName: "Amit Kumar Thakur",
  amitKumarThakurPosition: "Trustee",
  amitKumarThakurDescription: `Amit Thakur is a committed development professional with over a decade of experience in grassroots rural transformation. A B.Tech graduate from Siliguri Institute of Technology, he chose to work with marginalized communities rather than pursue a traditional corporate path.
He joined Professional Assistance for Development Action (PRADAN) in 2012 and has since been deeply involved in rural development work in Bihar, especially in Kishanganj. His efforts focus on employment generation, enterprise development, building sustainable livelihoods, empowering women, and strengthening community institutions.
At Punchlight Foundation, Amit Thakur serves as a mentor and guide, offering strategic advice and field-based insights. His extensive on-ground experience helps the organization remain grounded in real-world challenges while designing impactful social interventions.
With his dual engagement in development and mentorship, Amit continues to play a significant role in driving meaningful change at both institutional and community levels.`,

  sanjayKumarThakurName: "Sanjay Kumar Thakur",
  sanjayKumarThakurPosition: "Trustee",
  sanjayKumarThakurDescription: `Sanjay Kumar Thakur is the visionary founder of Punchlight Foundation Trust, a platform dedicated to using theatre as a powerful tool for social change. Starting his journey in 2003 from Araria, Bihar, he raised awareness on critical social issues through plays with renowned organizations like IPTA, Renu Sanskritik Manch, and Bhartiya Kala Sanskriti Manch.
In 2005, his involvement in the AIDS awareness campaign made him realize that art can bring about real transformation. His leadership as Secretary of Bharatiya Kala Sanskriti Manch (2006-2010) saw him drive significant campaigns on education, prohibition, and social reform. He later contributed to impactful projects like the Chief Minister Akshar Anchal Yojana and worked with J-PAL South Asia, Bihar Education Project Council, and Social Welfare Department to combat child malnutrition, child marriage, and dowry.
In Oct 2011 to Jul 2012, he worked as a Surveyor for J-PAL South Asia, conducting surveys and contributing to research in social interventions.
In 2015, he led rural development and education initiatives with Project Potential Trust and furthered social change through eArth Kala Manch (2018-2020). During the pandemic, he worked with PRADAN on awareness campaigns and later became a news anchor at Divya Bharat Hindi Samachar.
From April 2021 to March 2022, he worked on the Second Chance Education Project with PRADAN, empowering women through education. In 2022, he founded Punchlight Foundation Trust, bringing his vision to life by staging impactful street plays. Under his leadership, the Foundation addressed key issues like sanitation, empowerment, and voter awareness in collaboration with local communities.
Today, Sanjay Kumar Thakur continues to inspire change through his art, driving the mission of Punchlight Foundation Trust forward—creating a more informed, inclusive, and empowered society.`,

  rajaniJhaName: "Rajani Jha",
  rajaniJhaPosition: "Board Member",
  rajaniJhaDescription: `Rajani Jha has worked with renowned organizations like UNICEF, contributing her expertise to various social causes. Her experience in working with such organizations has helped her gain valuable insights into addressing critical issues at both grassroots and global levels.
Currently, she serves as a trustee of Punchlight Foundation, where she actively works on raising awareness and addressing social issues such as child marriage, health, women’s empowerment, and pandemics. Through her role, she continues to make significant contributions toward creating positive social change.`,

  ramashankarDasName: "Ramashankar Das",
  ramashankarDasPosition: "Board Member",
  ramashankarDasDescription: `Ramashankar Das is a seasoned entrepreneur and committed philanthropist. With a strong belief in inclusive development, he has consistently supported community welfare initiatives alongside his business endeavors. During the COVID-19 lockdown, he provided critical support to a local NGO by supplying essential commodities on credit at below-market rates, enabling effective relief distribution to underserved communities.
As a Settlor and Board Member of Punchlight Foundation, Mr. Das brings a unique blend of strategic insight and social commitment. His guidance and continued support play a vital role in advancing the Foundation’s mission to drive grassroots change through education, awareness, and empowerment.`,

  lakshmiDeviName: "Lakshmi Devi",
  lakshmiDeviPosition: "Board Member",
  lakshmiDeviDescription: `Lakshmi Devi is a committed social worker dedicated to bringing positive change in society. She has worked on various social issues such as women’s empowerment, education, health, and social equality, with a focus on supporting marginalized communities. She regularly conducts meetings to raise awareness among women on critical issues like child marriage and pandemics.
Currently, she serves as a trustee of Punchlight Foundation, providing guidance and support for the organization’s social initiatives and programs. Her leadership and commitment play a key role in advancing the foundation’s mission of creating positive social change.`,

  akankshaBhartiName: "Akanksha Bharti",
  akankshaBhartiPosition: "Board Member",
  akankshaBhartiDescription: `Akanksha is an educator and social worker with three years of experience in the field of education. She has contributed to the holistic development of children while teaching in private schools.
Currently, she is pursuing higher education and actively involved with Punchlight Foundation in initiatives like "Adhigamshala." She is committed to bringing positive change in society through education and awareness.`,

  jiwachhRamName: "Jiwachh Ram",
  jiwachhRamPosition: "Board Member",
  jiwachhRamDescription: `Jiwachh Ram began his journey with street theatre in 1992. Over the years, he has actively participated in street plays to raise awareness on various social issues. He has performed plays on topics such as child malnutrition, prohibition, child marriage, dowry abolition, sanitation, and voter awareness, contributing to numerous campaigns.
Jiwachh Ram has played a significant role in promoting social change through theatre, using his performances to spread education and awareness. He believes in the power of theatre to bring about positive change in society and strives to empower people through his plays. Currently, he is associated with Punchlight Foundation and actively participates in their street play programs.`,

  youName: "You",
  youPosition: "Future Changemaker",
  youDescription:
    "Join our team and make a difference! The next story could be yours.",

  readMore: "Read More",

  getInvolved: "Get Involved",
  getInvolvedIntro:
    "There are many ways to become a part of the Punchlight Foundation family. Your time, skills, and support can make a significant difference in the lives of many.",

  volunteerWithUsTitle: "Volunteer with Us",
  volunteerWithUsDesc:
    "Contribute your time and skills directly to our programs on the ground or remotely.",
  becomeAdhigamSarthiTitle: "Become an Adhigam Sarthi",
  becomeAdhigamSarthiDesc:
    "Lead learning activities and awareness drives in your community as a trained facilitator.",
  supportPerformanceTitle: "Support a Performance",
  supportPerformanceDesc:
    "Sponsor a street play or a cultural event to spread social messages in villages.",
  donateTitle: "Donate",
  donateDesc:
    "Your financial support enables us to expand our reach and sustain our impactful programs.",
  partnerWithUsTitle: "Partner with Us",
  partnerWithUsDesc:
    "Collaborate with us as an organization, corporate, or government body.",

  beAVoiceForChange: "Be a voice for change!",
  joinPunchlightFoundation: "Join Punchlight Foundation",
  joinPunchlightDesc1:
    "Are you passionate about making a real impact at the grassroots level? Do you believe in the power of education, art, and community action to transform lives?",
  joinPunchlightDesc2:
    "Punchlight Foundation is always looking for dedicated individuals who share our vision. Whether you're an experienced professional, a fresh graduate, or a passionate volunteer, there's a place for you in our team.",
  joinNow: "Join Now",

  // Contact Page Content
  phone: "Phone",
  email: "Email",
  location: "Location",
  sendUsMessage: "Send Us a Message",
  yourName: "Your Name",
  yourEmail: "Your Email",
  subject: "Subject",
  yourMessage: "Your Message",
  sendMessage: "Send Message",
  punchlightOffice: "Punchlight Foundation Office",
  sorryNotPresent:
    "Sorry, we are not present in this city/pincode yet. Showing default location.",
  currentLocation: "Current Location",
  latitude: "Latitude",
  longitude: "Longitude",
  findUsOnline: "Find Us Online",
  messageSentSuccess: "Message sent successfully!",
  messageSentFail: "Failed to send message. Please try again later.",

  // Footer Content
  hopeForAllTitle: "Hope for All",
  hopeForAllDescription:
    "Punchlight Foundation is dedicated to empowering marginalized communities through education, theatre, health, and livelihood programs.",
  quickLinks: "Quick Links",
  footerOurMission: "Our Mission",
  programs: "Programs", // Re-used from What We Do page
  gallery: "Gallery", // Re-used from Home page
  donate: "Donate", // Re-used from Donation page
  volunteer: "Volunteer", // Re-used from Home page
  contactUs: "Contact Us", // Re-used from Contact page
  followUs: "Follow Us",
  goToTop: "Go to Top",
  copyright: "© 2024 Punchlight Foundation. All rights reserved.",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",

  // Media and Publications Page
  mediaPublicationsTitle: "Media & Publications",
  mediaPublicationsIntro:
    "Here you’ll find our latest updates, news coverage, and downloadable resources. Stay connected with our journey to empower communities.",
  latestVideosTitle: "Latest Videos",
  watchOnYouTube: "Watch on YouTube",
  newsArticlesTitle: "News Articles",
  downloadsReportsTitle: "Downloads & Reports",

  // Specific media data (structured for translation)
  mediaData: {
    youtubeVideos: [
      {
        id: "video_g9FRlzB70ko",
        embedId: "g9FRlzB70ko",
        title: "Road Safety Awareness Program",
        channel: "Punchlight Foundation",
        views: "120 views",
        timeAgo: "2 weeks ago",
      },
      {
        id: "video_hUV9MtvLdRI",
        embedId: "hUV9MtvLdRI",
        title: "Punchlight Foundation – Community Awareness",
        channel: "Punchlight Foundation",
        views: "85 views",
        timeAgo: "1 week ago",
      },
    ],
    newsArticles: [
      {
        id: "news_nukkad_natak",
        image: "image53", // Reference assets key
        title: "Street Play Organized for Cleanliness",
        snippet:
          "A street play was organized in the Nagar Parishad area to raise awareness about cleanliness. On this occasion, children and citizens were made aware of cleanliness.",
        publication: "City Bites",
        date: "June 28, 2025",
        featured: true,
      },
      {
        id: "news_government_scheme",
        image: "image54", // Reference assets key
        title: "Scheme of ₹12 Thousand for Every Sister",
        snippet:
          "A scheme of ₹12,000 annual assistance has been launched by the government for the empowerment of women. Millions of women are benefiting from this scheme.",
        publication: "Government Press Release",
        date: "June 28, 2025",
      },
    ],
    otherPublications: [
      {
        id: "publication_pdf_annual_report",
        type: "Document",
        icon: "[https://cdn-icons-png.flaticon.com/512/337/337946.png](https://cdn-icons-png.flaticon.com/512/337/337946.png)",
        title: "Punchlight Foundation Annual Report 2024",
        description:
          "Download our latest annual report and learn about our progress.",
        date: "January 15, 2025",
        link: "[https://youtu.be/GleVf3irSXw?si=NKrRVKBxVWx1N7u](https://youtu.be/GleVf3irSXw?si=NKrRVKBxVWx1N7u)_",
      },
      {
        id: "publication_image_gallery",
        type: "Photo Gallery",
        icon: "[https://cdn-icons-png.flaticon.com/512/1042/1042339.png](https://cdn-icons-png.flaticon.com/512/1042/1042339.png)",
        title: "Community Program Photo Gallery",
        description: "Browse photos from our recent community outreach events.",
        date: "June 1, 2025",
        link: "/gallery/community_events",
      },
    ],
  },
  // AdhigamNatya
  progNatyaTitle: "AdhigamNatya",
  progNatyaIntro1:
    "From Dialogue to Change: Adhigamnatya is a unique initiative of Punchlight Foundation, which works to bring about positive change in the society through street plays, wall writings and public dialogue.",
  progNatyaIntro2:
    "We use the power of theatre to spread awareness in the community on burning issues like education, health, hygiene, women empowerment and social inequality.",
  progNatyaIntro3:
    "Our presentations are related to the local language, environment and life, so that every viewer can see himself in it and connect with it. Through this medium, we not only convey the message but also develop self-confidence, leadership skills and a sense of social responsibility among the youth and artists.",
  progNatyaCard1Title: "Nukkad Natak (Street Play)",
  progNatyaCard1Text:
    "We addressed pressing social issues in society such as gender equality, education, health, hygiene, women empowerment and through street plays. This art form not only provides a platform but also inspires communities to actively engage and take action towards change. After each performance, we interact with audience and community members to understand their concerns and ideas and come up with effective plans to address the problems. These thoughtful discussions guide our subsequent performances and further refine our approach, allowing us to bring about deeper understanding and positive change in society.",
  progNatyaCard2Title: "Dialogue with Walls (Wall Painting)",
  progNatyaCard2Text:
    "In every faded wall, we see a voice waiting to rise. Through Dialogue with Walls, we bring life to forgotten spaces — painting stories of hope, courage, and change. We speak about gender equality, education, health, hygiene, and women empowerment, using art as a powerful tool of resistance and renewal. Each wall becomes a conversation starter, urging communities to think, feel, and act. After every artwork, we listen — to fears, to dreams, to silent struggles — and together, we craft messages that truly belong to the people. Because real change doesn't just happen. It is written, painted, and spoken — on every wall, in every heart.",
  progNatyaImpact1: "50+ plays performed",
  progNatyaImpact2: "5000+ people reached",

  // AdhigamShala
  progShalaTitle: "AdhigamShala",
  progShalaMission:
    "Our Mission: Through Adhigamshala, Punchlight Foundation is committed to providing free, inclusive, and holistic education. We aim to foster critical thinking, leadership skills, and a deep sense of social responsibility among children, empowering them to realize their full potential and contribute meaningfully to the world.",
  progShalaVision:
    "Our Vision: To create a world where every child, irrespective of their background, has access to quality education, nurtures self-confidence, and becomes a torchbearer of positive change in society.",
  progShalaCardTitle: "Adhigamshala (Learning Centre)",

  progShalaCardText1: `At Adhigamshala, our commitment is rooted in the belief that education is a fundamental right and a powerful tool for transformation. Through this initiative, we provide free, inclusive, and holistic education to children, particularly those from marginalized or economically disadvantaged backgrounds who are often denied equitable learning opportunities due to systemic barriers and lack of resources.`,

  progShalaCardText2: `Our learning centre is more than just a classroom—it is a safe, nurturing, and empowering space where children can explore their potential, express themselves freely, and engage in meaningful learning experiences. We emphasize not only access to education, but also quality and relevance, ensuring that each child’s individual pace, interests, and aspirations are respected.`,

  progShalaCardText3: `Child-Centered and Participatory Learning
At the heart of our pedagogy lies a dialogue-based and participatory teaching approach. We move away from rote learning and instead encourage active engagement, critical thinking, and open dialogue. Our educators facilitate learning through questions, storytelling, group discussions, creative activities, and real-life problem-solving, allowing children to connect learning with their everyday experiences.

This inclusive environment empowers children to ask questions, share their ideas without fear, and build confidence, curiosity, and creativity. By encouraging student voice and agency, we help nurture a generation of independent thinkers and compassionate citizens.`,

  progShalaCardText4: `We actively involve parents and community members to understand children’s needs and challenges. Their feedback helps us improve our teaching methods and stay connected with the ground realities.

Beyond academics, we focus on values, creativity, and life skills through arts, environmental awareness, health education, and extracurricular activities. Our aim is to nurture confident, empathetic, and socially aware individuals.

We believe every child deserves the chance to dream, grow, and contribute meaningfully to society.`,
  progShalaImpact1: "500+ children educated",
  progShalaImpact2: "10+ learning centers",

  // Adhigamsvasthya
  progSvasthyaTitle: "Adhigamsvasthya",
  progSvasthyaText1:
    "At 'Adhigamsvasthya', we believe that awareness is the first step towards good health. Through workshops, we help adolescent girls understand pandemics and preventive care. Health camps bring services like Ayushman Card registration closer to those who need them most. With the vibrant energy of street plays, we spark conversations around health and hygiene, making learning lively and accessible for all.",
  progSvasthyaText2:
    "We focus on critical health issues such as pandemic preparedness, hygiene, nutrition, and access to healthcare services. Through our activities, we conduct awareness workshops, support the creation of Ayushman Health Cards for eligible individuals, and organize street plays to bring vital health topics into the public conversation.",
  progSvasthyaText3:
    "We believe that when health becomes a part of community dialogue, true empowerment begins.",
  progSvasthyaText4:
    "Our presentations are deeply rooted in the local language, culture, and environment, allowing people to see their realities reflected and connect personally with the message.",
  progSvasthyaText5:
    "Adhigamswasthya strives to ensure that healthcare is not a privilege but a right accessible to every person, regardless of their circumstances.",
  progSvasthyaImpact1: "300+ cards issued",
  progSvasthyaImpact2: "20+ awareness drives",

  // AdhigamSvavalamban
  progSvavalambanTitle: "AdhigamSvavalamban",
  progSvavalambanText1:
    "AdhigamSvavalamban is a key initiative by Punchlight Foundation focused on empowering small entrepreneurs through skill development and financial support. We assist individuals in accessing loans under the PM SVANidhi Scheme, provide practical training (such as tailoring), and help connect them with other NGOs for additional support. Our goal is to equip individuals with the skills and resources needed to achieve economic independence and build a sustainable future for themselves and their communities.",
  progSvavalambanCardTitle: "AdhigamSvavalamban",
  progSvavalambanCardText1:
    "At 'AdhigamSvavalamban', we empower small entrepreneurs by connecting them with opportunities under the PM Swanidhi Scheme, helping them secure loans to grow their businesses.",
  progSvavalambanCardText2:
    "Through collaborations with NGOs, we also provide additional support, including skills training such as tailoring, enabling individuals to start and sustain their own businesses.",
  progSvavalambanCardText3:
    "Our goal is to foster self-reliance and create sustainable livelihoods within communities.",
  progSvavalambanImpact1: "70+ women trained",
  progSvavalambanImpact2: "100+ entrepreneurs funded",
};

// Consolidated Hindi content for all pages
const hindiContent = {
  // AdhigamNatya
  progNatyaTitle: "अधिगमनाट्य",
  progNatyaIntro1:
    "संवाद से बदलाव तक: अधिगमनाट्य पंचलाइट फाउंडेशन की एक अनूठी पहल है, जो नुक्कड़ नाटक, दीवार लेखन और जन संवाद के माध्यम से समाज में सकारात्मक बदलाव लाने का कार्य करती है।",
  progNatyaIntro2:
    "हम रंगमंच की शक्ति का उपयोग शिक्षा, स्वास्थ्य, स्वच्छता, महिला सशक्तिकरण और सामाजिक असमानता जैसे ज्वलंत मुद्दों पर समुदाय में जागरूकता फैलाने के लिए करते हैं।",
  progNatyaIntro3:
    "हमारे प्रस्तुतिकरण स्थानीय भाषा, परिवेश और जीवन से जुड़े होते हैं, जिससे हर दर्शक खुद को उसमें देख सके और जुड़ सके। इस माध्यम से हम न केवल संदेश पहुंचाते हैं, बल्कि युवाओं और कलाकारों में आत्मविश्वास, नेतृत्व कौशल और सामाजिक जिम्मेदारी की भावना भी विकसित करते हैं।",
  progNatyaCard1Title: "नुक्कड़ नाटक",
  progNatyaCard1Text:
    "हमने समाज में लैंगिक समानता, शिक्षा, स्वास्थ्य, स्वच्छता, महिला सशक्तिकरण जैसे मुद्दों को नुक्कड़ नाटकों के माध्यम से उठाया। यह कला न केवल मंच प्रदान करती है, बल्कि समुदायों को सक्रिय रूप से जुड़ने और बदलाव की दिशा में कदम उठाने के लिए प्रेरित भी करती है। प्रत्येक प्रस्तुति के बाद, हम दर्शकों और समुदाय के सदस्यों से संवाद करते हैं, उनकी चिंताओं और विचारों को समझते हैं और समस्याओं के समाधान के लिए प्रभावी योजनाएँ बनाते हैं। ये विचारशील चर्चाएँ हमारे आगामी प्रस्तुतियों का मार्गदर्शन करती हैं और हमारे दृष्टिकोण को और अधिक परिष्कृत करती हैं, जिससे समाज में गहरी समझ और सकारात्मक बदलाव आता है।",
  progNatyaCard2Title: "दीवारों से संवाद (वाल पेंटिंग)",
  progNatyaCard2Text:
    "हर फीकी दीवार में हम एक आवाज़ को उठने का इंतजार करते देखते हैं। 'दीवारों से संवाद' के माध्यम से हम भूली-बिसरी जगहों को जीवन देते हैं—आशा, साहस और बदलाव की कहानियाँ चित्रित करते हैं। हम लैंगिक समानता, शिक्षा, स्वास्थ्य, स्वच्छता और महिला सशक्तिकरण जैसे मुद्दों पर बात करते हैं, कला को प्रतिरोध और नवीनीकरण का शक्तिशाली साधन बनाते हैं। हर दीवार एक संवाद की शुरुआत बन जाती है, समुदायों को सोचने, महसूस करने और कार्य करने के लिए प्रेरित करती है। हर चित्र के बाद, हम सुनते हैं—डर, सपनों और मौन संघर्षों को—और मिलकर ऐसे संदेश गढ़ते हैं जो वास्तव में लोगों के अपने होते हैं। क्योंकि असली बदलाव सिर्फ होता नहीं है, वह लिखा, चित्रित और बोला जाता है—हर दीवार पर, हर दिल में।",
  progNatyaImpact1: "50+ नाटक मंचित",
  progNatyaImpact2: "5000+ लोगों तक पहुँचा",

  // AdhigamShala
  progShalaTitle: "अधिगमशाला",
  progShalaMission:
    "हमारा मिशन: अधिगमशाला के माध्यम से पंचलाइट फाउंडेशन नि:शुल्क, समावेशी, और समग्र शिक्षा प्रदान करने के लिए प्रतिबद्ध है। हम बच्चों में आलोचनात्मक सोच, नेतृत्व कौशल, और सामाजिक जिम्मेदारी की गहरी भावना विकसित करने का प्रयास करते हैं, जिससे वे अपनी पूरी क्षमता का एहसास कर सकें और समाज में सार्थक योगदान दे सकें।",
  progShalaVision:
    "हमारा विजन: एक ऐसी दुनिया बनाना जहाँ हर बच्चा, चाहे उसकी पृष्ठभूमि कुछ भी हो, गुणवत्तापूर्ण शिक्षा प्राप्त कर सके, आत्मविश्वास विकसित कर सके और सकारात्मक बदलाव का वाहक बन सके।",
  progShalaCardTitle: "अधिगमशाला (लर्निंग सेंटर)",

  // For Hindi:
  progShalaCardText1: `अधिगमशाला हमारे उस विश्वास पर आधारित है कि शिक्षा हर बच्चे का मूल अधिकार है और यह सामाजिक बदलाव का एक शक्तिशाली माध्यम भी है। इस पहल के अंतर्गत हम निःशुल्क, समावेशी और समग्र शिक्षा प्रदान करते हैं, विशेष रूप से उन बच्चों को जो संसाधनों की कमी के कारण शिक्षा से वंचित रह जाते हैं।`,

  progShalaCardText2: `हमारा शैक्षणिक केंद्र सिर्फ एक कक्षा नहीं, बल्कि एक सुरक्षित, पोषणकारी और प्रेरणादायक स्थान है जहाँ बच्चे आत्मविश्वास के साथ सीखते हैं, अपने विचार खुलकर व्यक्त करते हैं और रचनात्मकता के साथ अपने भीतर की संभावनाओं को खोजते हैं। हमारी कोशिश यह सुनिश्चित करने की है कि हर बच्चा, उसकी गति, रुचियों और स्वप्नों के अनुसार सीखने का अवसर पाए।`,

  progShalaCardText3: `संवादात्मक और भागीदारीपूर्ण शिक्षण पद्धति
हमारे शिक्षण के केंद्र में है एक संवाद-आधारित और भागीदारीपूर्ण पद्धति। पारंपरिक रटंत शिक्षा के स्थान पर हम बच्चों को प्रश्न पूछने, कहानियों के माध्यम से सीखने, समूह चर्चाओं, रचनात्मक गतिविधियों और व्यावहारिक अनुभवों से जोड़ते हैं। इससे बच्चों को सीखने की प्रक्रिया से न केवल जुड़ाव महसूस होता है, बल्कि वे अपने आसपास की दुनिया को भी समझने लगते हैं।

इस तरह का वातावरण बच्चों को निर्भीक होकर विचार साझा करने, सवाल उठाने और स्वतंत्र रूप से सोचने के लिए प्रेरित करता है। हमारा उद्देश्य केवल शिक्षा देना नहीं, बल्कि उन्हें आत्मविश्वास, जिज्ञासा और रचनात्मकता से परिपूर्ण बनाना है।`,

  progShalaCardText4: `सामुदायिक सहभागिता और समग्र विकास
हम बच्चों की ज़रूरतों और चुनौतियों को समझने के लिए अभिभावकों और समुदाय के लोगों की भागीदारी सुनिश्चित करते हैं। उनके सुझाव हमें शिक्षण में सुधार और ज़मीनी जुड़ाव बनाए रखने में मदद करते हैं।

पढ़ाई के साथ-साथ हम कला, पर्यावरण, स्वास्थ्य और जीवन कौशल के ज़रिए बच्चों के अंदर मूल्य, रचनात्मकता और सामाजिक समझ भी विकसित करते हैं।

हमारा विश्वास है कि हर बच्चे को सपने देखने, आगे बढ़ने और समाज में योगदान देने का अवसर मिलना चाहिए।`,

  progShalaImpact1: "500+ बच्चों को शिक्षा",
  progShalaImpact2: "10+ लर्निंग सेंटर",

  // Adhigamsvasthya
  progSvasthyaTitle: "अधिगमस्वास्थ्य",
  progSvasthyaText1:
    "'अधिगमस्वास्थ्य' में हमारा मानना है कि जागरूकता अच्छे स्वास्थ्य की पहली सीढ़ी है। कार्यशालाओं के माध्यम से हम किशोरियों को महामारी और रोकथाम के बारे में समझाते हैं। स्वास्थ्य शिविरों के माध्यम से आयुष्मान कार्ड जैसी सेवाएँ ज़रूरतमंदों तक पहुँचाते हैं। नुक्कड़ नाटकों की ऊर्जा से हम स्वास्थ्य और स्वच्छता पर संवाद शुरू करते हैं, जिससे सीखना सभी के लिए रोचक और सुलभ हो जाता है।",
  progSvasthyaText2:
    "हम महामारी की तैयारी, स्वच्छता, पोषण और स्वास्थ्य सेवाओं तक पहुँच जैसे महत्वपूर्ण स्वास्थ्य मुद्दों पर ध्यान केंद्रित करते हैं। अपनी गतिविधियों के माध्यम से हम जागरूकता कार्यशालाएँ आयोजित करते हैं, पात्र व्यक्तियों के लिए आयुष्मान कार्ड बनवाने में सहायता करते हैं और नुक्कड़ नाटकों के माध्यम से महत्वपूर्ण स्वास्थ्य विषयों को सार्वजनिक चर्चा में लाते हैं।",
  progSvasthyaText3:
    "हम मानते हैं कि जब स्वास्थ्य समुदाय संवाद का हिस्सा बनता है, तभी सच्चा सशक्तिकरण शुरू होता है।",
  progSvasthyaText4:
    "हमारे प्रस्तुतिकरण स्थानीय भाषा, संस्कृति और परिवेश में गहराई से जुड़े होते हैं, जिससे लोग अपनी वास्तविकता को उसमें देख सकें और व्यक्तिगत रूप से जुड़ सकें।",
  progSvasthyaText5:
    "अधिगमस्वास्थ्य यह सुनिश्चित करने का प्रयास करता है कि स्वास्थ्य सेवा कोई विशेषाधिकार नहीं, बल्कि हर व्यक्ति का अधिकार हो, चाहे उसकी परिस्थितियाँ कुछ भी हों।",
  progSvasthyaImpact1: "300+ कार्ड जारी",
  progSvasthyaImpact2: "20+ जागरूकता अभियान",

  // AdhigamSvavalamban
  progSvavalambanTitle: "अधिगमस्वावलंबन",
  progSvavalambanText1:
    "अधिगमस्वावलंबन पंचलाइट फाउंडेशन की एक प्रमुख पहल है, जो कौशल विकास और वित्तीय सहायता के माध्यम से छोटे उद्यमियों को सशक्त बनाने पर केंद्रित है। हम व्यक्तियों को पीएम स्वनिधि योजना के तहत ऋण प्राप्त करने में सहायता करते हैं, व्यावहारिक प्रशिक्षण (जैसे सिलाई) प्रदान करते हैं, और अतिरिक्त सहायता के लिए अन्य एनजीओ से जोड़ते हैं। हमारा लक्ष्य है कि व्यक्तियों को आर्थिक स्वतंत्रता प्राप्त करने और अपने और अपने समुदायों के लिए एक स्थायी भविष्य बनाने के लिए आवश्यक कौशल और संसाधन उपलब्ध कराएँ।",
  progSvavalambanCardTitle: "अधिगमस्वावलंबन",
  progSvavalambanCardText1:
    "'अधिगमस्वावलंबन' में हम छोटे उद्यमियों को पीएम स्वनिधि योजना के तहत अवसरों से जोड़कर उन्हें अपने व्यवसाय बढ़ाने के लिए ऋण दिलाने में मदद करते हैं।",
  progSvavalambanCardText2:
    "एनजीओ के साथ सहयोग के माध्यम से हम अतिरिक्त सहायता भी प्रदान करते हैं, जिसमें सिलाई जैसे कौशल प्रशिक्षण शामिल हैं, जिससे व्यक्ति अपना व्यवसाय शुरू और बनाए रख सकें।",
  progSvavalambanCardText3:
    "हमारा लक्ष्य है आत्मनिर्भरता को बढ़ावा देना और समुदायों में स्थायी आजीविका का निर्माण करना।",
  progSvavalambanImpact1: "70+ महिलाओं को प्रशिक्षण",
  progSvavalambanImpact2: "100+ उद्यमियों को फंडिंग",
  // Navbar content
  homeNav: "होम",
  aboutNav: "परिचय",
  aboutMission: "हमारा मिशन",
  aboutVision: "हमारा विजन",
  aboutTeam: "हमारी टीम",
  whatWeDoNav: "हम क्या करते हैं",
  education: "शिक्षा",
  healthcare: "स्वास्थ्य सेवा",
  empowerment: "सशक्तिकरण",
  donationNav: "दान",
  publicationNav: "प्रकाशन",
  faqsNav: "अक्सर पूछे जाने वाले प्रश्न",
  teamNav: "टीम",
  contactNav: "संपर्क करें",
  programsNav: "कार्यक्रम",

  // Home Page - Hero Section
  heroMainTitle: "हर समुदाय के लिए",
  heroSubtitle:
    "एक गतिशील सामाजिक संगठन जो शिक्षा, जागरूकता और स्वास्थ्य सेवा के माध्यम से हाशिए पर पड़े समुदायों को सशक्त बनाने के लिए समर्पित है। हम स्वच्छता, कौशल विकास, ऊर्जा समाधान और स्थायी आजीविका को बढ़ावा देने पर भी ध्यान केंद्रित करते हैं।",
  donationButton: "दान करें",
  volunteerButton: "स्वयंसेवक बनें",
  partnersRowTitle: "हमारे साझेदार (Our Partners)",

  // Home Page - Vision Section
  visionMissionProblemTitle: "विजन, मिशन और समस्या विवरण",
  visionText:
    "ग्रामीण भारत, विशेषकर महिलाओं और लड़कियों के लिए, थिएटर, शिक्षा और सामुदायिक संवाद का उपयोग करके एक समावेशी और सशक्त समाज का निर्माण करना।",
  missionText:
    "रचनात्मक और सहभागी मंचों के माध्यम से हाशिए पर पड़े समुदायों के बीच जागरूकता, अभिव्यक्ति और आत्मनिर्भरता को सक्षम करना।",
  problemStatementText:
    "ग्रामीण भारत में, विशेष रूप से अररिया जैसे जिलों में, महिलाओं और युवाओं को गुणवत्तापूर्ण शिक्षा, स्वास्थ्य जागरूकता, कौशल निर्माण और आवाज व नेतृत्व के लिए सार्वजनिक मंचों तक पहुंच की कमी है।",

  // Home Page - Gallery Section
  galleryTitle: "गैलरी",
  gallerySubtitle: "हमारी मिशन को दर्शाने वाले क्षण",
  previewText: "👁 पूर्वावलोकन",

  // Home Page - Overlay Section
  overlayTitle:
    "हमारा मानना है कि स्थायी परिवर्तन तब शुरू होता है जब समुदाय अपनी आवाज पाते हैं।",
  overlayP1:
    "पंचलाइट फाउंडेशन में, हम ग्रामीण भारत में जागरूकता और कार्रवाई को प्रज्वलित करने के लिए नुक्कड़ नाटक, शिक्षा और सामुदायिक संवाद की शक्ति का उपयोग करते हैं।",
  overlayP2:
    "हमारा ध्यान सबसे वंचित जिलों में महिलाओं और युवाओं को सहभागी और रचनात्मक माध्यमों से सशक्त बनाने पर है।",
  overlayP3:
    "गांव के चौराहों पर स्वास्थ्य, लिंग और आजीविका पर नाटक करने से लेकर, स्थानीय शिक्षण स्थान बनाने और युवा शिक्षकों और कलाकारों को पोषित करने तक - हम गरिमा, आत्मविश्वास और आत्मनिर्भरता को जगाने के लिए समुदायों के साथ मिलकर काम करते हैं।",
  overlayBelieveText:
    "क्योंकि हमारा मानना है: वास्तविक परिवर्तन वितरित नहीं किया जाता - इसे एक साथ खोजा जाता है।",

  // Home Page - Testimonial Section
  testimonialTitle: "चंदन कुमार साह की गवाही – एक प्रेरणादायक यात्रा",
  testimonialP1:
    '"पंचलाइट फाउंडेशन ने मेरे जीवन को बदलने में महत्वपूर्ण भूमिका निभाई। पहले मैं हर समय हाथठेले पर सब्जियां बेचता था, लेकिन संगठन में शामिल होने के बाद, मुझे नुक्कड़ नाटकों में एक अभिनेता के रूप में काम करने का मौका मिला। इस अनुभव ने मेरा आत्मविश्वास और कौशल बढ़ाया।',
  testimonialP2:
    "आज, पंचलाइट फाउंडेशन की मदद से, मैं लर्निंग लिंक्स फाउंडेशन में जूनियर ऑफिसर, कौशल वृद्धि और उद्यमिता के रूप में काम कर रहा हूँ। मेरी आर्थिक स्थिति में सुधार हुआ है, और मेरा परिवार अब अच्छा कर रहा है।",
  testimonialP3:
    'मैं पंचलाइट फाउंडेशन को इस अवसर को देने और मेरी क्षमता को पहचानने के लिए दिल से धन्यवाद देता हूँ।"',
  testimonialAuthor: "— चंदन कुमार साह",
  testimonialAuthorTitle: "जूनियर ऑफिसर, लर्निंग लिंक्स फाउंडेशन",

  // Home Page - Partners Section
  partnersTitle: "हमारे भागीदार",
  partnersSubtitle: "स्थायी परिवर्तन बनाने के लिए मिलकर काम करना",
  partnerUrbanDevelopment: "शहरी विकास और आवास विभाग",
  partnerProjectPotential: "प्रोजेक्ट पोटेंशियल",
  partnerPureIndiaTrust: "प्योर इंडिया ट्रस्ट",
  partnerLearningLinksFoundation: "लर्निंग लिंक्स फाउंडेशन",
  partnerRuralDevelopmentInitiative: "ग्रामीण विकास पहल",
  partnerWomenEmpowermentSociety: "महिला सशक्तिकरण समाज",
  partnerEducationForAll: "सभी के लिए शिक्षा",
  partnerHealthCarePartners: "स्वास्थ्य देखभाल भागीदार",

  // About Page - Hero Section
  aboutHeroTitle: "दान सबसे अच्छा सामाजिक कार्य है",
  aboutHeroSubtitle:
    "मदद करने वाले हाथ प्रार्थना करने वाले होंठों से बेहतर हैं",
  aboutUsButton: "हमारे बारे में",

  // About Page - Enhanced About Section
  aboutPunchlightTitle: "पंचलाइट फाउंडेशन के बारे में",
  aboutPunchlightP1:
    "हम शिक्षा, स्वास्थ्य सेवा, स्वच्छता, स्वच्छ ऊर्जा और आजीविका सहायता में प्रभावशाली कार्यक्रमों के माध्यम से हाशिए पर पड़े समुदायों को सशक्त बनाने के लिए प्रतिबद्ध एक गतिशील संगठन हैं।",
  aboutPunchlightP2:
    "हमारा मिशन स्कूल छोड़ चुके बच्चों को शिक्षा से जोड़कर, मुफ्त स्वास्थ्य शिविरों का आयोजन करके, और रचनात्मक कहानी कहने के माध्यम से सामुदायिक जागरूकता को बढ़ावा देकर जमीनी स्तर पर बदलाव लाना है।",
  aboutPunchlightP3:
    "नुक्कड़ नाटक और समुदाय-आधारित अभियानों की शक्ति के माध्यम से, हम जागरूकता फैलाते हैं और एक ऐसे समाज की वकालत करते हैं जहां हर व्यक्ति गरिमा, आशा, और अवसर के साथ जी सके।",

  // About Page - Founding Story Section
  foundingStoryHeading: " हमारी संस्थापक कहानी",
  foundingStorySubtitle: "एक चिंगारी से एक आंदोलन तक ",
  founderStoryP1:
    "पंचलाइट फाउंडेशन दोस्तों के बीच एक हार्दिक चर्चा से शुरू हुआ जिन्होंने समाज के लिए कुछ सार्थक करने का सपना देखा था। संजय कुमार ठाकुर ने गांवों में अपने काम के दौरान महसूस किया कि देश के हर कोने में अपार प्रतिभा और क्षमता मौजूद है—उन्हें बस दिशा और अवसर की आवश्यकता है।",
  founderStoryP2:
    "अररिया, बिहार से नीरज कुमार भी उसी दृष्टि के साथ उनसे जुड़े। उन्होंने देखा था कि बुनियादी जागरूकता की कमी लोगों को कैसे पीछे धकेलती है। साथ में, उन्होंने शिक्षा, स्वास्थ्य, स्वच्छता और नुक्कड़ नाटक के माध्यम से बदलाव की कल्पना की।",
  founderStoryP3:
    "जो कुछ छोटे कदमों से शुरू हुआ था, वह जल्द ही एक बढ़ता हुआ आंदोलन बन गया—जो बिहार और उससे आगे फैल गया।",
  founderQuote:
    "“अगर कुछ लोग दिल से शुरुआत करें तो एक छोटा सा दीया भी समाज की दिशा बदल सकता है।”",

  // About Page - Legal & Registration Details
  legalHeading: "कानूनी और पंजीकरण विवरण",
  legalSubheading:
    "हम अपने सभी कार्यों में पारदर्शिता, विश्वसनीयता और जवाबदेही सुनिश्चित करने के लिए लागू कानूनी ढांचों के तहत पंजीकृत हैं।",
  legalTrustAct: "ट्रस्ट अधिनियम",
  legalTrustActDetail: "भारतीय ट्रस्ट अधिनियम 1882",
  legalTrustRegistration: "ट्रस्ट पंजीकरण",
  legalTrustRegistrationDetail: "टोकन नंबर 2170/2024\nडीड नंबर 11",
  legalPAN: "पैन नंबर",
  legalPANDetail: "AAFTP7183C",
  legalNGODarpan: "एनजीओ दर्पण यूआईडी",
  legalNGODarpanDetail: "BR/2024/0417447",
  legal12ACertificate: "12ए प्रमाणपत्र",
  legal12ACertificateDetail: "AAFTP7183CE20241",
  legal80GCertificate: "80जी प्रमाणपत्र",
  legal80GCertificateDetail: "AAFTP7183CF20241",
  legalGSTIN: "जीएसटीआईएन",
  legalGSTINDetail: "10AAFTP7183C1ZS",

  // About Page - Action Boxes
  donateNowLink: "अभी दान करें",
  getInvolvedLink: "शामिल हों",
  contactLink: "संपर्क करें",

  // About Page - Our Approach Section (Summary)
  approachHeading: "हमारा दृष्टिकोण",
  approachText:
    "भारत के सबसे कम सेवा वाले क्षेत्रों में थिएटर, शिक्षा और सामुदायिक कार्रवाई के माध्यम से सीखने, संवाद और जमीनी स्तर के नेतृत्व को प्रेरित करना।",

  // About Page - Causes Section (Detailed Approach)
  approachLearningCenteredHeading: "शिक्षण-केंद्रित सशक्तिकरण",
  approachLearningCenteredDescription:
    "हमारा मानना है कि स्थायी परिवर्तन सीखने से शुरू होता है। पंचलाइट फाउंडेशन में, शिक्षा, स्वास्थ्य, नुक्कड़ नाटक, या आजीविका में प्रत्येक पहल अधिगम (सीखने) के सिद्धांत पर आधारित है। हम ऐसी शिक्षण प्रक्रियाएं सह-निर्मित करते हैं जो जमीनी स्तर पर संचालित, सांस्कृतिक रूप से निहित और संवादात्मक हों।",
  approachTheatreToolHeading:
    "सामाजिक परिवर्तन के लिए एक उपकरण के रूप में थिएटर",
  approachTheatreToolDescription:
    "हमारे अधिगमनाट्य कार्यक्रम के माध्यम से, हम गंभीर सामाजिक मुद्दों पर जागरूकता बढ़ाने के लिए नुक्कड़ नाटक, लोक कला और सार्वजनिक संवाद का उपयोग करते हैं। हमारे लिए, थिएटर सिर्फ प्रदर्शन नहीं है - यह प्रतिबिंब, बातचीत और सामूहिक परिवर्तन का एक उपकरण है।",
  approachCommunityLedHeading: "समुदाय-नेतृत्व परिवर्तन",
  approachCommunityLedDescription:
    "हमारा मानना है कि सबसे टिकाऊ परिवर्तन भीतर से आता है। पंचलाइट युवाओं, महिलाओं और बच्चों को अधिगम सारथी (शिक्षण सुविधाकर्ता) और अधिगम कलाकारों के रूप में पोषित करके स्थानीय नेतृत्व के निर्माण में निवेश करता है, जो अपने समुदायों में सामाजिक प्रगति के उत्प्रेरक बन जाते हैं।",
  approachEquityInclusionHeading: "समानता और समावेशन",
  approachEquityInclusionDescription:
    "हम सभी के लिए न्यायपूर्ण और समावेशी स्थान बनाने पर अपने प्रयासों को केंद्रित करते हैं - विशेषकर महिलाओं, किशोरियों और हाशिए पर पड़े समुदायों के लिए। हमारे कार्यक्रम अंतराल को पाटने और अनसुनी आवाजों को सशक्त बनाने के लिए डिज़ाइन किए गए हैं।",

  approachCollaborationHeading: "Collaboration and Ecosystem Building",
  approachCollaborationDescription:
    "We actively partner with government bodies, NGOs, and grassroots groups to maximize collective impact. Our aim is to build a collaborative ecosystem where knowledge, resources, and capacities are shared for the greater good.",
  approachCulturalSensitivityHeading: "Cultural Sensitivity and Local Context",
  approachCulturalSensitivityDescription:
    "Our work is deeply rooted in the culture, language, and traditions of the communities we serve. We believe that respecting local identities is not only ethical, but also essential for effective and meaningful engagement.",

  // What We Do Page - Hero Section
  wwdHeroHeading: "समुदायों को बदलना",
  wwdHeroSubtext:
    "अभिनव कार्यक्रमों और जमीनी स्तर पर जुड़ाव के माध्यम से, हम पूरे बिहार में वंचित समुदायों के लिए एक स्थायी भविष्य का निर्माण कर रहे हैं।",
  wwdExploreImpactButton: "हमारे प्रभाव का अन्वेषण करें",

  // What We Do Page - Impact Stats (Hero Section)
  wwdStatLivesTransformedLabel: "जीवन बदल गए",
  wwdStatLivesTransformedDescription: "बिहार में पहुंचे व्यक्ति",
  wwdStatDistrictsCoveredLabel: "कवर किए गए जिले",
  wwdStatDistrictsCoveredDescription: "व्यापक भौगोलिक पहुंच",
  wwdStatPanchayatsLabel: "पंचायतें",
  wwdStatPanchayatsDescription: "सक्रिय हस्तक्षेप चल रहे हैं",
  wwdStatVillagesLabel: "गांव",
  wwdStatVillagesDescription: "सहयोगात्मक साझेदारी",

  // What We Do Page - Pillars Section
  wwdPillarsHeading: "हमारे स्तंभ",
  wwdEmpowermentPillarTitle: "सशक्तिकरण",
  wwdEmpowermentPillarDescription:
    "हम समाज के वंचित वर्गों को शिक्षा, स्वास्थ्य, ऊर्जा और आजीविका के माध्यम से सशक्त बनाने पर ध्यान केंद्रित करते हैं, ताकि हर व्यक्ति अपनी पूरी क्षमता का एहसास कर सके।",
  wwdCommunityEngagementPillarTitle: "सामुदायिक सहभागिता",
  wwdCommunityEngagementPillarDescription:
    "हम समुदायों को संगठित करते हैं और उन्हें जागरूकता अभियानों, कार्यशालाओं और सामूहिक प्रयासों के माध्यम से अपने जीवन को बेहतर बनाने के लिए एक साथ आने में सक्षम बनाते हैं।",
  wwdLeadershipDevelopmentPillarTitle: "नेतृत्व विकास",
  wwdLeadershipDevelopmentPillarDescription:
    "समुदायों के भीतर स्थानीय नेताओं और परिवर्तन-निर्माताओं का पोषण करना",
  wwdPartnershipsPillarTitle: "भागीदारी",
  wwdPartnershipsPillarDescription:
    "हम उन संगठनों और संस्थानों के साथ सहयोग करते हैं जो शिक्षा, स्वास्थ्य, ऊर्जा और आजीविका के माध्यम से ग्रामीण और शहरी क्षेत्रों के विकास में योगदान देना चाहते हैं।",
  wwdImpactPillarTitle: "प्रभाव",
  wwdImpactPillarDescription:
    "हम दीर्घकालिक और स्थायी परिणाम देने का लक्ष्य रखते हैं, यह साबित करते हुए कि शिक्षा, स्वास्थ्य और सामुदायिक सशक्तिकरण के माध्यम से समग्र विकास संभव है।",
  wwdInnovationPillarTitle: "नवाचार",
  wwdInnovationPillarDescription:
    "हम आधुनिक प्रौद्योगिकियों और नई सोच के माध्यम से ऐसे समाधान विकसित करते हैं जो समाज के सभी वर्गों को लाभान्वित करते हैं और विकास को गति देते हैं।",

  // What We Do Page - Program Section
  wwdProgramsHeading: "हमारे व्यापक कार्यक्रम",
  wwdProgramsSubtext:
    "हमारे मिशन के केंद्र में गोता लगाएँ। प्रत्येक कार्यक्रम को विशेष सामुदायिक आवश्यकताओं को पूरा करने, स्थायी विकास को बढ़ावा देने और स्थायी सकारात्मक परिवर्तन बनाने के लिए सावधानीपूर्वक डिज़ाइन किया गया है।",

  wwdProgramHealthTitle: "संवाद के माध्यम से स्वास्थ्य शिक्षा",
  wwdProgramHealthSubtitle: "अधिगमस्वास्थ्य",
  wwdProgramHealthDescription:
    "हम कार्यशालाओं और थिएटर के माध्यम से स्वास्थ्य, स्वच्छता और पोषण पर जागरूकता को बढ़ावा देते हैं। हम आयुष्मान कार्ड पंजीकरण में भी सहायता करते हैं और वर्जनाओं को तोड़ने और गरिमा सुनिश्चित करने के लिए मासिक धर्म स्वास्थ्य कार्यशालाएं आयोजित करते हैं।",
  wwdProgramHealthFeature1: "स्वास्थ्य, स्वच्छता और पोषण कार्यशालाएं",
  wwdProgramHealthFeature2:
    "वर्जनाओं को तोड़ने के लिए मासिक धर्म स्वास्थ्य शिक्षा",
  wwdProgramHealthFeature3: "आयुष्मान कार्ड पंजीकरण सहायता",
  wwdProgramHealthFeature4: "स्वास्थ्य जागरूकता के लिए सामुदायिक थिएटर",
  wwdProgramHealthImpact:
    "स्वास्थ्य शिक्षा के साथ 15,000+ व्यक्तियों तक पहुंचे",

  wwdProgramLivelihoodTitle: "आजीविका सशक्तिकरण",
  wwdProgramLivelihoodSubtitle: "अधिगमस्वावलंबन",
  wwdProgramLivelihoodDescription:
    "हम सिलाई और कौशल प्रशिक्षण प्रदान करते हैं, और पीएम स्वनिधि जैसी सरकारी योजनाओं से जोड़कर सड़क विक्रेताओं और अनौपचारिक श्रमिकों का समर्थन करते हैं, जिससे आर्थिक आत्मनिर्भरता को बढ़ावा मिलता है।",
  wwdProgramLivelihoodFeature1: "सिलाई और कौशल विकास प्रशिक्षण",
  wwdProgramLivelihoodFeature2:
    "सड़क विक्रेताओं और अनौपचारिक श्रमिकों के लिए सहायता",
  wwdProgramLivelihoodFeature3: "पीएम स्वनिधि और अन्य सरकारी योजनाओं से जुड़ाव",
  wwdProgramLivelihoodFeature4: "आर्थिक आत्मनिर्भरता के लिए कार्यक्रम",
  wwdProgramLivelihoodImpact:
    "विभिन्न कौशलों में 3,000+ व्यक्तियों को प्रशिक्षित किया",

  wwdProgramTheatreTitle: "जागरूकता के लिए नुक्कड़ नाटक",
  wwdProgramTheatreSubtitle: "अधिगमनाट्य",
  wwdProgramTheatreDescription:
    "हम स्थानीय कलाकारों द्वारा संचालित स्वास्थ्य, लैंगिक समानता, पर्यावरण और बाल अधिकारों जैसे मुद्दों पर जागरूकता बढ़ाने के लिए नुक्कड़ नाटक, लोक कला और खुले संवाद का उपयोग करते हैं।",
  wwdProgramTheatreFeature1: "नुक्कड़ नाटक और लोक कला प्रदर्शन",
  wwdProgramTheatreFeature2: "खुले सामुदायिक संवाद",
  wwdProgramTheatreFeature3:
    "लिंग, स्वास्थ्य, बाल अधिकार, पर्यावरण पर जागरूकता",
  wwdProgramTheatreFeature4: "स्थानीय थिएटर कलाकारों द्वारा नेतृत्व",
  wwdProgramTheatreImpact: "समुदायों में 200+ प्रदर्शन आयोजित किए",

  wwdProgramLearningTitle: "सामुदायिक शिक्षा",
  wwdProgramLearningSubtitle: "अधिगमशाला",
  wwdProgramLearningDescription:
    "हम बच्चों—विशेषकर लड़कियों—में मूलभूत साक्षरता, रचनात्मक कौशल और नेतृत्व का निर्माण करने के लिए स्थानीय शिक्षण स्थान चलाते हैं, जिसका नेतृत्व प्रशिक्षित युवा शिक्षक (अधिगम सारथी) करते हैं।",
  wwdProgramLearningFeature1: "मूलभूत साक्षरता कार्यक्रम",
  wwdProgramLearningFeature2: "रचनात्मक कौशल निर्माण गतिविधियाँ",
  wwdProgramLearningFeature3: "लड़कियों पर केंद्रित नेतृत्व प्रशिक्षण",
  wwdProgramLearningFeature4: "युवा-नेतृत्व वाले शिक्षण स्थान",
  wwdProgramLearningImpact: "50+ शिक्षण केंद्र स्थापित किए",

  wwdProgramEducationForAllTitle: "सभी के लिए शिक्षा",
  wwdProgramEducationForAllSubtitle: "अधिगमशाला",
  wwdProgramEducationForAllDescription:
    "हमारा अधिगमशाला कार्यक्रम ग्रामीण क्षेत्रों में वंचित बच्चों को सुलभ और गुणवत्तापूर्ण शिक्षा प्रदान करने पर केंद्रित है। हमारा मानना है कि शिक्षा प्रगति की आधारशिला है और इसका उद्देश्य अगली पीढ़ी को ज्ञान और कौशल के साथ सशक्त बनाना है।",
  wwdProgramEducationForAllImpact: "प्रतिवर्ष 500+ बच्चों को सशक्त बनाना",
  wwdProgramEducationForAllFeature1: "मुफ्त अध्ययन सामग्री और पाठ्यपुस्तकें",
  wwdProgramEducationForAllFeature2: "ग्रामीण शिक्षण केंद्रों की स्थापना",
  wwdProgramEducationForAllFeature3: "प्रशिक्षित स्वयंसेवक शिक्षक",
  wwdProgramEducationForAllFeature4:
    "बुनियादी साक्षरता और संख्यात्मकता पर ध्यान केंद्रित करें",

  wwdProgramHealthWellbeingTitle: "स्वास्थ्य और कल्याण पहल",
  wwdProgramHealthWellbeingSubtitle: "अधिगमस्वास्थ्य",
  wwdProgramHealthWellbeingDescription:
    "अधिगमस्वास्थ्य कार्यक्रम नियमित शिविरों और जागरूकता अभियानों के माध्यम से सामुदायिक स्वास्थ्य में सुधार के लिए समर्पित है। हम निवारक स्वास्थ्य देखभाल, स्वच्छता और वंचित आबादी में सामान्य स्वास्थ्य चिंताओं को दूर करने पर ध्यान केंद्रित करते हैं।",
  wwdProgramHealthWellbeingImpact: "प्रतिवर्ष 10,000+ लाभार्थियों तक पहुंचना",
  wwdProgramHealthWellbeingFeature1: "मुफ्त चिकित्सा जांच और परामर्श",
  wwdProgramHealthWellbeingFeature2: "रक्तदान शिविर",
  wwdProgramHealthWellbeingFeature3: "स्वच्छता और स्वच्छता कार्यशालाएं",
  wwdProgramHealthWellbeingFeature4:
    "महत्वपूर्ण स्वास्थ्य मुद्दों पर जागरूकता अभियान",

  wwdProgramWomenEmpowermentTitle: "महिला सशक्तिकरण",
  wwdProgramWomenEmpowermentSubtitle: "अधिगमस्वावलंबन",
  wwdProgramWomenEmpowermentDescription:
    "अधिगमस्वावलंबन महिला सशक्तिकरण के लिए हमारा प्रमुख कार्यक्रम है। हम कौशल विकास प्रशिक्षण प्रदान करते हैं, आत्मनिर्भरता को बढ़ावा देते हैं, और एक समान समाज को बढ़ावा देने के लिए महिलाओं के अधिकारों के बारे में जागरूकता बढ़ाते हैं।",
  wwdProgramWomenEmpowermentImpact: "प्रतिवर्ष 50+ महिलाओं के जीवन को बदलना",
  wwdProgramWomenEmpowermentFeature1:
    "व्यावसायिक कौशल प्रशिक्षण (उदाहरण के लिए, सिलाई, हस्तशिल्प)",
  wwdProgramWomenEmpowermentFeature2: "वित्तीय साक्षरता कार्यशालाएं",
  wwdProgramWomenEmpowermentFeature3:
    "नुक्कड़ नाटकों के माध्यम से लैंगिक समानता जागरूकता",
  wwdProgramWomenEmpowermentFeature4: "महिला उद्यमिता के लिए सहायता",

  wwdProgramEnvironmentalConservationTitle: "पर्यावरण संरक्षण",
  wwdProgramEnvironmentalConservationSubtitle: "प्रकृति संरक्षण",
  wwdProgramEnvironmentalConservationDescription:
    "प्रकृति संरक्षण के माध्यम से, हम समुदायों को पर्यावरण संरक्षण प्रयासों में संलग्न करते हैं, भविष्य की पीढ़ियों के लिए एक स्वस्थ ग्रह सुनिश्चित करने के लिए स्थायी प्रथाओं और अपशिष्ट प्रबंधन पर ध्यान केंद्रित करते हैं।",
  wwdProgramEnvironmentalConservationImpact:
    "स्थायी जीवन पर 5,000+ को शिक्षित करना",
  wwdProgramEnvironmentalConservationFeature1: "प्लास्टिक कचरा जागरूकता अभियान",
  wwdProgramEnvironmentalConservationFeature2: "सामुदायिक सफाई अभियान",
  wwdProgramEnvironmentalConservationFeature3: "वृक्षारोपण पहल",
  wwdProgramEnvironmentalConservationFeature4:
    "पर्यावरण के अनुकूल प्रथाओं को बढ़ावा देना",

  wwdProgramCleanlinessSanitationTitle: "स्वच्छता अभियान",
  wwdProgramCleanlinessSanitationSubtitle: "स्वच्छता और सफाई अभियान",
  wwdProgramCleanlinessSanitationDescription:
    "हमारा स्वच्छता अभियान व्यापक जागरूकता अभियानों, रैलियों और स्थानीय पहलों के माध्यम से समुदायों में स्वच्छता और सफाई को बढ़ावा देता है, जिसका उद्देश्य सार्वजनिक स्वास्थ्य और स्वच्छता मानकों में सुधार करना है।",
  wwdProgramCleanlinessSanitationImpact: "40,000+ व्यक्तियों तक पहुंचना",
  wwdProgramCleanlinessSanitationFeature1:
    "स्वच्छता जागरूकता रैलियां और नुक्कड़ नाटक",
  wwdProgramCleanlinessSanitationFeature2: "शौचालय निर्माण वकालत",
  wwdProgramCleanlinessSanitationFeature3: "कचरा पृथक्करण शिक्षा",
  wwdProgramCleanlinessSanitationFeature4: "समुदाय-नेतृत्व वाली स्वच्छता पहल",

  wwdProgramCommunityAwarenessTitle: "सामुदायिक जागरूकता कार्यक्रम",
  wwdProgramCommunityAwarenessSubtitle: "सामुदायिक जागरूकता",
  wwdProgramCommunityAwarenessDescription:
    "सामुदायिक जागरूकता शिक्षा, स्वास्थ्य और पर्यावरण जैसे महत्वपूर्ण विषयों पर आकर्षक मंच नाटकों, सार्वजनिक बैठकों और जागरूकता अभियानों के माध्यम से विभिन्न सामाजिक मुद्दों को संबोधित करके सूचित समुदायों को बढ़ावा देती है।",
  wwdProgramCommunityAwarenessImpact:
    "50,000+ सामुदायिक सदस्यों को प्रभावित करना",
  wwdProgramCommunityAwarenessFeature1:
    "सामाजिक मुद्दों पर इंटरैक्टिव मंच नाटक",
  wwdProgramCommunityAwarenessFeature2: "सामुदायिक बैठकें और संवाद",
  wwdProgramCommunityAwarenessFeature3: "सरकारी योजनाओं पर सूचना प्रसार",
  wwdProgramCommunityAwarenessFeature4:
    "नागरिक जिम्मेदारी और भागीदारी को बढ़ावा देना",

  // What We Do Page - Our Journey Section (Goals)
  wwdGoalsHeading: "हमारे लक्ष्य",
  wwdGoalsSubtext: "एक साधारण बातचीत से एक परिवर्तनकारी आंदोलन तक",

  wwdVision2025Title: "2025 के लिए हमारा विजन: एक उज्जवल कल",
  wwdVision2025Description:
    "2025 के अंत तक, पंचलाइट फाउंडेशन बिहार भर में कम से कम **20,000 व्यक्तियों** के जीवन को गहराई से समृद्ध करने के लिए प्रतिबद्ध है, जो हमारे विविध, प्रभावशाली कार्यक्रमों के माध्यम से स्थायी विकास और सामुदायिक लचीलापन को बढ़ावा देगा।",

  wwdTheVisionTitle: "विजन",
  wwdTheVisionDescription:
    "अररिया जिले के संजय कुमार इस विजन में शामिल हुए, उन्होंने देखा कि समुदायों को सूचना और अवसरों तक पहुंच की कमी है। साथ में, उन्होंने सही मार्गदर्शन के साथ लोगों को सशक्त बनाने में विश्वास किया।",
  wwdTheVisionQuote:
    '"अगर कुछ लोग दिल से शुरुआत करें तो एक छोटा सा दीया भी समाज की दिशा बदल सकता है।"',

  hopeForAllTitle: "सभी के लिए आशा",
  hopeForAllDescription:
    "पंचलाइट फाउंडेशन शिक्षा, रंगमंच, स्वास्थ्य और आजीविका कार्यक्रमों के माध्यम से हाशिए पर पड़े समुदायों को सशक्त बनाने के लिए समर्पित है।",
  quickLinks: "त्वरित लिंक",
  footerOurMission: "हमारा मिशन",
  programs: "कार्यक्रम",
  gallery: "गैलरी",
  donate: "दान करें",
  volunteer: "स्वयंसेवक बनें",
  contactUs: "हमसे संपर्क करें",
  followUs: "हमें फॉलो करें",
  goToTop: "ऊपर जाएँ",
  copyright: "© 2024 पंचलाइट फाउंडेशन। सर्वाधिकार सुरक्षित।",
  privacyPolicy: "गोपनीयता नीति",
  termsOfService: "सेवा की शर्तें",

  // What We Do Page - Impact Section
  wwdImpactSectionHeading: "हमारा प्रभाव",
  wwdImpactSectionIntro:
    "पंचलाइट फाउंडेशन वर्तमान में समुदाय के जीवन को रोशन कर रहा है।",
  wwdImpactPeopleTitle: "लोग",
  wwdImpactPeopleDescription:
    "हमारा मानना है कि समाज में बदलाव लाने के लिए जमीनी स्तर पर प्रतिबद्ध और संवेदनशील लोगों की आवश्यकता होती है। पंचलाइट फाउंडेशन ने कई युवाओं को प्रशिक्षित किया है जो शिक्षा, स्वास्थ्य, स्वच्छता और आजीविका जैसे क्षेत्रों में समाज में सकारात्मक बदलाव लाने के लिए काम कर रहे हैं। हमारे स्वयंसेवकों ने गांवों का दौरा करके और नुक्कड़ नाटक, जागरूकता अभियान और कार्यक्रम आयोजित करके हजारों लोगों को प्रभावित किया है।",
  wwdImpactModelsTitle: "मॉडल",
  wwdImpactModelsDescription:
    "हमारे कार्यक्रम व्यावहारिक और समुदाय-आधारित मॉडलों पर आधारित हैं, जिन्हें अन्य संगठनों और स्थानीय निकायों द्वारा अपनाया जा रहा है। 'अधिगमशाला' जैसी पहलों ने बच्चों की शिक्षा को बढ़ावा दिया है, जबकि आयुष्मान कार्ड जागरूकता जैसे अभियानों ने ग्रामीण परिवारों को स्वास्थ्य सेवाओं से जोड़ने में मदद की है। हमारे नुक्कड़ नाटक और कार्यशालाओं को अब सरकारी विभागों और स्कूलों द्वारा भी सराहा और अपनाया जा रहा है।",
  wwdImpactScalingUpTitle: "विस्तार",
  wwdImpactScalingUpDescription:
    "आज, पंचलाइट फाउंडेशन बिहार के कई जिलों में सक्रिय रूप से काम कर रहा है और 50,000 से अधिक लोगों तक पहुंच चुका है। हम विभिन्न समुदाय-आधारित संगठनों और शैक्षणिक संस्थानों के सहयोग से काम करते हैं। हमारा लक्ष्य 2030 तक 5 लाख लोगों को शिक्षा, स्वास्थ्य, रोजगार और स्वच्छता के क्षेत्र में अपने कार्यक्रमों से जोड़कर सशक्त बनाना है।",

  // What We Do Page - GoalsSection
  wwdGoalEducationTitle:
    "शिक्षा के माध्यम से भविष्य को सशक्त बनाना (अधिगमशाला)",
  wwdGoalEducationDescription:
    "दिमाग प्रज्वलित करें: 500 से अधिक वंचित बच्चों को गुणवत्तापूर्ण, सुलभ शिक्षा और आवश्यक शिक्षण सामग्री प्रदान करें। मूलभूत साक्षरता और महत्वपूर्ण सोच को बढ़ावा देने के लिए ग्रामीण क्षेत्रों में 5 नए समुदाय-केंद्रित शिक्षण केंद्र स्थापित करें।",
  wwdGoalHealthTitle: "सामुदायिक कल्याण को बढ़ावा देना (अधिगमस्वास्थ्य)",
  wwdGoalHealthDescription:
    "सभी के लिए स्वास्थ्य: 5 व्यापक स्वास्थ्य और कल्याण शिविर, साथ ही 2 महत्वपूर्ण रक्तदान अभियान आयोजित करें, जो वंचित ग्रामीण और शहरी समुदायों तक पहुंचें। निवारक देखभाल और आवश्यक स्वास्थ्य जांच पर ध्यान केंद्रित करें।",
  wwdGoalWomenEmpowermentTitle:
    "महिला सशक्तिकरण में तेजी लाना (अधिगमस्वावलंबन)",
  wwdGoalWomenEmpowermentDescription:
    "क्षमता को अनलॉक करना: 50 महिलाओं को परिवर्तनकारी व्यावसायिक कौशल प्रशिक्षण से लैस करें, जिससे आर्थिक स्वतंत्रता के मार्ग प्रशस्त हों। महिला अधिकारों और लैंगिक समानता पर जागरूकता बढ़ाने के लिए प्रभावशाली नुक्कड़ नाटक प्रदर्शन आयोजित करें, जिससे 10,000 से अधिक महिलाएं प्रभावित होंगी।",
  wwdGoalEnvironmentTitle: "एक स्थायी पर्यावरण का पोषण (प्रकृति संरक्षण)",
  wwdGoalEnvironmentDescription:
    "हरित पहल: प्लास्टिक कचरा कम करने और स्थायी जीवन शैली के महत्वपूर्ण महत्व पर 5,000 से अधिक व्यक्तियों को शिक्षित करें। सफाई और पर्यावरण संरक्षण अभियानों को शामिल करके 10,000+ सामुदायिक सदस्यों को जुटाएं।",
  wwdGoalHygieneTitle: "स्वच्छता और सफाई को बढ़ावा देना (स्वच्छता अभियान)",
  wwdGoalHygieneDescription:
    "हर विवरण में गरिमा: स्वच्छता और सफाई पर महत्वपूर्ण जानकारी फैलाने के लिए प्रभावशाली रैलियां और अभिनव नुक्कड़ नाटक का नेतृत्व करें, जिसका लक्ष्य 40,000 से अधिक व्यक्तियों तक पहुंचना और स्वस्थ सामुदायिक आदतों को बढ़ावा देना है।",
  wwdGoalAwarenessTitle: "सूचित समुदायों का निर्माण (सामाजिक जागरूकता)",
  wwdGoalAwarenessDescription:
    "परिवर्तन को उत्प्रेरित करना: शिक्षा, स्वास्थ्य और पर्यावरण प्रबंधन के महत्वपूर्ण विषयों पर आकर्षक मंच नाटकों, सार्वजनिक बैठकों और जागरूकता अभियानों के माध्यम से विभिन्न सामाजिक मुद्दों को संबोधित करके सूचित समुदायों को बढ़ावा देती है।",

  // FAQ Page Content
  faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
  faqSubtitle:
    "यदि आपको अपने प्रश्न का उत्तर नहीं मिल रहा है, तो बेझिझक हमें ईमेल करें!",
  faqContactButton: "हमसे संपर्क करें",
  faqQ1: "पंचलाइट फाउंडेशन क्या है?",
  faqA1:
    "पंचलाइट फाउंडेशन एक पंजीकृत धर्मार्थ ट्रस्ट है जो शिक्षा, थिएटर, स्वास्थ्य जागरूकता और आजीविका कार्यक्रमों के माध्यम से हाशिए पर पड़े समुदायों को सशक्त बनाने के लिए काम करता है।",
  faqQ2: "क्या पंचलाइट फाउंडेशन कानूनी रूप से पंजीकृत है?",
  faqA2:
    "हां। पंचलाइट फाउंडेशन भारतीय ट्रस्ट अधिनियम के तहत एक सार्वजनिक धर्मार्थ ट्रस्ट के रूप में पंजीकृत है और अपने आधिकारिक तौर पर पंजीकृत उद्देश्यों के अनुसार काम करता है।",
  faqQ3: "फाउंडेशन के उद्देश्य क्या हैं?",
  faqA3:
    "हमारे उद्देश्यों में अभिनव, समुदाय-नेतृत्व वाले मॉडल का उपयोग करके शिक्षा, स्वास्थ्य, संस्कृति, कौशल विकास, लैंगिक समानता और सामाजिक जागरूकता को बढ़ावा देना शामिल है।",
  faqQ4: "फाउंडेशन का संचालन कौन करता है?",
  faqA4:
    "फाउंडेशन का प्रबंधन न्यासी बोर्ड द्वारा किया जाता है। प्रबंध न्यासी रणनीति, कार्यान्वयन और अनुपालन की देखरेख करता है।",
  faqQ5: "आपके कार्यक्रमों को कैसे लागू किया जाता है?",
  faqA5:
    "हम स्थानीय युवाओं - जिन्हें अधिगम सारथी (शिक्षक) और अधिगम कलाकार (कलाकार) के रूप में जाना जाता है - को संलग्न करते हैं जो शैक्षिक कार्यशालाएं, नुक्कड़ नाटक, जागरूकता अभियान और स्वास्थ्य पहल का नेतृत्व करते हैं।",
  faqQ6: "पंचलाइट फाउंडेशन के मुख्य कार्यक्रम क्या हैं?",
  faqA6:
    "अधिगमशाला – सामुदायिक शिक्षण केंद्र\nअधिगमनाट्य – सामाजिक परिवर्तन के लिए नुक्कड़ नाटक\nअधिगमस्वावलंबन – आजीविका और सूक्ष्म-उद्यमी सहायता\nअधिगमस्वास्थ्य – स्वास्थ्य शिक्षा, आयुष्मान कार्ड सहायता, और मासिक धर्म जागरूकता",
  faqQ7: "आप कहाँ काम करते हैं?",
  faqA7:
    "हम मुख्य रूप से बिहार और आसपास के क्षेत्रों के ग्रामीण और वंचित क्षेत्रों में काम करते हैं, सार्वजनिक संसाधनों तक सीमित पहुंच वाले क्षेत्रों को प्राथमिकता देते हैं।",
  faqQ8: "आप पारदर्शिता कैसे सुनिश्चित करते हैं?",
  faqA8:
    "हम विस्तृत रिकॉर्ड बनाए रखते हैं, नियमित ऑडिट करते हैं, और सभी लागू वित्तीय और कानूनी नियमों का पालन करते हैं।",
  faqQ9: "मैं पंचलाइट फाउंडेशन का समर्थन कैसे कर सकता हूँ?",
  faqA9:
    "आप हमें दान करके, स्वयं सेवा करके, सहयोग करके, या हमें अपने क्षेत्र में कार्यक्रम आयोजित करने के लिए आमंत्रित करके हमारा समर्थन कर सकते हैं। अधिक जानकारी के लिए 'हमारा समर्थन करें' पेज पर जाएं।",
  faqQ10: "क्या पंचलाइट फाउंडेशन को दिए गए दान पर कर छूट मिलती है?",
  faqA10:
    "हां। पंचलाइट फाउंडेशन में 12ए पंजीकरण है, और सभी दाताओं को आधिकारिक रसीदें प्राप्त होती हैं जिनका उपयोग कर छूट का दावा करने के लिए किया जा सकता है।",
  faqQ11: "अधिक प्रश्न हैं?",
  faqA11:
    "हमें namastepunchlight@gmail.com पर ईमेल करने के लिए स्वतंत्र महसूस करें — हमें आपसे सुनना अच्छा लगेगा!",

  // Donation Page Content
  donationHeroTitle: "साथ मिलकर, आइए जीवन को रोशन करें!",
  donationHeroSubtitle:
    "हर समुदाय के लिए पंचलाइट फाउंडेशन। आपका छोटा सा योगदान बड़े बदलाव ला सकता है।",
  donationSectionTitle: "दान करें",
  donationTaxExemptionBadge: "धारा 80G के तहत कर छूट",
  donationFullNameLabel: "पूरा नाम *",
  donationEmailLabel: "ईमेल पता *",
  donationPhoneLabel: "फोन नंबर",
  donationAmountLabel: "दान की राशि (₹) *",
  donationMessageLabel: "संदेश (वैकल्पिक)",
  donateNowButton: "अभी दान करें 💫",
  donationiACTTitle: "बदलाव के लिए iACT",
  donationiACTP1:
    "समाज में सकारात्मक बदलाव की यात्रा का हिस्सा बनें। पंचलाइट फाउंडेशन की बहुआयामी पहलों का समर्थन करके...",
  donationiACTP2:
    "चाहे बच्चों को पढ़ाना हो या नुक्कड़ नाटकों के माध्यम से जागरूकता पैदा करना - हर योगदान मायने रखता है।",
  donationImpactTitle: "हमारा प्रभाव",
  donationImpactP1:
    "पंचलाइट फाउंडेशन शिक्षा, स्वास्थ्य, आजीविका और जागरूकता के क्षेत्र में काम करता है।",
  donationImpactL1: "जरूरतमंद समुदायों तक पहुंचें और शिक्षण केंद्र चलाएं",
  donationImpactL2: "विभिन्न पहलों के माध्यम से महिलाओं को सशक्त बनाएं",
  donationImpactL3: "नुक्कड़ नाटक और संवाद के माध्यम से जागरूकता फैलाएं",
  donationImpactL4: "शिक्षा, स्वास्थ्य और आजीविका कार्यक्रमों का समर्थन करें",
  donationBankTransferTitle: "बैंक ट्रांसफर विवरण",
  donationAccountName: "खाता नाम:",
  donationBankName: "बैंक का नाम:",
  donationAccountNumber: "खाता संख्या:",
  donationIFSCCode: "आईएफएससी कोड:",
  donationBranch: "शाखा:",
  donationAccountType: "खाते का प्रकार:",
  donationAccountNameValue: "पंचलाइट फाउंडेशन ट्रस्ट",
  donationBankNameValue: "बैंक ऑफ महाराष्ट्र",
  donationAccountNumberValue: "60491399142",
  donationIFSCCodeValue: "MAHB0002127",
  donationBranchValue: "अररिया, बिहार",
  donationAccountTypeValue: "करंट",
  donationInKindSupportTitle: "वस्तु-रूप समर्थन और संपर्क",
  donationInKindSupportP:
    "आप शैक्षिक किट, कपड़े, दवाएं और अन्य उपयोगी वस्तुएं दान कर सकते हैं।",
  donationPhone: "फोन:",
  donationEmail: "ईमेल:",
  donationPhoneNumber: "+91-8709945694",
  donationEmailAddress: "namastepunchlight@gmail.com",
  donationTransparencyTitle: "पारदर्शिता और जवाबदेही",
  donationTransparencyP:
    "हम आपके समर्थन का उपयोग करने में पूर्ण पारदर्शिता और जवाबदेही सुनिश्चित करते हैं। आपका दान धारा 80G के तहत कर छूट के लिए योग्य है।",
  donationPopupMessage: "⚠ क्षमा करें! यह सुविधा अभी उपलब्ध नहीं है।",
  donationImageAlt: "ग्रामीण क्षेत्रों में काम कर रहा फाउंडेशन", // New key for alt text
  donationPhonePlaceholder: "+91-8709945694", // New key for phone input placeholder

  // Team Section Content
  teamMentorHeading: "हमारे मुख्य सलाहकार और मेंटर",
  teamMentorSubheading: "हमारी सफलता के पीछे के विशेषज्ञ से मिलें",
  teamTeamHeading: "हमारी टीम से मिलें",
  teamTeamSubheading: "दृष्टि के साथ नेतृत्व, उद्देश्य के साथ आगे बढ़ना",
  teamTeamIntro:
    "एक बहुसांस्कृतिक टीम जो ग्रामीण समुदायों के लिए अवसर सृजित करने, आजीवन सीखने को बढ़ावा देने और सकारात्मक, स्थायी बदलाव लाने के लिए समर्पित है।",
  prashantPalName: "प्रशांत पाल",
  prashantPalPosition: "सह-संस्थापक, प्रबंध न्यासी",
  prashantPalDescription: `प्रशांत पाल दशकों से कॉर्पोरेट और सामाजिक क्षेत्रों में काम करने वाले एक अनुभवी पेशेवर हैं। 2013 में, उन्होंने PURE India Trust की स्थापना की, जिसका उद्देश्य उद्यमिता, कौशल विकास और शिक्षा के माध्यम से महिलाओं और दिव्यांग व्यक्तियों को सशक्त बनाना है। एक मध्यमवर्गीय पृष्ठभूमि से आने के कारण, प्रशांत ने गरीबी और आर्थिक संघर्षों को करीब से देखा, जिसने उन्हें जरूरतमंदों की मदद करने के लिए प्रेरित किया। अन्ना हजारे आंदोलन से प्रभावित होकर, वह 2012 में भारत लौटे और सामाजिक परिवर्तन के लिए काम करना शुरू किया।पंचलाइट फाउंडेशन में, वह एक मुख्य सलाहकार और संरक्षक के रूप में महत्वपूर्ण भूमिका निभा रहे हैं। अपने व्यापक अनुभव और मार्गदर्शन से, संगठन समाज में प्रभावशाली बदलाव लाने के अपने उद्देश्य में मजबूती से आगे बढ़ रहा है।`,

  shMasoomName: "श्री मासूम",
  shMasoomPosition: "न्यासी",
  shMasoomDescription: `शम्सुल हुदा मासूम (एस. एच. मासूम) अररिया, बिहार में स्थित एक सम्मानित शिक्षक, लेखक और साहित्यिक कार्यकर्ता हैं। उन्होंने अपना जीवन शिक्षा और साहित्य को सामाजिक परिवर्तन के साधन के रूप में उपयोग करने के लिए समर्पित किया है। अपने लेखन और शिक्षण के माध्यम से, उन्होंने छात्रों और पाठकों की कई पीढ़ियों को प्रेरित किया है। उनके पास पटना विश्वविद्यालय से अंग्रेजी और फारसी दोनों में स्नातकोत्तर (एमए) की डिग्री है, साथ ही माध्यमिक शिक्षा में स्नातक की डिग्री और बी.एड व्याख्याता में प्रमाणन भी है। उनकी अकादमिक पृष्ठभूमि समृद्ध, विविध और शास्त्रीय तथा समकालीन शिक्षा में गहराई से निहित है। पंचलाइट फाउंडेशन में, वह एक संरक्षक के रूप में कार्य करते हैं, संगठन की शैक्षिक और सामाजिक पहलों का मार्गदर्शन करने के लिए अपनी अकादमिक विशेषज्ञता, भाषाई गहराई और साहित्यिक दृष्टिकोण का योगदान करते हैं। उनकी अंतर्दृष्टि ज्ञान और जागरूकता के माध्यम से सामुदायिक सशक्तिकरण के फाउंडेशन के मिशन को लगातार आकार दे रही है। एस. एच. मासूम शिक्षा, साहित्य और सामाजिक चेतना के क्षेत्रों में प्रेरणा का स्रोत बने हुए हैं।`,

  abodhKumarName: "अबोध कुमार",
  abodhKumarPosition: "न्यासी",
  abodhKumarDescription: `अबोध कुमार बचपन से ही आत्मनिर्भरता और कड़ी मेहनत में विश्वास रखते आए हैं। बिहार में अपने पिता की लोहार की दुकान से शुरुआत करने के बाद, उन्होंने 10 साल की उम्र में एक जूस का स्टॉल लगाया और अपनी पहली कमाई से संस्कृत व्याकरण की किताब खरीदी। उन्होंने अपनी हाई स्कूल और कॉलेज की शिक्षा का खर्च खुद उठाया। अजीम प्रेमजी विश्वविद्यालय, बेंगलुरु से नेतृत्व विकास में स्नातकोत्तर डिप्लोमा धारक, अबोध व्यक्तिगत विकास और सामुदायिक सशक्तिकरण के लिए समर्पित हैं। उनकी जमीनी समझ और नेतृत्व कौशल पंचलाइट फाउंडेशन के सामुदायिक कार्य का मार्गदर्शन करते हैं। एक मुख्य सलाहकार और संरक्षक के रूप में, वह संगठन की रणनीतियों में महत्वपूर्ण भूमिका निभाते हैं, समाज में सकारात्मक बदलाव लाने की हमारी प्रतिबद्धता को और मजबूत करते हैं।`,

  amitKumarThakurName: "अमित कुमार ठाकुर",
  amitKumarThakurPosition: "न्यासी",
  amitKumarThakurDescription: `अमित ठाकुर एक प्रतिबद्ध विकास पेशेवर हैं, जिनके पास जमीनी स्तर पर ग्रामीण परिवर्तन में एक दशक से अधिक का अनुभव है। सिलीगुड़ी इंस्टीट्यूट ऑफ टेक्नोलॉजी से बी.टेक स्नातक होने के बाद, उन्होंने पारंपरिक कॉर्पोरेट मार्ग अपनाने के बजाय हाशिए पर पड़े समुदायों के साथ काम करना चुना。
वह 2012 में प्रोफेशनल असिस्टेंस फॉर डेवलपमेंट एक्शन (PRADAN) में शामिल हुए और तब से बिहार, विशेष रूप से किशनगंज में ग्रामीण विकास कार्यों में गहराई से शामिल रहे हैं। उनके प्रयास रोजगार सृजन, उद्यम विकास, स्थायी आजीविका निर्माण, महिलाओं के सशक्तिकरण और सामुदायिक संस्थानों को मजबूत करने पर केंद्रित हैं。
पंचलाइट फाउंडेशन में, अमित ठाकुर एक संरक्षक और मार्गदर्शक के रूप में कार्य करते हैं, रणनीतिक सलाह और क्षेत्र-आधारित अंतर्दृष्टि प्रदान करते हैं। उनका व्यापक जमीनी अनुभव संगठन को वास्तविक दुनिया की चुनौतियों में मजबूती से खड़ा रहने में मदद करता है, जबकि प्रभावशाली सामाजिक हस्तक्षेपों का डिजाइन तैयार किया जाता है。
विकास और परामर्श दोनों में अपनी दोहरी भागीदारी के साथ, अमित संस्थागत और सामुदायिक दोनों स्तरों पर सार्थक परिवर्तन लाने में महत्वपूर्ण भूमिका निभा रहे हैं।`,

  sanjayKumarThakurName: "संजय कुमार ठाकुर",
  sanjayKumarThakurPosition: "न्यासी",
  sanjayKumarThakurDescription:
    "संजय कुमार ठाकुर पंचलाइट फाउंडेशन ट्रस्ट के दूरदर्शी संस्थापक हैं, जो रंगमंच को सामाजिक परिवर्तन के एक शक्तिशाली उपकरण के रूप में उपयोग करने के लिए समर्पित एक मंच है। 2003 में बिहार के अररिया से अपनी यात्रा शुरू करते हुए, उन्होंने IPTA, रेणु सांस्कृतिक मंच, और भारतीय कला संस्कृति मंच जैसे प्रसिद्ध संगठनों के साथ नाटकों के माध्यम से महत्वपूर्ण सामाजिक मुद्दों पर जागरूकता बढ़ाई। 2005 में, एड्स जागरूकता अभियान में उनकी भागीदारी ने उन्हें यह महसूस कराया कि कला वास्तविक परिवर्तन ला सकती है। भारतीय कला संस्कृति मंच (2006-2010) के सचिव के रूप में उनके नेतृत्व में शिक्षा, निषेध और सामाजिक सुधार पर महत्वपूर्ण अभियान चलाए गए। उन्होंने बाद में मुख्यमंत्री अक्षर अंचल योजना जैसे प्रभावशाली परियोजनाओं में योगदान दिया और बाल कुपोषण, बाल विवाह और दहेज से निपटने के लिए J-PAL साउथ एशिया, बिहार शिक्षा परियोजना परिषद, और समाज कल्याण विभाग के साथ काम किया।अक्टूबर 2011 से जुलाई 2012 तक, उन्होंने J-PAL साउथ एशिया के लिए एक सर्वेयर के रूप में काम किया, सर्वेक्षण किए और सामाजिक हस्तक्षेपों में शोध में योगदान दिया। 2015 में, उन्होंने प्रोजेक्ट पोटेंशियल ट्रस्ट के साथ ग्रामीण विकास और शिक्षा पहल का नेतृत्व किया और ई-अर्थ कला मंच (2018-2020) के माध्यम से सामाजिक परिवर्तन को आगे बढ़ाया। महामारी के दौरान, उन्होंने जागरूकता अभियानों पर PRADAN के साथ काम किया और बाद में दिव्या भारत हिंदी समाचार में एक समाचार एंकर बन गए। अप्रैल 2021 से मार्च 2022 तक, उन्होंने PRADAN के साथ 'सेकंड चांस एजुकेशन प्रोजेक्ट' पर काम किया, महिलाओं को शिक्षा के माध्यम से सशक्त बनाया। 2022 में, उन्होंने पंचलाइट फाउंडेशन ट्रस्ट की स्थापना की, अपनी दृष्टि को प्रभावशाली नुक्कड़ नाटकों के मंचन के माध्यम से साकार किया। उनके नेतृत्व में, फाउंडेशन ने स्थानीय समुदायों के सहयोग से स्वच्छता, सशक्तिकरण और मतदाता जागरूकता जैसे प्रमुख मुद्दों को संबोधित किया।आज, संजय कुमार ठाकुर अपनी कला के माध्यम से परिवर्तन को प्रेरित करना जारी रखे हुए हैं, पंचलाइट फाउंडेशन ट्रस्ट के मिशन को आगे बढ़ा रहे हैं - एक अधिक सूचित, समावेशी और सशक्त समाज का निर्माण।",
  rajaniJhaName: "रजनी झा",
  rajaniJhaPosition: "बोर्ड सदस्य",
  rajaniJhaDescription:
    "रजनी झा ने यूनिसेफ जैसे प्रसिद्ध संगठनों के साथ काम किया है, विभिन्न सामाजिक कार्यों में अपनी विशेषज्ञता का योगदान दिया है। ऐसे संगठनों के साथ काम करने के उनके अनुभव ने उन्हें जमीनी और वैश्विक दोनों स्तरों पर महत्वपूर्ण मुद्दों को संबोधित करने में मूल्यवान अंतर्दृष्टि प्राप्त करने में मदद की है। वर्तमान में, वह पंचलाइट फाउंडेशन की ट्रस्टी के रूप में कार्यरत हैं, जहाँ वह बाल विवाह, स्वास्थ्य, महिला सशक्तिकरण और महामारियों जैसे सामाजिक मुद्दों पर जागरूकता बढ़ाने और उन्हें संबोधित करने में सक्रिय रूप से काम करती हैं। अपनी भूमिका के माध्यम से, वह सकारात्मक सामाजिक परिवर्तन लाने में महत्वपूर्ण योगदान देना जारी रखती हैं। ",

  ramashankarDasName: "रमाशंकर दास",
  ramashankarDasPosition: "बोर्ड सदस्य",
  ramashankarDasDescription:
    "रामशंकर दास एक अनुभवी उद्यमी और प्रतिबद्ध परोपकारी हैं। समावेशी विकास में दृढ़ विश्वास के साथ, उन्होंने अपने व्यावसायिक प्रयासों के साथ-साथ सामुदायिक कल्याण पहलों का लगातार समर्थन किया है। COVID-19 लॉकडाउन के दौरान, उन्होंने एक स्थानीय एनजीओ को आवश्यक वस्तुओं को क्रेडिट पर बाजार दर से कम दरों पर आपूर्ति करके महत्वपूर्ण सहायता प्रदान की, जिससे वंचित समुदायों तक प्रभावी राहत वितरण संभव हो सका।पंचलाइट फाउंडेशन के संस्थापक और बोर्ड सदस्य के रूप में, श्री दास रणनीतिक अंतर्दृष्टि और सामाजिक प्रतिबद्धता का एक अनूठा मिश्रण लाते हैं। उनका मार्गदर्शन और निरंतर समर्थन शिक्षा, जागरूकता और सशक्तिकरण के माध्यम से जमीनी स्तर पर परिवर्तन लाने के फाउंडेशन के मिशन को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाते हैं।",

  lakshmiDeviName: "लक्ष्मी देवी",
  lakshmiDeviPosition: "बोर्ड सदस्य",
  lakshmiDeviDescription:
    "लक्ष्मी देवी समाज में सकारात्मक बदलाव लाने के लिए समर्पित एक प्रतिबद्ध समाज सेविका हैं। उन्होंने महिला सशक्तिकरण, शिक्षा, स्वास्थ्य और सामाजिक समानता जैसे विभिन्न सामाजिक मुद्दों पर काम किया है, जिसमें हाशिए पर पड़े समुदायों का समर्थन करने पर विशेष ध्यान दिया गया है। वह बाल विवाह और महामारियों जैसे महत्वपूर्ण मुद्दों पर महिलाओं के बीच जागरूकता बढ़ाने के लिए नियमित रूप से बैठकें आयोजित करती हैं।वर्तमान में, वह पंचलाइट फाउंडेशन की ट्रस्टी के रूप में कार्यरत हैं, जो संगठन की सामाजिक पहलों और कार्यक्रमों के लिए मार्गदर्शन और सहायता प्रदान करती हैं। उनका नेतृत्व और प्रतिबद्धता फाउंडेशन के सकारात्मक सामाजिक परिवर्तन लाने के मिशन को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाते हैं।",

  akankshaBhartiName: "आकांक्षा भारती",
  akankshaBhartiPosition: "बोर्ड सदस्य",
  akankshaBhartiDescription:
    "आकांक्षा एक शिक्षिका और समाज सेविका हैं, जिनके पास शिक्षा के क्षेत्र में तीन साल का अनुभव है। उन्होंने निजी स्कूलों में पढ़ाते हुए बच्चों के समग्र विकास में योगदान दिया है। वर्तमान में, वह उच्च शिक्षा प्राप्त कर रही हैं और पंचलाइट फाउंडेशन के साथ अधिगमशाला जैसी पहलों में सक्रिय रूप से शामिल हैं। वह शिक्षा और जागरूकता के माध्यम से समाज में सकारात्मक बदलाव लाने के लिए प्रतिबद्ध हैं। ",
  jiwachhRamName: "जीवाछ राम",
  jiwachhRamPosition: "बोर्ड सदस्य",
  jiwachhRamDescription:
    "जीवाछ राम ने 1992 में नुक्कड़ नाटक के साथ अपनी यात्रा शुरू की। इन वर्षों में, उन्होंने विभिन्न सामाजिक मुद्दों पर जागरूकता बढ़ाने के लिए नुक्कड़ नाटकों में सक्रिय रूप से भाग लिया है। उन्होंने बाल कुपोषण, निषेध, बाल विवाह, दहेज उन्मूलन, स्वच्छता और मतदाता जागरूकता जैसे विषयों पर नाटक किए हैं, जिससे कई अभियानों में योगदान मिला है। जीवाछ राम ने रंगमंच के माध्यम से सामाजिक परिवर्तन को बढ़ावा देने में महत्वपूर्ण भूमिका निभाई है, अपने प्रदर्शन का उपयोग शिक्षा और जागरूकता फैलाने के लिए किया है। वह समाज में सकारात्मक बदलाव लाने के लिए रंगमंच की शक्ति में विश्वास करते हैं और अपने नाटकों के माध्यम से लोगों को सशक्त बनाने का प्रयास करते हैं। वर्तमान में, वह पंचलाइट फाउंडेशन से जुड़े हुए हैं और उनके नुक्कड़ नाटक कार्यक्रमों में सक्रिय रूप से भाग लेते हैं।",

  youName: "आप",
  youPosition: "भविष्य के परिवर्तनकर्ता",
  youDescription:
    "हमारी टीम में शामिल हों और बदलाव लाएं! अगली कहानी आपकी हो सकती है।",

  readMore: "और पढ़ें",

  getInvolved: "शामिल हों",
  getInvolvedIntro:
    "पंचलाइट फाउंडेशन परिवार का हिस्सा बनने के कई तरीके हैं। आपका समय, कौशल और समर्थन कई लोगों के जीवन में महत्वपूर्ण बदलाव ला सकते हैं।",

  volunteerWithUsTitle: "हमारे साथ स्वयंसेवा करें",
  volunteerWithUsDesc:
    "जमीनी स्तर पर या दूर से हमारे कार्यक्रमों में सीधे अपना समय और कौशल का योगदान करें।",
  becomeAdhigamSarthiTitle: "अधिगम सारथी बनें",
  becomeAdhigamSarthiDesc:
    "एक प्रशिक्षित सुविधाकर्ता के रूप में अपने समुदाय में सीखने की गतिविधियों और जागरूकता अभियानों का नेतृत्व करें।",
  supportPerformanceTitle: "एक प्रदर्शन का समर्थन करें",
  supportPerformanceDesc:
    "गांवों में सामाजिक संदेश फैलाने के लिए एक नुक्कड़ नाटक या सांस्कृतिक कार्यक्रम प्रायोजित करें।",
  donateTitle: "दान करें",
  donateDesc:
    "आपका वित्तीय समर्थन हमें अपनी पहुंच बढ़ाने और हमारे प्रभावशाली कार्यक्रमों को बनाए रखने में सक्षम बनाता है।",
  partnerWithUsTitle: "हमारे साथ साझेदारी करें",
  partnerWithUsDesc:
    "एक संगठन, कॉर्पोरेट, या सरकारी निकाय के रूप में हमारे साथ सहयोग करें।",

  beAVoiceForChange: "बदलाव के लिए एक आवाज बनें!",
  joinPunchlightFoundation: "पंचलाइट फाउंडेशन से जुड़ें",
  joinPunchlightDesc1:
    "क्या आप जमीनी स्तर पर वास्तविक प्रभाव डालने के लिए जुनूनी हैं? क्या आप जीवन को बदलने के लिए शिक्षा, कला, और सामुदायिक कार्रवाई की शक्ति में विश्वास करते हैं?",
  joinPunchlightDesc2:
    "पंचलाइट फाउंडेशन हमेशा ऐसे समर्पित व्यक्तियों की तलाश में रहता है जो हमारे विजन को साझा करते हैं। चाहे आप एक अनुभवी पेशेवर हों, एक नए स्नातक हों, या एक भावुक स्वयंसेवक हों, हमारी टीम में आपके लिए एक जगह है।",
  joinNow: "अभी जुड़ें",

  // Contact Page Content
  phone: "फ़ोन",
  email: "ईमेल",
  location: "स्थान",
  sendUsMessage: "हमें संदेश भेजें",
  yourName: "आपका नाम",
  yourEmail: "आपका ईमेल",
  subject: "विषय",
  yourMessage: "आपका संदेश",
  sendMessage: "संदेश भेजें",
  punchlightOffice: "पंचलाइट फाउंडेशन कार्यालय",
  sorryNotPresent:
    "क्षमा करें, हम अभी इस शहर/पिनकोड में मौजूद नहीं हैं। डिफ़ॉल्ट स्थान दिखा रहे हैं।",
  currentLocation: "वर्तमान स्थान",
  latitude: "अक्षांश",
  longitude: "देशांतर",
  findUsOnline: "हमें ऑनलाइन ढूंढें",
  messageSentSuccess: "संदेश सफलतापूर्वक भेजा गया!",
  messageSentFail: "संदेश भेजने में विफल। कृपया बाद में पुनः प्रयास करें।",

  // Media and Publications Page
  mediaPublicationsTitle: "मीडिया और प्रकाशन",
  mediaPublicationsIntro:
    "यहां आपको हमारे नवीनतम अपडेट, समाचार कवरेज और डाउनलोड करने योग्य संसाधन मिलेंगे। समुदायों को सशक्त बनाने की हमारी यात्रा से जुड़े रहें।",
  latestVideosTitle: "नवीनतम वीडियो",
  watchOnYouTube: "यूट्यूब पर देखें",
  newsArticlesTitle: "समाचार लेख",
  downloadsReportsTitle: "डाउनलोड और रिपोर्ट",

  // Specific media data (structured for translation)
  mediaData: {
    youtubeVideos: [
      {
        id: "video_g9FRlzB70ko",
        embedId: "g9FRlzB70ko",
        title: "सड़क सुरक्षा जागरूकता कार्यक्रम",
        channel: "पंचलाइट फाउंडेशन",
        views: "120 दृश्य",
        timeAgo: "2 सप्ताह पहले",
      },
      {
        id: "video_hUV9MtvLdRI",
        embedId: "hUV9MtvLdRI",
        title: "पंचलाइट फाउंडेशन – सामुदायिक जागरूकता",
        channel: "पंचलाइट फाउंडेशन",
        views: "85 दृश्य",
        timeAgo: "1 सप्ताह पहले",
      },
    ],
    newsArticles: [
      {
        id: "news_nukkad_natak",
        image: "image53",
        title: "स्वच्छता को लेकर नुक्कड़ नाटक का आयोजन",
        snippet:
          "नगर परिषद क्षेत्र में स्वच्छता को लेकर नुक्कड़ नाटक का आयोजन किया गया। इस अवसर पर बच्चों और नागरिकों को स्वच्छता के प्रति जागरूक किया गया।",
        publication: "सिटी बाइट्स",
        date: "जून 28, 2025",
        featured: true,
      },
      {
        id: "news_government_scheme",
        image: "image54",
        title: "हर बहना को ₹12 हजार की योजना",
        snippet:
          "सरकार द्वारा महिलाओं के सशक्तिकरण के लिए ₹12,000 सालाना सहायता की योजना शुरू की गई है। इस योजना से लाखों महिलाएं लाभान्वित हो रही हैं।",
        publication: "सरकारी विज्ञप्ति",
        date: "जून 28, 2025",
      },
    ],
    otherPublications: [
      {
        id: "publication_pdf_annual_report",
        type: "दस्तावेज़",
        icon: "[https://cdn-icons-png.flaticon.com/512/337/337946.png](https://cdn-icons-png.flaticon.com/512/337/337946.png)",
        title: "पंचलाइट फाउंडेशन वार्षिक रिपोर्ट 2024",
        description:
          "हमारी नवीनतम वार्षिक रिपोर्ट डाउनलोड करें और हमारी प्रगति के बारे में जानें।",
        date: "जनवरी 15, 2025",
        link: "[https://youtu.be/GleVf3irSXw?si=NKrRVKBxVWx1N7u](https://youtu.be/GleVf3irSXw?si=NKrRVKBxVWx1N7u)_",
      },
      {
        id: "publication_image_gallery",
        type: "फोटो गैलरी",
        icon: "[https://cdn-icons-png.flaticon.com/512/1042/1042339.png](https://cdn-icons-png.flaticon.com/512/1042/1042339.png)",
        title: "सामुदायिक कार्यक्रम फोटो गैलरी",
        description:
          "हमारे हाल के सामुदायिक आउटरीच कार्यक्रमों की तस्वीरें देखें।",
        date: "जून 1, 2025",
        link: "/gallery/community_events",
      },
    ],
  },
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
