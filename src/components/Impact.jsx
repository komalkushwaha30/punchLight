import { useEffect, useState } from 'react';
import DonorList from './DonorList';
import axios from 'axios';
import './Impact.css';

const Impact = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('https://punchlightbackend.vercel.app/api/donations');
        console.log("this is the resp",response);
        
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };
    fetchDonors();
  }, []);

  return (
    <div className="impact-container">
      <h1>Our Impact</h1>
      <DonorList donors={donors} />
    </div>
  );
};

export default Impact;