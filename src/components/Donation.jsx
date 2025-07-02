import './Donation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm';
import DonorList from './DonorList';
import axios from 'axios';

function Donation() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const [showThankYou, setShowThankYou] = useState(false);
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate();

  const fetchDonors = async () => {
    try {
      const response = await axios.get('https://punchlightbackend.vercel.app/api/donations');
      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors:', error);
      showTemporaryNotification('Error fetching donor list.', 'error');
    }
  };

  const showTemporaryNotification = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage('');
    }, 5000);
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const handlePaymentSuccess = () => {
    setShowThankYou(true);
    fetchDonors();
  };

  const handleSeeImpact = () => {
    navigate('/impact');
  };

  return (
    <div className="app-container">
      {showNotification && (
        <div className={`notification ${notificationType}`}>
          {notificationMessage}
        </div>
      )}

      <h1 className="main-heading">Support Our Cause</h1>

      {showThankYou ? (
        <div className="thank-you-message">
          <h2>Thank you for your donation!</h2>
          <button className="btn-primary" onClick={handleSeeImpact}>
            See the Impact
          </button>
        </div>
      ) : (
        <div className="main-content">
          <div className="left-panel">
            <div className="section-card donation-form-card">
              <DonationForm
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentFailure={(message) => {
                  showTemporaryNotification(message || 'Payment failed. Please try again.', 'error');
                }}
              />
            </div>
          </div>
          <div className="right-panel">
            <div className="section-card donor-list-card">
              <DonorList donors={donors} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donation;
