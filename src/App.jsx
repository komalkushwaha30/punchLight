import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MissionVision from './components/MissionVision';
import PillarsAndValues from './components/Pillar';
import CoreValues from './components/CoreValues';
import Story from './components/Story';
import OurPrograms from './components/OurPrograms';
import Goals2025 from './components/Goals2025';
import DetailedGoals2025 from './components/DetailedGoals2025';
import ChandanTestimonial from './components/ChandanTestimonial';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="mission"><MissionVision /></section>
      <section id="pillar"><PillarsAndValues /></section>
      <section id="corevalues"><CoreValues /></section>
      <section id="story"><Story /></section>
      <section id="project"><OurPrograms /></section>
      <section id="goal"><Goals2025 /></section>
      <section id="detailed-goal"><DetailedGoals2025 /></section>
      <section id="testimonial"><ChandanTestimonial /></section>
      <section id="team"><TeamSection /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
