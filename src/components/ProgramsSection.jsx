import React from "react";
import "./ProgramsSection.css";

const programs = [
  {
    title: "Adhigamshala",
    image: "/images/programs/adhigamshala.jpg",
    description:
      "Community learning centers run by trained youth educators (Adhigam Sarthis) to build literacy, creativity, and leadership among children — especially girls."
  },
  {
    title: "Adhigamnatyya",
    image: "/images/programs/adhigamnatyya.jpg",
    description:
      "Street theatre and folk arts to raise awareness on gender equality, health, child rights, and more."
  },
  {
    title: "Adhigamsvavalamban",
    image: "/images/programs/adhigamsvavalamban.jpg",
    description:
      "Livelihood support through tailoring, skills training, and PM SVANidhi scheme, promoting economic self-reliance."
  },
  {
    title: "Adhigamsvasthya",
    image: "/images/programs/adhigamsvasthya.jpg",
    description:
      "Health awareness through workshops and theatre, supporting Ayushman card registration and menstrual health."
  }
];

const impact = [
  {
    heading: "People",
    description:
      "We believe that bringing about change in society requires committed and sensitive people working at the grassroots level. Punchlight Foundation has trained many young people who are working to bring about positive change in society in areas such as education, health, sanitation and livelihood. Our volunteers have impacted thousands of people by visiting villages and conducting street plays, awareness campaigns and programmes."
  },
  {
    heading: "Models",
    description:
      "Our programmes are based on practical and community-based models, which are being adopted by other organisations and local bodies. Initiatives like 'Adhigamshala' have promoted children's education, while campaigns like Ayushman Card awareness have helped connect rural families to health services. Our street plays and workshops are now being appreciated and adopted by government departments and schools as well."
  },
  {
    heading: "Scaling Up",
    description:
      "Today, Punchlight Foundation is actively working in several districts of Bihar and has reached out to more than 50,000 people. We work in collaboration with various community-based organizations and educational institutions. Our goal is to empower 5 lakh people in the field of education, health, employment and sanitation by connecting them with our programs by 2030."
  }
];

const ProgramsSection = () => (
  <section className="programs-section">
    <h2 className="section-title">Our Programs</h2>
    <div className="programs-grid">
      {programs.map((prog, i) => (
        <div className="program-card" key={i}>
          <img src={prog.image} alt={prog.title} className="program-img" />
          <div className="program-content">
            <h3>{prog.title}</h3>
            <p>{prog.description}</p>
          </div>
        </div>
      ))}
    </div>

    <h2 className="section-title impact-heading">Our Impact</h2>
    <div className="impact-grid">
      {impact.map((item, index) => (
        <div key={index} className="impact-card">
          <h3>{item.heading}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProgramsSection;
