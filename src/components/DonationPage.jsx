import React, { useState, useContext } from "react"; // Added useContext
import "./DonationPage.css";
import { assets } from '../assets/assets';
import { LanguageContext } from '../LanguageProvider'; // Import LanguageContext

const DonationPage = () => {
  const { content } = useContext(LanguageContext); // Use useContext to get content

  const [donation, setDonation] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'online', // This value is not used in the current UI, but kept for data structure
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donation);
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
          <h1 className="hero-title">{content.donationHeroTitle}</h1> {/* Translated */}
          <p className="hero-subtitle">
            {content.donationHeroSubtitle} {/* Translated */}
          </p>
        </div>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <h2 className="section-title">{content.donationSectionTitle}</h2> {/* Translated */}
          <div className="badge"><span>🏛</span> {content.donationTaxExemptionBadge}</div> {/* Translated */}

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>{content.donationFullNameLabel}</label> {/* Translated */}
              <input type="text" name="name" value={donation.name} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>{content.donationEmailLabel}</label> {/* Translated */}
              <input type="email" name="email" value={donation.email} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>{content.donationPhoneLabel}</label> {/* Translated */}
              <input type="tel" name="phone" value={donation.phone} onChange={handleChange} placeholder="+91-8709945694" />
            </div>

            <div className="input-group">
              <label>{content.donationAmountLabel}</label> {/* Translated */}
              <input type="number" name="amount" value={donation.amount} onChange={handleChange} required min="1" />
            </div>

            <div className="input-group">
              <label>{content.donationMessageLabel}</label> {/* Translated */}
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
              {content.donateNowButton} {/* Translated */}
            </button>
          </form>

          <div className="info-card cta-box">
            <h3 id="cta-title" className="section-title">{content.donationiACTTitle}</h3> {/* Translated */}
            <p>{content.donationiACTP1}</p> {/* Translated */}
            <p>{content.donationiACTP2}</p> {/* Translated */}
          </div>

          
        </div>

        <div className="right-panel">
          <div className="info-card">
            <h3 className="section-title">{content.donationImpactTitle}</h3> {/* Translated */}
            <p>{content.donationImpactP1}</p> {/* Translated */}
            <ul className="impact-list">
              <li><div className="impact-icon"></div>{content.donationImpactL1}</li> {/* Translated */}
              <li><div className="impact-icon"></div>{content.donationImpactL2}</li> {/* Translated */}
              <li><div className="impact-icon"></div>{content.donationImpactL3}</li> {/* Translated */}
              <li><div className="impact-icon"></div>{content.donationImpactL4}</li> {/* Translated */}
            </ul>
          </div>

          <div className="info-card">
            <h3 className="section-title">{content.donationBankTransferTitle}</h3> {/* Translated */}
            <div className="bank-details">
              <p><strong>{content.donationAccountName}</strong> {content.donationAccountNameValue}</p> {/* Translated */}
              <p><strong>{content.donationBankName}</strong> {content.donationBankNameValue}</p> {/* Translated */}
              <p><strong>{content.donationAccountNumber}</strong> {content.donationAccountNumberValue}</p> {/* Translated */}
              <p><strong>{content.donationIFSCCode}</strong> {content.donationIFSCCodeValue}</p> {/* Translated */}
              <p><strong>{content.donationBranch}</strong> {content.donationBranchValue}</p> {/* Translated */}
              <p><strong>{content.donationAccountType}</strong> {content.donationAccountTypeValue}</p> {/* Translated */}
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">{content.donationInKindSupportTitle}</h3> {/* Translated */}
            <p>{content.donationInKindSupportP}</p> {/* Translated */}
            <div className="contact-info">
              <div><span>📞</span><strong> {content.donationPhone}</strong> {content.donationPhoneNumber}</div> {/* Translated */}
              <div><span>📧</span><strong> {content.donationEmail}</strong> {content.donationEmailAddress}</div> {/* Translated */}
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">{content.donationTransparencyTitle}</h3> {/* Translated */}
            <div className="badge"><span>🏛</span> {content.donationTaxExemptionBadge}</div> {/* Translated */}
            <p>{content.donationTransparencyP}</p> {/* Translated */}
          </div>
        </div>
      </div>

      {showPopup && <div className="popup">{content.donationPopupMessage}</div>} {/* Translated */}
    </div>
  );
};

export default DonationPage;
