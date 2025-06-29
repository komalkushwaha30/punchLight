import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Home from './components/Home';
import About from './components/About';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';
import WhatWeDo from './components/WhatWeDo'; // Import the WhatWeDo component
import Donation from './components/Donation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impact from './components/Impact';
import MediaAndPublications from './components/MediaAndPublications';
import PublicationsSection from './components/PublicationsSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWeDo />} /> {/* New Route */}
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/donation' element={<Donation/>} />
        <Route path='/impact' element={<Impact/>} />
        <Route path='/media' element ={<MediaAndPublications/>} />
       
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;
