import { useState, useEffect } from 'react';
import axios from 'axios';

const DonorList = ({ donors: donorsProp }) => {
  const [donors, setDonors] = useState(donorsProp || []);

  useEffect(() => {
    if (donorsProp) {
      setDonors(donorsProp);
    }
  }, [donorsProp]);

  return (
    <div className="donor-list-container">
      <h2 className="sub-heading">Recent Donors</h2>
      {donors.length === 0 ? (
        <p className="no-donations-message">No donations yet. Be the first!</p>
      ) : (
        <div className="donor-list">
          <ul>
            {donors.map((donor) => (
              <li key={donor._id}>
                <div className="donor-info">
                  <p className="donor-name">{donor.name}</p>
                  <p className="donor-email">{donor.email}</p>
                </div>
                <div className="donor-amount">
                  ₹{donor.amount.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DonorList;
