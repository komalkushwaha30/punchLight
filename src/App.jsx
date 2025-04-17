import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<MissionVision />} />
        <Route path="/vision" element={<MissionVision />} />
        <Route path="/pillar" element={<PillarsAndValues />} />
        <Route path="/corevalues" element={<CoreValues />} />
        <Route path="/story" element={<Story />} />
        <Route path="/project" element={<OurPrograms />} />
        <Route path="/goal" element={<Goals2025 />} />
        <Route path="/detailed-goal" element={<DetailedGoals2025 />} />
        <Route path="/testimonial" element={<ChandanTestimonial />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
