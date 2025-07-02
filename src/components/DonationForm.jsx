import React, { useState } from 'react';
import axios from 'axios';
import './DonationForm.css'
const DonationForm = ({ onPaymentSuccess, onPaymentFailure }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success', 'error'

  const displayMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000); // Message disappears after 5 seconds
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    if (!name || !email || !amount) {
      displayMessage('Please fill in all fields.', 'error');
      setLoading(false);
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      displayMessage('Please enter a valid positive amount.', 'error');
      setLoading(false);
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      displayMessage('Razorpay SDK failed to load. Are you connected to the internet?', 'error');
      setLoading(false);
      return;
    }

    try {
      // 1. Save donor details and create order on backend
      const response = await axios.post('https://punchlightbackend.vercel.app/api/donations/create-order', {      
        name,
        email,
        amount: parseFloat(amount) * 100, // Razorpay takes amount in paisa
      });

      const { orderId, keyId, donorId } = response.data;

      // 2. Open Razorpay Checkout
      const options = {
        key: keyId, // Your Test Key ID
        amount: parseFloat(amount) * 100, // Amount in paisa
        currency: 'INR',
        name: 'Donation App',
        description: 'Support our cause',
        order_id: orderId, // This is the order ID created on your backend
        handler: async function (response) {
          // This function is called when the payment is successful
          setLoading(true); // Keep loading state true until verification is done
          try {
            // 3. Verify payment on backend
            const verificationResponse = await axios.post('https://punchlightbackend.vercel.app/api/donations/verify-payment', {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              donorId: donorId, // Pass donorId to update payment status
            });

            if (verificationResponse.data.success) {
              displayMessage('Payment successful! Thank you for your donation.', 'success');
              setName('');
              setEmail('');
              setAmount('');
              if (onPaymentSuccess) onPaymentSuccess();
            } else {
              displayMessage('Payment verification failed.', 'error');
              if (onPaymentFailure) onPaymentFailure('Payment verification failed.');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            displayMessage('Payment verification failed. Please contact support.', 'error');
            if (onPaymentFailure) onPaymentFailure('Payment verification failed.');
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: '', // Optional: user's phone number
        },
        notes: {
          address: 'Donation to a noble cause',
        },
        theme: {
          color: '#6366f1', // Indigo color for Razorpay popup
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        setLoading(false); // Stop loading on payment failure
        console.error('Payment failed:', response.error);
        displayMessage(`Payment failed: ${response.error.description || 'Unknown error'}`, 'error');
        if (onPaymentFailure) onPaymentFailure(`Payment failed: ${response.error.description || 'Unknown error'}`);
      });
      rzp1.open();
    } catch (error) {
      setLoading(false);
      console.error('Error creating order or initiating payment:', error);
      const errorMessage = error.response?.data?.message || 'Failed to initiate payment. Please try again.';
      displayMessage(errorMessage, 'error');
      if (onPaymentFailure) onPaymentFailure(errorMessage);
    }
  };

  return (
    <div className="form-container">
      <h2 className="sub-heading">Make a Donation</h2>
      {message && (
        <div className={`form-message ${messageType}`}>
          {message}
        </div>
      )}
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">
            Amount (INR)
          </label>
          <input
            type="number"
            id="amount"
            className="form-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="any"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="spinner"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Donate Now'
          )}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
