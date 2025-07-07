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
import ProgramsSection from './components/ProgramsSection';
import ScrollToTop from './components/ScrollToTop';
import FaqSection from './components/FAQ';
import DonationPage from './components/DonationPage';
import { LanguageProvider } from './LanguageProvider';
import NotFound from './components/NotFound';




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWeDo />} /> {/* New Route */}
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/donation' element={<DonationPage/>} />
        <Route path='/publication' element ={<MediaAndPublications/>} />
        <Route path='/faqs' element={<FaqSection/>} />
        <Route path='/programs' element ={<ProgramsSection/>}/>
        <Route path="/impact" element={<Impact/>} />
        <Route path='/donate' element={<Donation/>} />
        <Route path='*' element={<NotFound/>}/>
       
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;

// debit card 
// email id account 
