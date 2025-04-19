import "./Home.css";
import About from "./About";
import MissionVision from "./MissionVision";
import PillarsAndValues from "./Pillar";
import CoreValues from "./CoreValues";
import Story from "./Story";
import OurPrograms from "./OurPrograms";
import Goals2025 from "./Goals2025";
import DetailedGoals2025 from "./DetailedGoals2025";
import ChandanTestimonial from "./ChandanTestimonial";
import TeamSection from "./TeamSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="hero" id="home">
          <div className="overlay"></div>
          <div className="hero-content">
            <div className="hero-text">
              <img
                src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
                alt="Punchlight Logo"
                className="hero-logo"
              />
              <h1>Punchlight Foundation</h1>
              <p>For Every Community</p>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Home;
