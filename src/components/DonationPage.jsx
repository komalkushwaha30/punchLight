import React, { useState, useContext } from "react";
import "./DonationPage.css";
import { assets } from '../assets/assets';
import { LanguageContext } from '../LanguageProvider';

const DonationPage = () => {
  const { content } = useContext(LanguageContext);

  const [donation, setDonation] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'online',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donation);

    // Open Razorpay link in a new tab
    window.open("https://razorpay.me/@punchlightfoundationtrust", "_blank");

    // You might want to show a message to the user here,
    // indicating that a new tab has opened for payment.
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="donation-container">
      <div className="hero-don">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{content.donationHeroTitle}</h1>
          <p className="hero-subtitle">
            {content.donationHeroSubtitle}
          </p>
        </div>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <h2 className="section-title">{content.donationSectionTitle}</h2>
          <div className="badge"><span>🏛</span> {content.donationTaxExemptionBadge}</div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>{content.donationFullNameLabel}</label>
              <input type="text" name="name" value={donation.name} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>{content.donationEmailLabel}</label>
              <input type="email" name="email" value={donation.email} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>{content.donationPhoneLabel}</label>
              <input type="tel" name="phone" value={donation.phone} onChange={handleChange} placeholder="+91-8709945694" />
            </div>

            <div className="input-group">
              <label>{content.donationAmountLabel}</label>
              <input type="number" name="amount" value={donation.amount} onChange={handleChange} required min="1" />
            </div>

            <div className="input-group">
              <label>{content.donationMessageLabel}</label>
              <textarea name="message" value={donation.message} onChange={handleChange} />
            </div>

            <button
              type="submit"
              className="submit-btn"
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              {content.donateNowButton}
            </button>
          </form>

          <div className="info-card cta-box">
            <h3 id="cta-title" className="section-title">{content.donationiACTTitle}</h3>
            <p>{content.donationiACTP1}</p>
            <p>{content.donationiACTP2}</p>
          </div>
        </div>

        <div className="right-panel">
          <div className="info-card">
            <h3 className="section-title">{content.donationImpactTitle}</h3>
            <p>{content.donationImpactP1}</p>
            <ul className="impact-list">
              <li><div className="impact-icon"></div>{content.donationImpactL1}</li>
              <li><div className="impact-icon"></div>{content.donationImpactL2}</li>
              <li><div className="impact-icon"></div>{content.donationImpactL3}</li>
              <li><div className="impact-icon"></div>{content.donationImpactL4}</li>
            </ul>
          </div>

          <div className="info-card">
            <h3 className="section-title">{content.donationBankTransferTitle}</h3>
            <div className="bank-details">
              <p><strong>{content.donationAccountName}</strong> {content.donationAccountNameValue}</p>
              <p><strong>{content.donationBankName}</strong> {content.donationBankNameValue}</p>
              <p><strong>{content.donationAccountNumber}</strong> {content.donationAccountNumberValue}</p>
              <p><strong>{content.donationIFSCCode}</strong> {content.donationIFSCCodeValue}</p>
              <p><strong>{content.donationBranch}</strong> {content.donationBranchValue}</p>
              <p><strong>{content.donationAccountType}</strong> {content.donationAccountTypeValue}</p>
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">{content.donationInKindSupportTitle}</h3>
            <p>{content.donationInKindSupportP}</p>
            <div className="contact-info">
              <div><span>📞</span><strong> {content.donationPhone}</strong> {content.donationPhoneNumber}</div>
              <div><span>📧</span><strong> {content.donationEmail}</strong> {content.donationEmailAddress}</div>
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">{content.donationTransparencyTitle}</h3>
            <div className="badge"><span>🏛</span> {content.donationTaxExemptionBadge}</div>
            <p>{content.donationTransparencyP}</p>
          </div>
        </div>
      </div>

      {showPopup && <div className="popup">{content.donationPopupMessage}</div>}
    </div>
  );
};

export default DonationPage;